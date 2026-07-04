import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const CONTENT = {
  en: {
    heroEyebrow: "What we offer",
    heroHeading: "Our Services",
    heroIntro: "Explore deposit schemes and loan services tailored to your financial goals.",
    depositEyebrow: "Save with confidence",
    depositHeading: "Deposit Schemes",
    depositIntro: "Choose from flexible deposit plans designed to grow your savings with safety and attractive returns.",
    deposits: [
      { image: '/assets/savings-recurring-deposits.jpg', title: 'Savings Account', body: 'Start your Savings Account effortlessly and grow with us securely.' },
      { image: '/assets/fixed-deposits.jpg', title: 'Fixed Deposit', body: 'Secure your money with Fixed Deposits at attractive interest rates.' },
      { image: '/assets/recurring-deposit.jpg', title: 'Recurring Deposit', body: 'Build wealth with easy and regular Recurring Deposits.' },],
    loanEyebrow: "Borrow with ease",
    loanHeading: "Loan Services",
    loanIntro: "From home to vehicle, our loan services provide quick approvals and member-friendly terms for your financial growth.",
    loans: [
      { image: '/assets/home-loan.jpg', title: 'Home Loan', body: 'Own your dream home with our easy and affordable Home Loans.' },
      { image: '/assets/personal-loan.jpg', title: 'Personal Loan', body: 'Quick Personal Loans tailored for your personal finance needs.' },
      { image: '/assets/gold-loan.jpg', title: 'Gold Loan', body: 'Get instant funds by pledging your gold with us safely.' },
      { image: '/assets/business-loan.jpg', title: 'Business Loan', body: 'Expand your business with our easy and transparent Business Loans.' },
      { image: '/assets/vehicle-loan.jpg', title: 'Vehicle Loan', body: 'Drive away with ease through affordable Vehicle Loan options.' },
    ],
    ctaHeading: "Ready to bank with people who know your name?",
    ctaIntro: "Visit our Shukrawar Peth branch or start your account online in a few minutes.",
    ctaServices: "Our Services",
    ctaContact: "Contact Branch",
  },
  mr: {
    heroEyebrow: "आम्ही काय देतो",
    heroHeading: "आमच्या सेवा",
    heroIntro: "तुमच्या आर्थिक उद्दिष्टांनुसार तयार केलेल्या ठेव योजना आणि कर्ज सेवा पहा.",
    depositEyebrow: "आत्मविश्वासाने बचत करा",
    depositHeading: "ठेव योजना",
    depositIntro: "सुरक्षितता आणि आकर्षक परताव्यासह तुमची बचत वाढवण्यासाठी तयार केलेल्या लवचिक ठेव योजनांमधून निवडा.",
    deposits: [
      { image: '/assets/savings-recurring-deposits.jpg', title: 'बचत खाते', body: 'तुमचे बचत खाते सहज सुरू करा आणि आमच्यासोबत सुरक्षितपणे वाढवा.' },
      { image: '/assets/fixed-deposits.jpg', title: 'मुदत ठेव', body: 'आकर्षक व्याजदराने मुदत ठेवींद्वारे तुमचे पैसे सुरक्षित करा.' },
      { image: '/assets/recurring-deposit.jpg', title: 'आवर्ती ठेव', body: 'सोप्या व नियमित आवर्ती ठेवींद्वारे संपत्ती निर्माण करा.' },
    ],
    loanEyebrow: "सहजतेने कर्ज घ्या",
    loanHeading: "कर्ज सेवा",
    loanIntro: "घरापासून वाहनापर्यंत, आमच्या कर्ज सेवा तुमच्या आर्थिक वाढीसाठी जलद मंजुरी आणि सभासद-अनुकूल अटी देतात.",
    loans: [
      { image: '/assets/home-loan.jpg', title: 'गृह कर्ज', body: 'आमच्या सोप्या व परवडणाऱ्या गृह कर्जांसह तुमचे स्वप्नातील घर मिळवा.' },
      { image: '/assets/personal-loan.jpg', title: 'वैयक्तिक कर्ज', body: 'तुमच्या वैयक्तिक आर्थिक गरजांसाठी जलद वैयक्तिक कर्ज.' },
      { image: '/assets/gold-loan.jpg', title: 'सोने तारण कर्ज', body: 'तुमचे सोने सुरक्षितपणे तारण ठेवून त्वरित निधी मिळवा.' },
      { image: '/assets/business-loan.jpg', title: 'व्यवसाय कर्ज', body: 'आमच्या सोप्या व पारदर्शक व्यवसाय कर्जांसह तुमचा व्यवसाय वाढवा.' },
      { image: '/assets/vehicle-loan.jpg', title: 'वाहन कर्ज', body: 'परवडणाऱ्या वाहन कर्ज पर्यायांसह सहजपणे वाहन घ्या.' },
    ],
    ctaHeading: "तुमचं नाव ओळखणाऱ्या लोकांसोबत बँकिंग करण्यास तयार आहात?",
    ctaIntro: "आमच्या शुक्रवार पेठ शाखेला भेट द्या किंवा काही मिनिटांत ऑनलाइन खाते सुरू करा.",
    ctaServices: "आमच्या सेवा",
    ctaContact: "शाखेशी संपर्क साधा",
  },
};

export default function Services() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];

  return (
    <>
      <section className="section-pad hero-services reveal">
        <div className="container text-center">
          <span className="eyebrow fade-up">{t.heroEyebrow}</span>
          <h1 className="mt-2 mb-2 fade-up delay-1">{t.heroHeading}</h1>
          <p className="text-ink-soft mb-0 mx-auto fade-up delay-2" style={{ maxWidth: 560 }}>
            {t.heroIntro}
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream section-animate">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">{t.depositEyebrow}</span>
              <h2 className="mt-2 mb-2 fade-up delay-1">{t.depositHeading}</h2>
              <p className="text-ink-soft mb-0 fade-up delay-2" style={{ maxWidth: 560 }}>
                {t.depositIntro}
              </p>
            </div>
          </div>

          <div className="row g-4">
            {t.deposits.map((s, index) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div
                  className="card-soft h-100 service-card fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="service-img-wrap">
                    <img src={s.image} alt={s.title} className="service-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="mb-2" style={{ fontSize: '1.05rem' }}>{s.title}</h5>
                    <p className="text-ink-soft mb-0" style={{ fontSize: '0.92rem' }}>{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad loan-services reveal" style={{ background: 'var(--color-paper)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">{t.loanEyebrow}</span>
              <h2 className="mt-2 mb-2 fade-up delay-1">{t.loanHeading}</h2>
              <p className="text-ink-soft mb-0 fade-up delay-2" style={{ maxWidth: 560 }}>
                {t.loanIntro}
              </p>
            </div>
          </div>

          <div className="row g-4">
            {t.loans.map((s, index) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div
                  className="card-soft h-100 service-card fade-up"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="service-img-wrap">
                    <img src={s.image} alt={s.title} className="service-img" />
                  </div>
                  <div className="p-4">
                    <h5 className="mb-2" style={{ fontSize: '1.05rem' }}>{s.title}</h5>
                    <p className="text-ink-soft mb-0" style={{ fontSize: '0.92rem' }}>{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 stat-strip reveal">
        <div className="container text-center">
          <h2 className="text-white mb-3 glow-in">{t.ctaHeading}</h2>
          <p className="mb-4 fade-up" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto' }}>
            {t.ctaIntro}
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3 fade-up delay-2">
            <Link to="/services" className="btn-brand btn btn-lg btn-motion">
              {t.ctaServices}
            </Link>
            <Link to="/contact" className="btn btn-lg btn-outline-light rounded-pill btn-motion">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .service-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .service-img-wrap {
          width: 100%;
          height: 170px;
          overflow: hidden;
        }
        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .service-card:hover .service-img {
          transform: scale(1.08);
        }
      `}</style>
    </>
  );
}