"use client";
import React, { useState } from "react";
const QuestionSection = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center text-center pt-20">
        <h2 className="heading-style-h2">Frequently asked question</h2>
        <div className="text-size-regular">
          Vehicula pulvinar diam est sodales auctor turpis. Lorem morbi mattis
          egestas in scelerisque dignissim sed fames eget.
        </div>
      </div>
      <div className="p-10 px-5">
        <Faqs />
      </div>
    </>
  );
};
const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What features are included in the software?",
      answer:
        "We are dolor sit amet cotur. Eget dis varius duis nisl arcu aliquet felis sed ut. Molestie veatis tellus auctor cos magna ornare mi id semper.",
    },
    {
      question: "How does the payment process work?",
      answer:
        "Payments are processed securely through our trusted gateways, ensuring your transactions are safe and efficient.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for new users to explore all the features of our software.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Absolutely, you can cancel your subscription at any time through your account settings without any penalties.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 customer support through chat, email, and phone to assist you with any issues or questions.",
    },
    {
      question: "Are there any discounts for annual subscriptions?",
      answer:
        "Yes, we offer a 20% discount on annual subscriptions compared to the monthly plan.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="features-section pb-5">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="faq-accordion mb-5"
          onClick={() => toggleFaq(index)}
        >
          <div className="faq-question-wrapper ">
            <h6 className="heading-style-h6">{faq.question}</h6>
            <div className="faq-icon-wrapper">
              <img
                src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/6723c783503ad6f0ce6af842_90.svg"
                loading="lazy"
                alt="Toggle Icon"
                className="faq-icon"
              />
            </div>
          </div>
          <div
            style={{
              transitionDuration: activeFaq === index ? "3000ms" : "800ms",
            }}
            className={`faq-answer-wrapper overflow-hidden transition-all ${
              activeFaq === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="margin-top">
              <div className="text-size-regular">{faq.answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionSection;
