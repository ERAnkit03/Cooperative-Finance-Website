import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const CONTENT = {
  en: {
    brand: "Shivadnya Nagari Sahakari Patsanstha Ltd.",
    desc: "A registered cooperative credit society serving Shukrawar Peth, Pune since 2003 — built on transparent deposits and honest lending.",
    reg: "Reg. No. PNA/PNA/(1)/RSR/(CR)/2618 · Est. 2003 - 2004",
    accountHeading: "Account",
    links: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    branchHeading: "Reach the branch",
    address: "Swami Prasad Apartment, Shukrawar Peth, Pune – 411002",
    phone: "+91 92095 46376",
    email: "shivadnyapatsanstha@gmail.com",
    copyright: (year) => `© ${year} Shivadnya Nagari Sahakari Patsanstha Ltd. , Pune. All rights reserved.`,
    actNote: "Registered under the Maharashtra Co-operative Societies Act",
  },
  mr: {
    brand: "शिवाज्ञा नागरी सहकारी पतसंस्था मर्यादित",
    desc: "शुक्रवार पेठ, पुणे येथे २००३ पासून कार्यरत असलेली नोंदणीकृत सहकारी पतसंस्था — पारदर्शक ठेवी आणि प्रामाणिक कर्ज पुरवठ्यावर आधारित.",
    reg: "नोंदणी क्र. PNA/PNA/(1)/RSR/(CR)/2618 · स्थापना 2003 - 2004",
    accountHeading: "खाते",
    links: {
      home: "मुख्यपृष्ठ",
      services: "सेवा",
      about: "आमच्याबद्दल",
      contact: "संपर्क",
    },
    branchHeading: "शाखेशी संपर्क साधा",
    address: "स्वामी प्रसाद अपार्टमेंट, शुक्रवार पेठ, पुणे – ४११००२",
    phone: "+91 92095 46376",
    email: "shivadnyapatsanstha@gmail.com",
    copyright: (year) => `© ${year} शिवाज्ञा नागरी सहकारी पतसंस्था मर्यादित, पुणे. सर्व हक्क राखीव.`,
    actNote: "महाराष्ट्र सहकारी संस्था कायद्यांतर्गत नोंदणीकृत",
  },
};

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];

  return (
    <footer className="bg-indigo text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src="/assets/logo.jpeg"
                alt="Society seal"
                width="48"
                height="48"
                className="rounded-circle"
                style={{ objectFit: 'cover', border: '2px solid rgba(255,255,255,0.6)' }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem' }}>
                {t.brand}
              </span>
            </div>
            <p className="mb-1" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem' }}>
              {t.desc}
            </p>
            <p className="mr-text mb-0" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
              {t.reg}
            </p>
          </div>

          <div className="col-lg-2 col-6">
            <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--color-marigold)' }}>
              {t.accountHeading}
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/" className="text-white-50 text-decoration-none">{t.links.home}</Link></li>
              <li><Link to="/services" className="text-white-50 text-decoration-none">{t.links.services}</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">{t.links.about}</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none">{t.links.contact}</Link></li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '0.78rem', letterSpacing: '0.08em', color: 'var(--color-marigold)' }}>
              {t.branchHeading}
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)' }}>
              <li className="d-flex gap-2"><i className="bi bi-geo-alt mt-1"></i><span>{t.address}</span></li>
              <li className="d-flex gap-2"><i className="bi bi-telephone mt-1"></i><span>{t.phone}</span></li>
              <li className="d-flex gap-2"><i className="bi bi-envelope mt-1"></i><span>{t.email}</span></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.15)' }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            {t.copyright(new Date().getFullYear())}
          </span>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
            {t.actNote}
          </span>
        </div>
      </div>
    </footer>
  );
}