import React, { useContext, useState } from 'react';
import SealBadge from '../components/SealBadge';
import { LanguageContext } from '../context/LanguageContext';

const CONTENT = {
  en: {
    eyebrow: "About the society",
    heading: "Built by the neighbourhood, run for the neighbourhood",
    intro:
      "Shivadnya Nagari Sahakari Patsanstha Ltd., Pune is a registered urban cooperative credit society headquartered at Swami Prasad Apartment, Shukrawar Peth. Since our registration in 2003, we have offered every member a straightforward place to save and borrow.",
    missionEyebrow: "Our purpose",
    missionTitle: "Mission",
    missionBody:
      "To give every member of Shukrawar Peth and its neighbouring peths a fair, transparent place to grow their savings and access credit — without the distance or paperwork of a large commercial bank.",
    visionEyebrow: "Where we're headed",
    visionTitle: "Vision",
    visionBody:
      "To remain the most trusted cooperative credit society in the area — measured not by size, but by how many families call it their own.",
    valuesEyebrow: "What guides us",
    valuesHeading: "Principles behind every account we open",
    values: [
      {
        icon: 'bi-shield-check',
        title: 'Transparency',
        body: 'Every ledger entry is open to the member it belongs to — no hidden charges, no fine print.',
      },
      {
        icon: 'bi-people',
        title: 'Community First',
        body: 'Decisions are made by a member-elected board that lives in the same neighbourhood it serves.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Steady Growth',
        body: 'Conservative, well-secured lending has kept the society stable through more than two decades.',
      },
    ],
    journeyEyebrow: "Our journey",
    journeyHeading: "Two decades, one seal of trust",
    milestoneLabel: "Milestone",
    milestones: [
      { year: '2003', text: 'Registered under the Maharashtra Co-operative Societies Act, Reg. No. PNA/PNA/(1)/RSR/(CR)/2618.' },
      { year: '2008', text: 'Crossed a thousand active member accounts across Shukrawar Peth and neighbouring peths.' },
      { year: '2015', text: 'Introduced flexible recurring deposit and gold-loan schemes for local traders.' },
      { year: 'Today', text: 'A trusted branch at Swami Prasad Apartment, still run on the same founding principles.' },
    ],
    faqEyebrow: "Need to know more?",
    faqHeading: "Frequently Asked Questions",
    faqIntro: "Answers to what members ask us most — if yours isn't here, our branch team is always happy to help.",
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
        question: "What is the minimum deposit to open an account?",
        answer:
          "Minimum deposit amounts vary by scheme. Our branch staff can walk you through the current minimums for savings, RD and FD accounts.",
      },
      {
        question: "How are loan applications processed?",
        answer:
          "Submit your application with the required documents at the branch. Our team reviews it locally and shares a clear EMI schedule once approved, with no hidden charges.",
      },
      {
        question: "What is the interest rate on fixed deposits?",
        answer:
          "FD rates depend on the tenure you choose and are fixed for the full term, so you always know exactly what you'll earn. Ask our branch staff for current rates.",
      },
      {
        question: "Can I withdraw my RD before maturity?",
        answer:
          "Premature withdrawal is possible in genuine cases of need, though it may affect the interest earned. Visit the branch to discuss your specific situation.",
      },
    ],
    regEyebrow: "Registered & regulated",
    regHeading: "Reg. No. PNA/PNA/(1)/RSR/(CR)/2618 · Dated 31/5/2003",
    regAddress: "Swami Prasad Apartment, Shukrawar Peth, Pune – 411002",
  },
  mr: {
    eyebrow: "संस्थेबद्दल",
    heading: "परिसरानेच उभारलेली, परिसरासाठीच चालवली जाणारी",
    intro:
      "शिवाज्ञा नागरी सहकारी पतसंस्था मर्यादित, पुणे ही स्वामी प्रसाद अपार्टमेंट, शुक्रवार पेठ येथे मुख्यालय असलेली नोंदणीकृत शहरी सहकारी पतसंस्था आहे. २००३ मध्ये नोंदणी झाल्यापासून, आम्ही प्रत्येक सभासदाला बचत करण्यासाठी आणि कर्ज घेण्यासाठी सोपे व्यासपीठ उपलब्ध करून दिले आहे.",
    missionEyebrow: "आमचा उद्देश",
    missionTitle: "ध्येय",
    missionBody:
      "शुक्रवार पेठ आणि आसपासच्या पेठांतील प्रत्येक सभासदाला त्यांची बचत वाढवण्यासाठी आणि कर्ज मिळवण्यासाठी एक न्याय्य, पारदर्शक ठिकाण देणे — मोठ्या व्यावसायिक बँकेच्या अंतर किंवा कागदपत्रांच्या त्रासाशिवाय.",
    visionEyebrow: "आमची दिशा",
    visionTitle: "दृष्टी",
    visionBody:
      "परिसरातील सर्वात विश्वासार्ह सहकारी पतसंस्था राहणे — आकाराने नव्हे, तर किती कुटुंबे तिला स्वतःची मानतात यावरून मोजले जाणारे यश.",
    valuesEyebrow: "आम्हाला मार्गदर्शन करणारी तत्त्वे",
    valuesHeading: "आम्ही उघडत असलेल्या प्रत्येक खात्यामागील तत्त्वे",
    values: [
      {
        icon: 'bi-shield-check',
        title: 'पारदर्शकता',
        body: 'प्रत्येक हिशोब नोंद संबंधित सभासदासाठी खुली असते — कोणतेही लपलेले शुल्क नाही, कोणतीही लपलेली अट नाही.',
      },
      {
        icon: 'bi-people',
        title: 'समुदाय प्रथम',
        body: 'निर्णय सभासदांनी निवडलेल्या संचालक मंडळाकडून घेतले जातात, जे त्याच परिसरात राहतात जिथे सेवा दिली जाते.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'स्थिर वाढ',
        body: 'सुरक्षित आणि जबाबदार कर्जपुरवठ्यामुळे संस्था दोन दशकांहून अधिक काळ स्थिर राहिली आहे.',
      },
    ],
    journeyEyebrow: "आमचा प्रवास",
    journeyHeading: "दोन दशके, विश्वासाचा एकच शिक्का",
    milestoneLabel: "टप्पा",
    milestones: [
      { year: '2003', text: 'महाराष्ट्र सहकारी संस्था कायद्यांतर्गत नोंदणी, नोंदणी क्र. PNA/PNA/(1)/RSR/(CR)/2618.' },
      { year: '2008', text: 'शुक्रवार पेठ आणि आसपासच्या पेठांमध्ये एक हजारांहून अधिक सक्रिय सभासद खाती.' },
      { year: '2015', text: 'स्थानिक व्यापाऱ्यांसाठी लवचिक आवर्ती ठेव आणि सोने तारण कर्ज योजना सुरू.' },
      { year: 'आज', text: 'स्वामी प्रसाद अपार्टमेंट येथे विश्वासार्ह शाखा, अजूनही त्याच मूळ तत्त्वांवर चालणारी.' },
    ],
    faqEyebrow: "आणखी जाणून घ्यायचंय?",
    faqHeading: "वारंवार विचारले जाणारे प्रश्न",
    faqIntro: "सभासद सर्वात जास्त विचारतात असे प्रश्न आणि उत्तरे — तुमचा प्रश्न इथे नसेल तर आमचे शाखा कर्मचारी नेहमी मदतीसाठी तयार आहेत.",
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
        question: "खाते उघडण्यासाठी किमान ठेव किती आहे?",
        answer:
          "किमान ठेव रक्कम योजनेनुसार बदलते. बचत, आरडी आणि एफडी खात्यांसाठी सध्याची किमान रक्कम आमचे शाखा कर्मचारी सांगतील.",
      },
      {
        question: "कर्ज अर्ज कसे प्रक्रिया केले जातात?",
        answer:
          "आवश्यक कागदपत्रांसह शाखेत अर्ज सादर करा. आमची टीम स्थानिक पातळीवर पुनरावलोकन करते आणि मंजुरीनंतर स्पष्ट ईएमआय वेळापत्रक देते, कोणतेही लपलेले शुल्क नाही.",
      },
      {
        question: "मुदत ठेवीवर व्याजदर किती आहे?",
        answer:
          "एफडी दर तुम्ही निवडलेल्या कालावधीवर अवलंबून असतात आणि संपूर्ण कालावधीसाठी निश्चित असतात, त्यामुळे तुम्हाला किती व्याज मिळेल हे आधीच कळते. सध्याच्या दरांसाठी शाखा कर्मचाऱ्यांना विचारा.",
      },
      {
        question: "मी माझी आरडी मुदतपूर्तीपूर्वी काढू शकतो का?",
        answer:
          "खऱ्या गरजेच्या प्रसंगी मुदतपूर्व पैसे काढणे शक्य आहे, जरी त्याचा व्याजावर परिणाम होऊ शकतो. तुमच्या विशिष्ट परिस्थितीबद्दल चर्चा करण्यासाठी शाखेला भेट द्या.",
      },
    ],
    regEyebrow: "नोंदणीकृत व नियमित",
    regHeading: "नोंदणी क्र. PNA/PNA/(1)/RSR/(CR)/2618 · दिनांक 31/5/2003",
    regAddress: "स्वामी प्रसाद अपार्टमेंट, शुक्रवार पेठ, पुणे – ४११००२",
  },
};

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = CONTENT[language];
  const [openFaq, setOpenFaq] = useState(0); // index of currently open FAQ; 0 = first one open by default

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <section className="hero-section section-pad reveal">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="eyebrow fade-up delay-1">{t.eyebrow}</span>
              <h1 className="display-5 mt-3 mb-3 fade-up delay-2">{t.heading}</h1>
              <div className="divider-gold mb-3 scale-in delay-3"></div>
              <p className="fs-5 text-ink-soft mb-0 fade-up delay-3" style={{ maxWidth: 600 }}>
                {t.intro}
              </p>
            </div>

            <div className="col-lg-5 d-flex justify-content-center">
              <img
                src="/assets/logo.jpeg"
                alt="Society seal"
                className="rounded-circle hero-seal float-soft"
                style={{
                  width: 220,
                  height: 220,
                  objectFit: 'cover',
                  border: '4px solid var(--color-indigo)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream reveal">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-soft h-100 p-4 p-md-5 lift-on-hover">
                <span className="eyebrow fade-up">{t.missionEyebrow}</span>
                <h3 className="mt-2 mb-3 fade-up delay-1">{t.missionTitle}</h3>
                <p className="text-ink-soft mb-0 fade-up delay-2">{t.missionBody}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-soft h-100 p-4 p-md-5 lift-on-hover">
                <span className="eyebrow fade-up">{t.visionEyebrow}</span>
                <h3 className="mt-2 mb-3 fade-up delay-1">{t.visionTitle}</h3>
                <p className="text-ink-soft mb-0 fade-up delay-2">{t.visionBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-animate" style={{ background: 'var(--color-indigo-tint)' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">{t.valuesEyebrow}</span>
              <h2 className="mt-2 mb-0 fade-up delay-1">{t.valuesHeading}</h2>
            </div>
          </div>

          <div className="row g-4">
            {t.values.map((v, index) => (
              <div className="col-md-4" key={v.title}>
                <div
                  className="card-soft h-100 p-4 text-center lift-on-hover fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="d-flex align-items-center justify-content-center mb-3 rounded-circle mx-auto icon-bubble">
                    <i className={`bi ${v.icon} fs-4 text-marigold`}></i>
                  </div>
                  <h5 className="mb-2">{v.title}</h5>
                  <p className="text-ink-soft mb-0" style={{ fontSize: '0.92rem' }}>
                    {v.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream reveal">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow fade-up">{t.journeyEyebrow}</span>
              <h2 className="mt-2 mb-0 fade-up delay-1">{t.journeyHeading}</h2>
            </div>
          </div>

          <div className="row g-4">
            {t.milestones.map((m, index) => (
              <div className="col-md-6 col-lg-3" key={m.year}>
                <div
                  className="d-flex flex-column align-items-center text-center milestone-card fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="milestone-pop">
                    <SealBadge number={m.year} label={t.milestoneLabel} />
                  </div>
                  <p className="text-ink-soft mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section id="faqs" className="section-pad section-animate" style={{ background: 'var(--color-indigo-tint)', scrollMarginTop: '90px' }}>
        <div className="container">

          <div className="text-center mb-5" style={{ maxWidth: 640, margin: "0 auto" }}>
            <span className="eyebrow">{t.faqEyebrow}</span>
            <h2 className="mt-2 mb-3">{t.faqHeading}</h2>
            <p className="text-ink-soft mb-0">{t.faqIntro}</p>
          </div>

          <div className="faq-accordion" id="aboutFaq" style={{ maxWidth: 820, margin: "0 auto" }}>

            {t.faqs.map((faq, index) => (

              <div className="faq-item fade-up" key={index} style={{ animationDelay: `${index * 80}ms` }}>

                <h2 className="accordion-header m-0">

                  <button
                    className={`accordion-button faq-btn ${openFaq !== index ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="faq-q-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-q-text">{faq.question}</span>
                    <i className="bi bi-chevron-down faq-chevron"></i>
                  </button>

                </h2>

                <div
                  className={`accordion-collapse collapse ${openFaq === index ? "show" : ""}`}
                >
                  <div className="faq-body">
                    {faq.answer}
                  </div>
                </div>

              </div>

            ))}

          </div>
        </div>

        <style>{`
          .faq-accordion .faq-item {
            background: #fff;
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 14px;
            box-shadow: 0 2px 12px rgba(31,41,74,0.08);
            border-left: 3px solid transparent;
            transition: border-color .25s ease, box-shadow .25s ease;
          }
          .faq-accordion .faq-item:hover {
            box-shadow: 0 6px 20px rgba(31,41,74,0.12);
          }
          .faq-accordion .faq-btn {
            display: flex;
            align-items: center;
            width: 100%;
            text-align: left;
            padding: 1.15rem 1.5rem;
            font-weight: 600;
            font-size: 1.02rem;
            color: var(--color-indigo-dark);
            background: #fff;
            border: none;
            cursor: pointer;
          }
          .faq-accordion .faq-btn:focus {
            box-shadow: none;
            outline: none;
          }
          .faq-accordion .faq-btn:not(.collapsed) {
            background: var(--color-marigold-tint);
          }
          .faq-accordion .faq-item:has(.faq-btn:not(.collapsed)) {
            border-left-color: var(--color-marigold);
          }
          .faq-accordion .faq-q-num {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            border-radius: 50%;
            background: var(--color-indigo-tint);
            color: var(--color-indigo-dark);
            font-weight: 800;
            font-size: 0.8rem;
            margin-right: 16px;
          }
          .faq-accordion .faq-btn:not(.collapsed) .faq-q-num {
            background: var(--color-marigold);
            color: #fff;
          }
          .faq-accordion .faq-btn::after {
            display: none;
          }
          .faq-accordion .faq-chevron {
            margin-left: auto;
            font-size: 1rem;
            color: var(--color-indigo-dark);
            transition: transform .3s ease;
            flex-shrink: 0;
          }
          .faq-accordion .faq-btn:not(.collapsed) .faq-chevron {
            transform: rotate(180deg);
            color: var(--color-marigold);
          }
          .faq-accordion .faq-q-text {
            flex: 1;
          }
          .faq-accordion .faq-body {
            padding: 0 1.5rem 1.4rem 4.7rem;
            color: var(--color-ink-soft, #5b5f73);
            font-size: 0.97rem;
            line-height: 1.68;
          }
        `}</style>
      </section>

      <section className="py-5 stat-strip reveal">
        <div className="container text-center">
          <span className="eyebrow" style={{ color: 'var(--color-marigold)' }}>
            {t.regEyebrow}
          </span>
          <h2 className="text-white mt-2 mb-3 glow-in">{t.regHeading}</h2>
          <p className="mb-0 mr-text" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {t.regAddress}
          </p>
        </div>
      </section>
    </>
  );
}