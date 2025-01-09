import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-page mb-5">
      <div className="container">
        <h2 className="text-center my-5">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Get in Touch</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows={4} placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="col-md-6">
            <h4>Our Location</h4>
            <p>1234 Health Street, Healthy Town, HT 12345</p>
            <div className="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=..." 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
