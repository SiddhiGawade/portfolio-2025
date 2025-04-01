import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are you open to freelance projects or collaborations?",
      answer:
        "Yes! I'm open to freelance projects, internships, and collaborations. Feel free to reach out!",
    },
    {
      question: "What's the best way to contact you?",
      answer:
        "You can email me at siddhigawade.sbg25@gmail.com or connect with me on LinkedIn.",
    },
    {
      question: "Do you prefer calls or emails for inquiries?",
      answer:
        "I prefer emails for professional inquiries, but you can message me on WhatsApp for quick discussions.",
    },
    {
      question: "Where are you based?",
      answer:
        "I'm currently based in Navi Mumbai, India, but I'm open to remote work opportunities worldwide.",
    },
    {
      question: "Can I schedule a meeting with you?",
      answer: "Yes! You can drop me an email to schedule a call at your convenience.",
    },
    {
      question: "Do you provide mentorship or guidance?",
      answer:
        "Yes! I love helping students and beginners in tech. If you need guidance on projects, databases, or web development, let's connect!",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Let's work together</p>
      </div>

      <div className="contact-content">
        {/* Contact Info Box */}
        <div className="contact-form-box">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div className="info-content">
                <h4>Phone</h4>
                <a href="tel:+918828271782">+91 8828271782</a>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:siddhigawade.sbg25@gmail.com">
                  siddhigawade.sbg25@gmail.com
                </a>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info-content">
                <h4>Location</h4>
                <p>Suyah CHS, Sec 21 Nerul,<br />Navi Mumbai - 400706</p>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="social-media-container">
              <h4>Social Media</h4>
              <div className="social-icons">
                <a href="https://wa.me/918828271782" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/YourInstagramHandle" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://discord.gg/YourDiscordInvite" target="_blank" rel="noopener noreferrer" className="social-item">
                  <i className="fab fa-discord"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section beside Contact Form */}
        <div className="faq-section">
          <h2 className="faq-head">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span>{activeIndex === index ? "▲" : "▼"}</span>
                </button>
                {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
