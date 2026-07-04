import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const CONTENT = {
  en: {
    eyebrow: "Member login",
    heading: "Welcome Back",
    subheading: "Log in to check your balance and manage your accounts.",
    identifierLabel: "Member ID / Phone Number",
    identifierPlaceholder: "Enter your member ID or phone",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    remember: "Remember me",
    forgot: "Forgot password?",
    submit: "Log In",
    newMember: "New member?",
    createAccount: "Create an account",
    errorEmpty: "Please enter your member ID / phone and password.",
    demoAlert: "Login form submitted (frontend demo — connect to your backend to authenticate).",
  },
  mr: {
    eyebrow: "सभासद लॉगिन",
    heading: "पुन्हा स्वागत आहे",
    subheading: "तुमची शिल्लक तपासण्यासाठी आणि खाती व्यवस्थापित करण्यासाठी लॉगिन करा.",
    identifierLabel: "सभासद आयडी / फोन नंबर",
    identifierPlaceholder: "तुमचा सभासद आयडी किंवा फोन टाका",
    passwordLabel: "पासवर्ड",
    passwordPlaceholder: "तुमचा पासवर्ड टाका",
    remember: "मला लक्षात ठेवा",
    forgot: "पासवर्ड विसरलात?",
    submit: "लॉग इन करा",
    newMember: "नवीन सभासद आहात?",
    createAccount: "खाते तयार करा",
    errorEmpty: "कृपया तुमचा सभासद आयडी / फोन आणि पासवर्ड टाका.",
    demoAlert: "लॉगिन फॉर्म सबमिट झाला (फ्रंटएंड डेमो — प्रमाणीकरणासाठी बॅकएंडशी जोडा).",
  },
};

export default function Login() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];

  const [form, setForm] = useState({ identifier: '', password: '', remember: false });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.identifier || !form.password) {
      setError(t.errorEmpty);
      return;
    }

    setError('');
    alert(t.demoAlert);
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
            <p className="text-ink-soft mb-0">{t.subheading}</p>
          </div>

          <div className="card-soft p-4 p-md-5">
            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
                  <i className="bi bi-exclamation-triangle"></i>
                  <span>{error}</span>
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="identifier" className="form-label fw-semibold">{t.identifierLabel}</label>
                <input
                  type="text"
                  className="form-control form-control-brand"
                  id="identifier"
                  name="identifier"
                  required
                  value={form.identifier}
                  onChange={handleChange}
                  placeholder={t.identifierPlaceholder}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">{t.passwordLabel}</label>
                <input
                  type="password"
                  className="form-control form-control-brand"
                  id="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder={t.passwordPlaceholder}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                  />
                  <label className="form-check-label text-ink-soft" htmlFor="remember" style={{ fontSize: '0.9rem' }}>
                    {t.remember}
                  </label>
                </div>
                <a href="#forgot-password" className="text-marigold fw-semibold" style={{ fontSize: '0.9rem' }}>
                  {t.forgot}
                </a>
              </div>

              <button type="submit" className="btn-brand btn btn-lg w-100">{t.submit}</button>

              <p className="text-center text-ink-soft mt-4 mb-0" style={{ fontSize: '0.92rem' }}>
                {t.newMember} <Link to="/signup" className="text-marigold fw-semibold">{t.createAccount}</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}