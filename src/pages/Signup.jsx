import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const CONTENT = {
  en: {
    eyebrow: "Become a member",
    heading: "Open Your Account",
    intro: "Join Shivadnya Nagari Sahakari Patsanstha Ltd.in a few minutes.",
    errorMismatch: "Passwords do not match. Please re-enter them.",
    errorAgree: "Please accept the membership terms to continue.",
    successTitle: "Application received",
    successBody: "Bring a photo ID and address proof to the branch to complete your membership KYC.",
    goToLogin: "Go to Login",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "As per your ID proof",
    phoneLabel: "Phone Number",
    phonePlaceholder: "10-digit mobile number",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    aadhaarLabel: "Aadhaar / ID Number",
    aadhaarPlaceholder: "For KYC verification at the branch",
    passwordLabel: "Password",
    passwordPlaceholder: "At least 6 characters",
    confirmPasswordLabel: "Confirm Password",
    confirmPasswordPlaceholder: "Re-enter password",
    agree: "I agree to the society's membership terms and KYC requirements.",
    submit: "Create Account",
    alreadyMember: "Already a member?",
    loginHere: "Log in here",
  },
  mr: {
    eyebrow: "सभासद व्हा",
    heading: "तुमचे खाते उघडा",
    intro: "काही मिनिटांत शिवाज्ञा नागरी सहकारी पतसंस्था मर्यादितमध्ये सामील व्हा.",
    errorMismatch: "पासवर्ड जुळत नाहीत. कृपया पुन्हा टाका.",
    errorAgree: "पुढे जाण्यासाठी कृपया सभासदत्व अटी स्वीकारा.",
    successTitle: "अर्ज प्राप्त झाला",
    successBody: "तुमचे सभासदत्व केवायसी पूर्ण करण्यासाठी फोटो ओळखपत्र व पत्ता पुरावा घेऊन शाखेत या.",
    goToLogin: "लॉगिनकडे जा",
    fullNameLabel: "पूर्ण नाव",
    fullNamePlaceholder: "तुमच्या ओळखपत्राप्रमाणे",
    phoneLabel: "फोन नंबर",
    phonePlaceholder: "10-अंकी मोबाईल नंबर",
    emailLabel: "ईमेल पत्ता",
    emailPlaceholder: "you@example.com",
    aadhaarLabel: "आधार / ओळखपत्र क्रमांक",
    aadhaarPlaceholder: "शाखेत केवायसी पडताळणीसाठी",
    passwordLabel: "पासवर्ड",
    passwordPlaceholder: "किमान 6 अक्षरे",
    confirmPasswordLabel: "पासवर्डची पुष्टी करा",
    confirmPasswordPlaceholder: "पासवर्ड पुन्हा टाका",
    agree: "मी संस्थेच्या सभासदत्व अटी व केवायसी आवश्यकतांशी सहमत आहे.",
    submit: "खाते तयार करा",
    alreadyMember: "आधीच सभासद आहात?",
    loginHere: "इथे लॉगिन करा",
  },
};

export default function Signup() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    aadhaar: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError(t.errorMismatch);
      return;
    }
    if (!form.agree) {
      setError(t.errorAgree);
      return;
    }

    setSuccess(true);
  };

  return (
    <section className="hero-section section-pad">
      <div className="container">
        <div className="auth-card">
          <div className="text-center mb-4">
            <img
              src="/assets/logo.jpeg"
              alt="Society seal"
              className="rounded-circle mb-3"
              style={{ width: 76, height: 76, objectFit: 'cover', border: '3px solid var(--color-indigo)' }}
            />
            <span className="eyebrow">{t.eyebrow}</span>
            <h1 className="h3 mt-2 mb-1">{t.heading}</h1>
            <p className="text-ink-soft mb-0">{t.intro}</p>
          </div>

          <div className="card-soft p-4 p-md-5">
            {success ? (
              <div className="text-center py-3">
                <i className="bi bi-patch-check-fill text-success" style={{ fontSize: '2.6rem' }}></i>
                <h4 className="mt-3">{t.successTitle}</h4>
                <p className="text-ink-soft">{t.successBody}</p>
                <Link to="/login" className="btn-brand btn mt-2">{t.goToLogin}</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {error && (
                  <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
                    <i className="bi bi-exclamation-triangle"></i>
                    <span>{error}</span>
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label fw-semibold">{t.fullNameLabel}</label>
                  <input
                    type="text"
                    className="form-control form-control-brand"
                    id="fullName"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder={t.fullNamePlaceholder}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-semibold">{t.phoneLabel}</label>
                    <input
                      type="tel"
                      className="form-control form-control-brand"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">{t.emailLabel}</label>
                    <input
                      type="email"
                      className="form-control form-control-brand"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="aadhaar" className="form-label fw-semibold">{t.aadhaarLabel}</label>
                  <input
                    type="text"
                    className="form-control form-control-brand"
                    id="aadhaar"
                    name="aadhaar"
                    required
                    value={form.aadhaar}
                    onChange={handleChange}
                    placeholder={t.aadhaarPlaceholder}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="password" className="form-label fw-semibold">{t.passwordLabel}</label>
                    <input
                      type="password"
                      className="form-control form-control-brand"
                      id="password"
                      name="password"
                      required
                      minLength={6}
                      value={form.password}
                      onChange={handleChange}
                      placeholder={t.passwordPlaceholder}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="confirmPassword" className="form-label fw-semibold">{t.confirmPasswordLabel}</label>
                    <input
                      type="password"
                      className="form-control form-control-brand"
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      minLength={6}
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder={t.confirmPasswordPlaceholder}
                    />
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-ink-soft" htmlFor="agree" style={{ fontSize: '0.9rem' }}>
                    {t.agree}
                  </label>
                </div>

                <button type="submit" className="btn-brand btn btn-lg w-100">{t.submit}</button>

                <p className="text-center text-ink-soft mt-4 mb-0" style={{ fontSize: '0.92rem' }}>
                  {t.alreadyMember} <Link to="/login" className="text-marigold fw-semibold">{t.loginHere}</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}