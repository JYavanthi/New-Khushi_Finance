import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    AadhaarNo: "",
    PANNo: "",
    CreatedBy: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const result = await response.text();
      alert(result);
      setFormData({ FirstName: "", LastName: "", Email: "", Phone: "", Address: "", AadhaarNo: "", PANNo: "", CreatedBy: 1 });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send data");
    }
  };

  return (


    <main>

      {/* Hero */}
      <section className="w-100 overflow-hidden">
        <img src="/assets/images/cu.jpeg" alt="Contact Us" className="w-100" />
      </section>

      {/* Main Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 align-items-start">

            {/* Form */}
            <div className="col-md-7">
              <h2 className="fw-bold text-teal mb-2">Send us a message</h2>
              <p className="text-warning small mb-4">
                Do you have a question? A complaint? Or need help to get the right advice? Feel free to contact us
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-teal">First Name</label>
                    <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange}
                      className="form-control rounded-pill" placeholder="Enter your first name" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-teal">Last Name</label>
                    <input type="text" name="LastName" value={formData.LastName} onChange={handleChange}
                      className="form-control rounded-pill" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="row g-3 mt-1">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-teal">Email</label>
                    <input type="email" name="Email" value={formData.Email} onChange={handleChange}
                      className="form-control rounded-pill" placeholder="Enter your email" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold text-teal">Contact Details</label>
                    <div className="input-group">
                      <span className="input-group-text">+91</span>
                      <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange}
                        className="form-control" placeholder="Enter your Phone No." required />
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="form-label fw-semibold text-teal">Address</label>
                  <textarea name="Address" value={formData.Address} onChange={handleChange}
                    className="form-control" rows={5} placeholder="Enter your address" required />
                </div>

                <button type="submit" className="btn btn-warning text-white fw-semibold mt-3 px-4 rounded-pill float-md-end">
                  Send a Message
                </button>
              </form>
            </div>

            {/* Info Card */}
            <div className="col-md-5 d-flex justify-content-md-end">
              <div className="card bg-teal text-white p-4 w-100 shadow-sm">
                <h3 className="text-center fw-bold mb-4">Hi! We are always <br /> here to help you</h3>

                <a href="tel:+919739871634" className="contact-item d-flex align-items-center text-decoration-none">
                  <i className="fas fa-headset fs-4 me-3 text-teal"></i>
                  <div>
                    <p className="fw-bold text-warning mb-0">Hotline No:</p>
                    <p className="fw-semibold text-dark mb-0">+91 9739871634</p>
                  </div>
                </a>

                <a href="https://wa.me/919739871634" target="_blank" rel="noreferrer"
                  className="contact-item d-flex align-items-center text-decoration-none">
                  <i className="fab fa-whatsapp fs-4 me-3 text-teal"></i>
                  <div>
                    <p className="fw-bold text-warning mb-0">SMS / Whatsapp:</p>
                    <p className="fw-semibold text-dark mb-0">+91 9739871634</p>
                  </div>
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@khushifinance.com&su=Loan%20Application&body=Hi%20Khushi%20Finance%20Team,%0A%0AI%20want%20to%20apply%20for%20a%20loan.%0A%0AThanks"
                  target="_blank" rel="noreferrer"
                  className="contact-item d-flex align-items-center text-decoration-none">
                  <i className="fas fa-envelope fs-4 me-3 text-teal"></i>
                  <div>
                    <p className="fw-bold text-warning mb-0">Email:</p>
                    <p className="fw-semibold text-dark mb-0">support@khushifinance.com</p>
                  </div>
                </a>

                <hr />
                <p className="text-center fw-semibold">Connect With Us:</p>
                <div className="d-flex justify-content-center gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61552391963634" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/khushi_finance_official/" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="https://x.com/Khushi__Finance" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-x-twitter"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.82526838573!2d77.60025287330492!3d13.04679161322889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17834d8fb349%3A0x54cd1cf1124bdf24!2s5th%20Cross%2C%201st%20Main%2C%20Netajinagar%2C%20Bengaluru%2C%20Karnataka%20560024!5e0!3m2!1sen!2sin!4v1770122404233!5m2!1sen!2sin"
          className="w-100 map-frame border-0"
          loading="lazy"
        />
      </section>

    </main>
  );
};

export default ContactUs;