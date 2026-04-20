// const express = require("express");
// const cors = require("cors");
// const sql = require("mssql/msnodesqlv8"); 

// const app = express();

// app.use(express.json());
// app.use(cors());



// const connectionString =
//   "Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-RA0KPRS\\SQLEXPRESS;Database=KhushiFinance;Trusted_Connection=Yes;TrustServerCertificate=Yes;";

// sql.connect({ connectionString })
//   .then(() => console.log("✅ Connected to SQL Server successfully!"))
//   .catch(err => {
//     console.error("❌ Database connection failed:");
//     console.error("🔍 Full error object:", JSON.stringify(err, null, 2));
//     console.error("Raw error message:", err.message);
//  });

// /* ================= CONNECT DATABASE ================= */

// sql.connect(connectionString)
//   .then(() => console.log("✅ Connected to SQL Server successfully!"))
//   .catch(err => {
//     console.error("❌ Database connection failed:");
//     console.error(err);
//   });

// /* ================= TEST ROUTE ================= */

// app.get("/users", async (req, res) => {
//   try {
//     const result = await sql.query("SELECT * FROM Users");
//     res.json(result.recordset);
//   } catch (err) {
//     res.status(500).send("Query failed");
//   }
// });

// app.listen(5000, () => {
//   console.log("🚀 Server started on port 5000");
// });

const express = require("express");
const cors = require("cors");
const sql = require("mssql/msnodesqlv8");

const app = express();

app.use(express.json());
app.use(cors());

/* ================= CONNECTION STRING ================= */

const connectionString =
  "Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-RA0KPRS\\SQLEXPRESS;Database=KhushiFinance;Trusted_Connection=Yes;TrustServerCertificate=Yes;";

sql.connect({ connectionString })
  .then(() => console.log("✅ Connected to SQL Server successfully!"))
  .catch(err => {
    console.error("❌ Database connection failed:");
    console.error("🔍 Full error object:", JSON.stringify(err, null, 2));
    console.error("Raw error message:", err.message);
 });
/* ================= GET USERS ================= */

app.get("/users", async (req, res) => {
  try {
    const result = await sql.query(`
      SELECT TOP (1000) 
      UserID, FirstName, LastName, Phone, Email,
      Address, AadhaarNo, PANNo, CreatedBy,
      CreatedDate, ModifiedBy, ModifiedDate
      FROM KhushiFinance.dbo.Users
    `);

    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Query failed");
  }
});

/* ================= POST USER ================= */

app.post("/users", async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Phone,
      Email,
      Address,
      AadhaarNo,
      PANNo,
      CreatedBy
    } = req.body;

    await sql.query(`
      INSERT INTO KhushiFinance.dbo.Users
      (FirstName, LastName, Phone, Email, Address, AadhaarNo, PANNo, CreatedBy, CreatedDate)
      VALUES
      ('${FirstName}', '${LastName}', '${Phone}', '${Email}', '${Address}', '${AadhaarNo}', '${PANNo}', '${CreatedBy}', GETDATE())
    `);

    res.send("✅ User inserted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Insert failed");
  }
});

app.listen(5000, () => {
  console.log("🚀 Server started on port 5000");
});

require("./emailScheduler");