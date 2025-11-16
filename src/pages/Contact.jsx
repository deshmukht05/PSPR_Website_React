import { Mail, MapPin, Phone } from "lucide-react";
import "../css/Contact.css";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-heading">
        <h1>Get In <span>Touch</span></h1>
        <span className="underline"></span>
        <p>Ready to transform your political strategy? Contact us today.</p>
      </div>

      <div className="contact-info">
        <h1>Contact Information</h1>

        <hr />

        <div className="contact-details">
          {/* Phone Details */}
          <div className="contact-phone">
            <div className="contact-icon">
              <Phone className="contact-icon-i" />
            </div>
            <div className="contact-d">
              <h1>Phone</h1>
              <a href="tel: +911234567890"> +91 1234567890</a>
            </div>
          </div>

          {/* Email Details */}
          <div className="contact-phone">
            <div className="contact-icon">
              <Mail className="contact-icon-i" />
            </div>
            <div className="contact-d">
              <h1>Email</h1>
              <a href="mailto:info@pspr.com">info@pspr.com</a>
            </div>
          </div>

          {/* Address Details */}
          <div className="contact-phone">
            <div className="contact-icon">
              <MapPin className="contact-icon-i" />
            </div>
            <div className="contact-d">
              <h1>Address</h1>
              <p>123 Political Avenue Nagpur, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
