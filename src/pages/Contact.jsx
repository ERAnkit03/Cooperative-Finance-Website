import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const CONTENT = {
  en: {
    eyebrow: "Get in touch",
    heading: "Talk to your branch directly",
    intro:
      "Questions about a deposit scheme, a loan application, or your passbook? Reach us at the branch, by phone, or by leaving a message below.",
    detailsHeading: "Branch details",
    address: { label: "Address", value: "Swami Prasad Apartment, Shukrawar Peth, Pune – 411002" },
    phone: { label: "Phone", value: "+91 92095 46376" },
    email: { label: "Email", value: "shivadnyapatsanstha@gmail.com" },
    hours: { label: "Branch Hours", value: "Mon – Sat, 10:00 AM – 6:00 PM" },
    formHeading: "Send a message",
    successMsg: "Thank you — your message has been noted. Our staff will call you back shortly.",
    labels: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "Message",
    },
    placeholders: {
      name: "Your full name",
      phone: "10-digit mobile number",
      email: "you@example.com",
      message: "How can we help?",
    },
    submit: "Send Message",
  },
  mr: {
    eyebrow: "संपर्क साधा",
    heading: "थेट तुमच्या शाखेशी बोला",
    intro:
      "ठेव योजना, कर्ज अर्ज किंवा पासबुकबद्दल प्रश्न आहेत? आम्हाला शाखेत, फोनवर किंवा खाली संदेश देऊन संपर्क साधा.",
    detailsHeading: "शाखेचा तपशील",
    address: { label: "पत्ता", value: "स्वामी प्रसाद अपार्टमेंट, शुक्रवार पेठ, पुणे – ४११००२" },
    phone: { label: "फोन", value: "+91 92095 46376" },
    email: { label: "ईमेल", value: "shivadnyapatsanstha@gmail.com" },
    hours: { label: "शाखेची वेळ", value: "सोम – शनि, सकाळी 10:00 – संध्या 6:00" },
    formHeading: "संदेश पाठवा",
    successMsg: "धन्यवाद — तुमचा संदेश नोंदवला गेला आहे. आमचे कर्मचारी लवकरच तुम्हाला परत कॉल करतील.",
    labels: {
      name: "पूर्ण नाव",
      phone: "फोन नंबर",
      email: "ईमेल पत्ता",
      message: "संदेश",
    },
    placeholders: {
      name: "तुमचे पूर्ण नाव",
      phone: "10-अंकी मोबाईल नंबर",
      email: "you@example.com",
      message: "आम्ही कशी मदत करू शकतो?",
    },
    submit: "संदेश पाठवा",
  },
};

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];

  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="hero-section section-pad contact-hero reveal">
        <div className="container">
          <span className="eyebrow fade-up">{t.eyebrow}</span>
          <h1 className="display-5 mt-3 mb-3 fade-up delay-1">{t.heading}</h1>
          <div className="divider-gold mb-3 scale-in delay-2"></div>
          <p className="fs-5 text-ink-soft mb-0 fade-up delay-2" style={{ maxWidth: 600 }}>
            {t.intro}
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream section-animate">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="card-soft p-4 p-md-5 h-100 lift-on-hover info-panel">
                <h4 className="mb-4">{t.detailsHeading}</h4>
                <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-geo-alt fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">{t.address.label}</strong>
                      <span className="text-ink-soft">{t.address.value}</span>
                    </div>
                  </li>
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-telephone fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">{t.phone.label}</strong>
                      <span className="text-ink-soft">{t.phone.value}</span>
                    </div>
                  </li>
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-envelope fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">{t.email.label}</strong>
                      <span className="text-ink-soft">{t.email.value}</span>
                    </div>
                  </li>
                  <li className="d-flex gap-3 info-row">
                    <i className="bi bi-clock fs-5 text-marigold info-icon"></i>
                    <div>
                      <strong className="d-block">{t.hours.label}</strong>
                      <span className="text-ink-soft">{t.hours.value}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card-soft p-4 p-md-5 form-panel lift-on-hover">
                <h4 className="mb-4">{t.formHeading}</h4>

                {sent && (
                  <div className="alert alert-success d-flex align-items-center gap-2 success-pop" role="alert">
                    <i className="bi bi-check-circle"></i>
                    <span>{t.successMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold">{t.labels.name}</label>
                      <input
                        type="text"
                        className="form-control form-control-brand"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t.placeholders.name}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label fw-semibold">{t.labels.phone}</label>
                      <input
                        type="tel"
                        className="form-control form-control-brand"
                        id="phone"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t.placeholders.phone}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="email" className="form-label fw-semibold">{t.labels.email}</label>
                      <input
                        type="email"
                        className="form-control form-control-brand"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.placeholders.email}
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">{t.labels.message}</label>
                      <textarea
                        className="form-control form-control-brand"
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.placeholders.message}
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn-brand btn btn-lg btn-motion">
                        {t.submit}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}