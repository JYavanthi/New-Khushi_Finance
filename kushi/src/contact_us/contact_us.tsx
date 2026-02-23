import "./contact_us.css";
import cu from "../assets/cu.jpeg";
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.text();
            alert(result);

            // Reset form
            setFormData({
                FirstName: "",
                LastName: "",
                Email: "",
                Phone: "",
                Address: "",
                AadhaarNo: "",
                PANNo: "",
                CreatedBy: 1
            });

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send data");
        }
    };

    return (
        <section className="contact-page">

            <div className="contact-banner">
                <img src={cu} alt="Contact Us" />
            </div>

            <div className="contact-container">

                <div className="contact-form">

                    <div className="co-title">
                        <h2>Send us a message</h2>
                        <p className="subtitle">
                            Do you have a question? Feel free to contact us
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="form-row">
                            <div className="field">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    value={formData.FirstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            <div className="field">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="LastName"
                                    value={formData.LastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="field">
                                <label>Contact Details</label>
                                <div className="phone-input">
                                    <span>+91</span>
                                    <input
                                        type="text"
                                        name="Phone"
                                        value={formData.Phone}
                                        onChange={handleChange}
                                        placeholder="Enter your Phone No."
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label>Address</label>
                            <textarea
                                name="Address"
                                value={formData.Address}
                                onChange={handleChange}
                                placeholder="Enter your address"
                                required
                            />
                        </div>

                        <button type="submit" className="send-btn">
                            Send a Message
                        </button>

                    </form>

                </div>

                {/* RIGHT INFO CARD */}
                <div className="contact-info">
                    <h3>Hi! We are always<br />here to help you</h3>

                    {/* HOTLINE → PHONE */}
                    <a href="tel:+919739871634" className="info-box">
                        <i className="fa-solid fa-headset"></i>
                        <div>
                            <span>Hotline No:</span>
                            <p>+91 9739871634</p>
                        </div>
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/919739871634"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-box"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        <div>
                            <span>SMS / Whatsapp:</span>
                            <p>+91 9739871634</p>
                        </div>
                    </a>

                    {/* EMAIL WITH PRE-WRITTEN MESSAGE */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=support@khushifinance.com&su=Loan%20Application&body=Hi%20Khushi%20Finance%20Team,%0A%0AI%20want%20to%20apply%20for%20a%20loan.%0A%0A(Optional%20-%20fill%20if%20you%20want)%0AName:%0APhone:%0ALoan%20Type:%0AAmount:%0A%0AYou%20may%20also%20write%20your%20query%20below:%0A%0AThanks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-box"
                    >

                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <span>Email:</span>
                            <p>support@khushifinance.com</p>
                        </div>
                    </a>


                    <div className="a-social-section">
                        <p>Connect With Us:</p>

                        <div className="a-social-icons">

                            {/* FACEBOOK */}
                            <a
                                href="https://facebook.com/YOUR_PAGE_NAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://instagram.com/YOUR_PAGE_NAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            {/* TWITTER / X */}
                            <a
                                href="https://twitter.com/YOUR_PAGE_NAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                        </div>
                    </div>

                </div>

            </div>

            <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.82526838573!2d77.60025287330492!3d13.04679161322889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17834d8fb349%3A0x54cd1cf1124bdf24!2s5th%20Cross%2C%201st%20Main%2C%20Netajinagar%2C%20Bengaluru%2C%20Karnataka%20560024!5e0!3m2!1sen!2sin!4v1770122404233!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>


        </section>
    );
};

export default ContactUs;
