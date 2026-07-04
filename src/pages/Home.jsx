import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SealBadge from "../components/SealBadge";
import { LanguageContext } from "../context/LanguageContext";

const CONTENT = {
  en: {
    hero: {
      eyebrow: "Reliable community banking · Shukrawar Peth, Pune",
      titleLine1: "Your savings, your loans,",
      titleLine2: "looked after by your own",
      titleHighlight: "patsanstha",
      paragraph:
        "Shivadnya Nagari Sahakari Patsanstha Ltd. has served Pune families since 2003 with transparent deposit schemes and honest, quick loan approvals.",
      btnServices: "Our Services",
      btnAbout: "Learn About Us",
      cardName: "शिवाज्ञा नागरी सहकारी पतसंस्था मर्या. पुणे",
      cardReg: "Reg. No. PNA/PNA/(1)/RSR/(CR)/2618 · Est. 2003 - 2004",
    },
    stats: [
      ["21+", "Years of Trust"],
      ["1", "Registered Society"],
      ["4+", "Deposit Schemes"],
      ["100%", "Transparent Ledgers"],
    ],
    servicesSection: {
      eyebrow: "What we offer",
      heading: "Deposits and loans built around real household needs",
      viewAll: "View All Services",
    },
   services: [
  {
   image: "/assets/savings.jpg",
    title: "Savings & Recurring Deposits",
    body: "Grow steady interest on daily savings and monthly RD plans, with passbooks you can walk in and update.",
  },
  {
    image: "/assets/fixed-deposits.jpg",
    title: "Fixed Deposits",
    body: "Lock in a tenure that suits you and earn a fixed, guaranteed rate — no market surprises.",
  },
  {
   image: "/assets/personal-home-loans.jpg",
    title: "Personal & Home Loans",
    body: "Transparent paperwork, clear EMI schedules, and lending decisions made by people who know the neighbourhood.",
  },
  {
  image: "/assets/business-gold-loans.jpg",
    title: "Business & Gold Loans",
    body: "Working-capital and gold-backed credit for local traders and families, sanctioned without the runaround.",
  },
],
    steps: [
      {
        n: "01",
        title: "Open an account",
        body: "Visit the branch or sign up online with your KYC documents.",
      },
      {
        n: "02",
        title: "Choose a scheme",
        body: "Pick a savings, RD or FD plan that matches your goal and tenure.",
      },
      {
        n: "03",
        title: "Track with ease",
        body: "Follow your balance and maturity dates through your passbook or login.",
      },
    ],
    faqEyebrow: "Got questions?",
    faqHeading: "A few things members ask us often",
    faqViewAll: "See All FAQs",
faqs: [
  {
    question: "How do I open a savings account?",
    answer:
      "Visit our Shukrawar Peth branch with your KYC documents (ID proof, address proof and photographs), fill out the membership form, and make the minimum opening deposit. Your passbook is issued the same day.",
  },
  {
    question: "What documents are required for KYC?",
    answer:
      "A valid photo ID (Aadhaar, PAN, Voter ID or Passport), address proof, and two passport-size photographs. For loans, income proof and collateral documents may also be needed.",
  },
  {
    question: "What is the interest rate on fixed deposits?",
    answer:
      "FD rates depend on the tenure you choose and are fixed for the full term, so you always know exactly what you'll earn. Ask our branch staff for current rates.",
  },
],
    cta: {
      heading: "Ready to bank with people who know your name?",
      paragraph:
        "Visit our Shukrawar Peth branch or start your account online in a few minutes.",
      btnServices: "Our Services",
      btnContact: "Contact Branch",
    },
  },

  mr: {
    hero: {
      eyebrow: "विश्वासार्ह सामुदायिक बँकिंग · शुक्रवार पेठ, पुणे",
      titleLine1: "तुमची बचत, तुमचे कर्ज,",
      titleLine2: "तुमच्याच",
      titleHighlight: "पतसंस्थेकडून",
      paragraph:
        "शिवाज्ञा नागरी सहकारी पतसंस्था मर्यादित २००३ पासून पुण्यातील कुटुंबांना पारदर्शक ठेव योजना आणि प्रामाणिक, जलद कर्ज मंजुरी देत आहे.",
      btnServices: "आमच्या सेवा",
      btnAbout: "आमच्याबद्दल जाणून घ्या",
      cardName: "शिवाज्ञा नागरी सहकारी पतसंस्था मर्या. पुणे",
      cardReg: "नोंदणी क्र. PNA/PNA/(1)/RSR/(CR)/2618 · स्थापना 2003 - 2004",
    },
    stats: [
      ["21+", "वर्षांचा विश्वास"],
      ["1", "नोंदणीकृत संस्था"],
      ["4+", "ठेव योजना"],
      ["100%", "पारदर्शक हिशोब"],
    ],
    servicesSection: {
      eyebrow: "आम्ही काय देतो",
      heading: "खऱ्या कौटुंबिक गरजांवर आधारित ठेवी आणि कर्जे",
      viewAll: "सर्व सेवा पहा",
    },
  services: [
  {
   image: "/assets/savings-recurring-deposits.jpg",
    title: "बचत व आवर्ती ठेव",
    body: "दैनंदिन बचत आणि मासिक आरडी योजनांवर स्थिर व्याज मिळवा, पासबुकसह शाखेत येऊन अद्ययावत करा.",
  },
  {
   image: "/assets/fixed-deposits.jpg",
    title: "मुदत ठेव",
    body: "तुमच्यासाठी योग्य कालावधी निवडा आणि निश्चित, हमी दराने व्याज मिळवा — बाजारातील चढ-उतारांशिवाय.",
  },
  {
  image: "/assets/personal-home-loans.jpg",
    title: "वैयक्तिक व गृह कर्ज",
    body: "पारदर्शक कागदपत्रे, स्पष्ट ईएमआय वेळापत्रक, आणि परिसर ओळखणाऱ्या लोकांकडून घेतले जाणारे कर्ज निर्णय.",
  },
  {
   image: "/assets/business-gold-loans.jpg",
    title: "व्यवसाय व सोने तारण कर्ज",
    body: "स्थानिक व्यापारी व कुटुंबांसाठी खेळते भांडवल आणि सोने तारण कर्ज, कोणत्याही त्रासाशिवाय मंजूर.",
  },
],
    steps: [
      {
        n: "01",
        title: "खाते उघडा",
        body: "शाखेला भेट द्या किंवा तुमच्या केवायसी कागदपत्रांसह ऑनलाइन नोंदणी करा.",
      },
      {
        n: "02",
        title: "योजना निवडा",
        body: "तुमच्या उद्दिष्टाला आणि कालावधीला अनुसरून बचत, आरडी किंवा एफडी योजना निवडा.",
      },
      {
        n: "03",
        title: "सहज मागोवा घ्या",
        body: "पासबुक किंवा लॉगिनद्वारे तुमची शिल्लक आणि मुदतपूर्तीच्या तारखा पहा.",
      },
    ],
    faqEyebrow: "काही प्रश्न आहेत?",
    faqHeading: "सभासद वारंवार विचारतात असे काही प्रश्न",
    faqViewAll: "सर्व प्रश्न पहा",
faqs: [
  {
    question: "मी बचत खाते कसे उघडू शकतो?",
    answer:
      "तुमच्या केवायसी कागदपत्रांसह (ओळखपत्र, पत्त्याचा पुरावा आणि फोटो) आमच्या शुक्रवार पेठ शाखेला भेट द्या, सदस्यत्व फॉर्म भरा आणि किमान सुरुवातीची ठेव जमा करा. त्याच दिवशी पासबुक दिले जाते.",
  },
  {
    question: "केवायसीसाठी कोणती कागदपत्रे आवश्यक आहेत?",
    answer:
      "वैध फोटो ओळखपत्र (आधार, पॅन, मतदार ओळखपत्र किंवा पासपोर्ट), पत्त्याचा पुरावा आणि दोन पासपोर्ट आकाराचे फोटो. कर्जासाठी उत्पन्नाचा पुरावा आणि तारण कागदपत्रेही आवश्यक असू शकतात.",
  },
  {
    question: "मुदत ठेवीवर व्याजदर किती आहे?",
    answer:
      "एफडी दर तुम्ही निवडलेल्या कालावधीवर अवलंबून असतात आणि संपूर्ण कालावधीसाठी निश्चित असतात, त्यामुळे तुम्हाला किती व्याज मिळेल हे आधीच कळते. सध्याच्या दरांसाठी शाखा कर्मचाऱ्यांना विचारा.",
  },
],
    cta: {
      heading: "तुमचं नाव ओळखणाऱ्या लोकांसोबत बँकिंग करण्यास तयार आहात?",
      paragraph:
        "आमच्या शुक्रवार पेठ शाखेला भेट द्या किंवा काही मिनिटांत ऑनलाइन खाते सुरू करा.",
      btnServices: "आमच्या सेवा",
      btnContact: "शाखेशी संपर्क साधा",
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];
  const [faqVotes, setFaqVotes] = useState({});

  const handleFaqVote = (index, value) => {
    setFaqVotes((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <>
      {/* HERO */}

      <section className="hero-section section-pad overflow-hidden">
        <div className="container">
          <div className="row align-items-center gy-5">

            <motion.div
              className="col-lg-7"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="eyebrow">{t.hero.eyebrow}</span>

              <h1
                className="display-4 mt-3 mb-3"
                style={{ lineHeight: 1.12 }}
              >
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2}{" "}
                <span className="text-marigold">
                  {t.hero.titleHighlight}
                </span>
                .
              </h1>

              <div className="divider-gold mb-3"></div>

              <p
                className="fs-5 text-ink-soft mb-4"
                style={{ maxWidth: 560 }}
              >
                {t.hero.paragraph}
              </p>

              <div className="d-flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.06 }}>
                  <Link to="/services" className="btn-brand btn btn-lg">
                    {t.hero.btnServices}
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.06 }}>
                  <Link
                    to="/about"
                    className="btn-brand-outline btn btn-lg"
                  >
                    {t.hero.btnAbout}
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-5 d-flex justify-content-center"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="card-soft p-4 text-center"
                whileHover={{
                  scale: 1.04,
                  rotate: 1,
                }}
                transition={{ duration: 0.4 }}
                style={{ maxWidth: 360 }}
              >
                <motion.img
                  src="/assets/logo.jpeg"
                  className="seal-ring-logo mx-auto mb-3"
                  alt=""
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                />

                <p
                  className="fw-semibold"
                  style={{ color: "var(--color-indigo-dark)" }}
                >
                  {t.hero.cardName}
                </p>

                <p className="text-ink-soft mb-0">{t.hero.cardReg}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="py-5">
        <div className="container">
          <div className="row text-center gy-4 justify-content-center">

            {t.stats.map((item, index) => (
              <motion.div
                key={index}
                className="col-6 col-md-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                >
                  <SealBadge number={item[0]} label={item[1]} />
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="section-pad bg-cream">
        <div className="container">

          <motion.div
            className="row mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="col-lg-7">
              <span className="eyebrow">{t.servicesSection.eyebrow}</span>

              <h2 className="mt-2">{t.servicesSection.heading}</h2>
            </div>

            <div className="col-lg-5 text-lg-end mt-3">
              <Link to="/services" className="btn-brand-outline btn">
                {t.servicesSection.viewAll}
              </Link>
            </div>
          </motion.div>

          <div className="row g-4">

          {t.services.map((service, index) => (
  <motion.div
    key={service.title}
    className="col-sm-6 col-lg-3"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
  >
    <motion.div
      whileHover={{
        y: -15,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
      className="card-soft h-100 service-card overflow-hidden"
    >
      <div className="service-img-wrap">
        <img
          src={service.image}
          alt={service.title}
          className="service-img"
        />
      </div>

      <div className="p-4">
        <h5>{service.title}</h5>
        <p className="text-ink-soft mb-0">{service.body}</p>
      </div>
    </motion.div>
  </motion.div>
))}

          </div>
        </div>
      </section>
      <style>{`
        .service-card {
          padding: 0;
          display: flex;
          flex-direction: column;
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

      {/* HOW */}

      <section
        className="section-pad"
        style={{
          background: "var(--color-indigo-tint)",
        }}
      >
        <div className="container">

          <div className="row g-4">

            {t.steps.map((step, index) => (
              <motion.div
                key={step.n}
                className="col-md-4"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{
                    y: -12,
                  }}
                  className="p-4 h-100"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 800,
                      color: "var(--color-marigold)",
                    }}
                  >
                    {step.n}
                  </motion.span>

                  <h5 className="mt-3">{step.title}</h5>

                  <p className="text-ink-soft">{step.body}</p>
                </motion.div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ PREVIEW */}

      <motion.section
        className="section-pad bg-cream"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container">

          <div className="text-center mb-4" style={{ maxWidth: 600, margin: "0 auto" }}>
            <span className="eyebrow">{t.faqEyebrow}</span>
            <h2 className="mt-2 mb-0">{t.faqHeading}</h2>
          </div>

          <div className="faq-accordion" id="homeFaq" style={{ maxWidth: 800, margin: "0 auto" }}>

            {t.faqs.map((faq, index) => (

              <div className="faq-item" key={index}>

                <h2 className="accordion-header m-0">

                  <button
                    className={`accordion-button faq-btn ${index !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#homefaq${index}`}
                  >
                    <span className="faq-q-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-q-text">{faq.question}</span>
                    <i className="bi bi-chevron-down faq-chevron"></i>
                  </button>

                </h2>

                <div
                  id={`homefaq${index}`}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  data-bs-parent="#homeFaq"
                >
                  <div className="faq-body">
                    {faq.answer}
                  </div>
                </div>

              </div>

            ))}

          </div>

          <div className="text-center mt-4">
            <motion.div className="d-inline-block" whileHover={{ scale: 1.06 }}>
              <Link to="/about#faqs" className="btn-brand btn btn-lg">
                {t.faqViewAll} <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </motion.div>
          </div>

        </div>

        <style>{`
          .faq-accordion .faq-item {
            background: #fff;
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 14px;
            box-shadow: 0 2px 12px rgba(31,41,74,0.07);
            border-left: 3px solid transparent;
            transition: border-color .25s ease, box-shadow .25s ease;
          }
          .faq-accordion .faq-item:hover {
            box-shadow: 0 6px 20px rgba(31,41,74,0.10);
          }
          .faq-accordion .faq-btn {
            display: flex;
            align-items: center;
            width: 100%;
            text-align: left;
            padding: 1.1rem 1.4rem;
            font-weight: 600;
            font-size: 1rem;
            color: var(--color-indigo-dark);
            background: #fff;
            border: none;
          }
          .faq-accordion .faq-btn:focus {
            box-shadow: none;
            outline: none;
          }
       .faq-accordion .faq-btn:not(.collapsed) {
            background: var(--color-indigo-tint);
          }
          .faq-accordion .faq-btn::after {
            display: none;
          }
          .faq-accordion .faq-chevron {
            margin-left: auto;
            font-size: 1rem;
            color: var(--color-marigold);
            transition: transform .3s ease;
            flex-shrink: 0;
          }
          .faq-accordion .faq-btn:not(.collapsed) .faq-chevron {
            transform: rotate(180deg);
          }
          .faq-accordion .faq-item:has(.faq-btn:not(.collapsed)) {
            border-left-color: var(--color-marigold);
          }
          .faq-accordion .faq-q-num {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            flex-shrink: 0;
            border-radius: 50%;
            background: var(--color-marigold-tint);
            color: var(--color-marigold);
            font-weight: 800;
            font-size: 0.78rem;
            margin-right: 14px;
          }
          .faq-accordion .faq-q-text {
            flex: 1;
          }
          .faq-accordion .faq-body {
            padding: 0 1.4rem 1.3rem 4.4rem;
            color: var(--color-ink-soft, #5b5f73);
            font-size: 0.95rem;
            line-height: 1.65;
          }
        `}</style>
      </motion.section>

      {/* CTA */}

      <motion.section
        className="py-5 stat-strip"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="container text-center "
          style={{
            color: "rgba(255,255,255,.85)",
          }}
        >

          <motion.h2
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            style={{
              color: "rgba(255,255,255,.85)",
            }}
          >
            {t.cta.heading}
          </motion.h2>

          <p
            className="mb-4"
            style={{
              maxWidth: 560,
              margin: "auto",
              color: "rgba(255,255,255,.85)",
            }}
          >
            {t.cta.paragraph}
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">

            <motion.div whileHover={{ scale: 1.07 }}>
              <Link to="/services" className="btn-brand btn btn-lg">
                {t.cta.btnServices}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.07 }}>
              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg rounded-pill"
              >
                {t.cta.btnContact}
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.section>
    </>
  );
}