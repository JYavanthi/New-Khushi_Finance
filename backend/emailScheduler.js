const sql = require("mssql/msnodesqlv8");
const nodemailer = require("nodemailer");
const ExcelJS = require("exceljs");
const cron = require("node-cron");
const path = require("path");
const fs = require("fs");

/* ================= CONFIG — EDIT ONLY THE APP PASSWORD ================= */

const CONNECTION_STRING =
  "Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-RA0KPRS\\SQLEXPRESS;Database=KhushiFinance;Trusted_Connection=Yes;TrustServerCertificate=Yes;";

const EMAIL_CONFIG = {
  to:   "gunamc05@gmail.com",       // ← report arrives here
  user: "gunamc05@gmail.com",       // ← Gmail used to send
  pass: "ldun autm zjmw ixem",   // ← REPLACE with your Gmail App Password
};

/* ================= STEP 1: FETCH DATA FROM SQL ================= */

async function fetchUsersFromDB() {
  await sql.connect({ connectionString: CONNECTION_STRING });

  const result = await sql.query(`
    SELECT TOP (1000)
      UserID, FirstName, LastName, Phone, Email,
      Address, AadhaarNo, PANNo, CreatedBy,
      CreatedDate, ModifiedBy, ModifiedDate
    FROM KhushiFinance.dbo.Users
    WHERE CAST(CreatedDate AS DATE) = CAST(GETDATE() AS DATE)
    ORDER BY CreatedDate DESC
  `);

  return result.recordset;
}

/* ================= STEP 2: CREATE EXCEL FILE ================= */

async function createExcelFile(users) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Users Report");

  const headerFill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1F4E79" },
  };
  const headerFont = { bold: true, color: { argb: "FFFFFFFF" }, name: "Arial", size: 11 };
  const headerAlignment = { horizontal: "center", vertical: "middle" };

  sheet.columns = [
    { header: "User ID",       key: "UserID",       width: 10 },
    { header: "First Name",    key: "FirstName",     width: 18 },
    { header: "Last Name",     key: "LastName",      width: 18 },
    { header: "Phone",         key: "Phone",         width: 16 },
    { header: "Email",         key: "Email",         width: 28 },
    { header: "Address",       key: "Address",       width: 30 },
    // { header: "Aadhaar No",    key: "AadhaarNo",     width: 18 },
    // { header: "PAN No",        key: "PANNo",         width: 14 },
    // { header: "Created By",    key: "CreatedBy",     width: 16 },
    { header: "Created Date",  key: "CreatedDate",   width: 20 },
    // { header: "Modified By",   key: "ModifiedBy",    width: 16 },
    // { header: "Modified Date", key: "ModifiedDate",  width: 20 },
  ];

  sheet.getRow(1).eachCell((cell) => {
    cell.fill = headerFill;
    cell.font = headerFont;
    cell.alignment = headerAlignment;
    cell.border = {
      bottom: { style: "medium", color: { argb: "FF000000" } },
    };
  });
  sheet.getRow(1).height = 22;

  users.forEach((user, index) => {
    const row = sheet.addRow({
      UserID:       user.UserID,
      FirstName:    user.FirstName,
      LastName:     user.LastName,
      Phone:        user.Phone,
      Email:        user.Email,
      Address:      user.Address,
    //   AadhaarNo:    user.AadhaarNo,
    //   PANNo:        user.PANNo,
    //   CreatedBy:    user.CreatedBy,
      CreatedDate:  user.CreatedDate  ? new Date(user.CreatedDate).toLocaleString("en-IN")  : "",
    //   ModifiedBy:   user.ModifiedBy,
    //   ModifiedDate: user.ModifiedDate ? new Date(user.ModifiedDate).toLocaleString("en-IN") : "",
    });

    if (index % 2 === 1) {
      row.eachCell((cell) => {
        cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD9E1F2" } };
      });
    }

    row.eachCell((cell) => {
      cell.font = { name: "Arial", size: 10 };
      cell.alignment = { vertical: "middle" };
    });
  });



  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to:   { row: 1, column: sheet.columns.length },
  };

  const today = new Date().toISOString().slice(0, 10);
  const filePath = path.join(__dirname, `KhushiFinance_Users_${today}.xlsx`);
  await workbook.xlsx.writeFile(filePath);
  return filePath;
}

/* ================= STEP 3: SEND EMAIL ================= */

async function sendEmail(filePath) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_CONFIG.user,
      pass: EMAIL_CONFIG.pass,
    },
  });

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit", month: "long", year: "numeric",
  });

  await transporter.sendMail({
    from:    `"KhushiFinance Reports" <${EMAIL_CONFIG.user}>`,
    to:      EMAIL_CONFIG.to,
    subject: `📊 KhushiFinance Daily User Report — ${today}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #1F4E79;">KhushiFinance — Daily User Report</h2>
        <p>Hello,</p>
        <p>Please find attached the <strong>daily user report</strong> for <strong>${today}</strong>.</p>
        <p>This report contains all registered users from the KhushiFinance database.</p>
        <br/>
        <p style="color: #888; font-size: 12px;">This is an automated email sent every day at 4:00 PM IST.</p>
      </div>
    `,
    attachments: [
      {
        filename: path.basename(filePath),
        path:     filePath,
      },
    ],
  });

  console.log(`✅ Email sent to gunamc05@gmail.com at ${new Date().toLocaleTimeString("en-IN")}`);
  fs.unlinkSync(filePath);
}

/* ================= STEP 4: MAIN JOB ================= */

async function runDailyReport() {
  console.log(`🕓 Running daily report at ${new Date().toLocaleTimeString("en-IN")}...`);
  try {
    const users = await fetchUsersFromDB();
    console.log(`📋 Fetched ${users.length} users from database.`);

    const filePath = await createExcelFile(users);
    console.log(`📁 Excel file created: ${filePath}`);

    await sendEmail(filePath);
  } catch (err) {
    console.error("❌ Daily report failed:", err.message);
  }
}

/* ================= SCHEDULE: Every day at 4:00 PM IST ================= */

cron.schedule("0 16 * * *", () => {
  runDailyReport();
}, {
  timezone: "Asia/Kolkata",
});

console.log("⏰ Scheduler running. Report will be emailed to gunamc05@gmail.com every day at 4:00 PM IST.");

// ✅ To TEST immediately without waiting for 4 PM, uncomment the line below:
runDailyReport();