"use client";
import React from "react";
import VerticalCarousel from "./vertical-section";
import { BeamBetweenButtons, BorderBeam } from "./Button-beam";
import { motion } from "motion/react";
import IntegrationsCards from "./inteaction-cards";

const FeaturesSection3 = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center text-center pt-20">
        <div className="max-w-3xl">
          <h2 className="heading-style-h2">
            Seamless Integrations with Your Favorite Tools
          </h2>
          <div className="text-size-regular">
            Vehicula pulvinar diam est sodales auctor turpis. Lorem morbi mattis
            egestas in scelerisque dignissim sed fames eget.
          </div>
        </div>
      </div>
      <IntegrationsCards />
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="cta-component">
              <div className="cta-content-wrapper">
                <div
                  className="cta-content"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <h2 className="heading-style-h2">
                    Join the Future of Property Management Today
                  </h2>
                  <div className="text-size-regular">
                    Scelerisque nascetur morbi adipiscing sem. Scelerisque
                    commodo enim viverra vivamus. Sit sem hac mauris lorem
                    faucibus tellus eu lacus.
                  </div>
                </div>
                <div
                  className="cta-form-block w-form"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                >
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    className="cta-form"
                    data-wf-page-id="670b9a74cb664fe24f3ca39d"
                    data-wf-element-id="5c6bf46a-ac47-2642-26c2-ae4621634207"
                    aria-label="Email Form"
                  >
                    <input
                      className="cta-input w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="Enter your email"
                      type="email"
                      id="Email-2"
                      required
                    />
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="button is-cta w-button"
                      value="Submit"
                    />
                    <div className="cta-button-wrapper"></div>
                  </form>
                  <div
                    className="success-message w-form-done"
                    tabIndex={-1}
                    role="region"
                    aria-label="Email Form success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    className="error-message w-form-fail"
                    tabIndex={-1}
                    role="region"
                    aria-label="Email Form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="w-[90%]">
          <div
            className="testimonial-left-content-wrapper"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <h2 className="heading-style-h2">
              See what our clients say about our services.
            </h2>
            <div className="text-size-regular">
              Felis odio fames placerat adipiscing. Semper nisi egestas egestas
              vivamus scelerisque. At commodo viverra posuere imperdiet ac nulla
              eu. Id integer amet nam ultrices dignissim. Amet habitasse
              porttitor cras aliquam.
            </div>
          </div>
        </div>
      </div>
      <VerticalCarousel />

      <div className="mt-10 px-5">
        <div
          className="price-top-content"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <h2 className="heading-style-h2">
            Simple Pricing for Every Property Manager
          </h2>
          <div className="text-size-regular">
            Cras ultrices tristique rutrum eu. Volutpat mauris porta purus ac
            pulvinar tempor sed auctor commodo.
          </div>
        </div>
        <div className="flex gap-3 flex-col items-center justify-center lg:flex-row">
          {priceCard.map((card, i) => (
            <>
              <div
                key={i}
                className="price-card _01 mt-5"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  opacity: 1,
                }}
              >
                <div className="price-card-top-content-wrapper">
                  <div className="price-card-top-conten">
                    <h6 className="heading-style-h6">{card.name}</h6>
                    <div className="price-icon-wrapper _01">
                      <img
                        src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a4b673743cc9b6696a_Price%20Icon%203.svg"
                        loading="lazy"
                        alt=""
                        className="price-icon"
                      />
                    </div>
                  </div>
                  <div className="price-card-plan-content">
                    <h3 className="heading-style-h3">
                      {card.price}
                      <span className="text-size-small is-white-200">
                        {card.monthlyPrice}
                      </span>
                    </h3>
                    <div className="text-size-regular">
                      Accumsan auctor bibendum interdum
                    </div>
                  </div>
                </div>
                <div className="price-card-bottom-content-wrapper">
                  <div className="text-size-regular text-color-white">
                    Included Plan :
                  </div>
                  <div className="price-card-bottom-content">
                    {card.IncludedFeatures.map((item, i) => (
                      <div className="price-card-content" key={i}>
                        <div className="price-icon-wrapper _02">
                          <img
                            src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a3377fa0efd1969d2f_Price%20Arrow.svg"
                            loading="lazy"
                            alt=""
                            className="price-icon"
                          />
                        </div>
                        <div className="text-size-regular">{item}</div>
                      </div>
                    ))}
                  </div>
                  <div className="price-button-wrapper">
                    <a
                      data-w-id="54ea39a0-74bc-9c4e-5709-28a9e6471ecd"
                      href="#"
                      className="button w-inline-block"
                    >
                      <div className="button-text-wrapper">
                        <div
                          className="button-text"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          Get started
                        </div>
                        <div
                          className="button-text"
                          style={{
                            transform:
                              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          Get started
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

const priceCard = [
  {
    name: "Basic Plan",
    price: "$29.0",
    monthlyPrice: "USD /month",
    IncludedFeatures: [
      "Automated Rent Collection",
      "Tenant Portal Access",
      "Basic Reporting",
      "Email Support",
    ],
  },
  {
    name: "Preminum Plan",
    price: "$99.0",
    monthlyPrice: "USD /month",
    IncludedFeatures: [
      "All Standard Plan Features",
      "Lease Management",
      "Multi-Property Support",
      "Tenant Screening Tools",
    ],
  },
  {
    name: "Standard Plan",
    price: "$79.0",
    monthlyPrice: "USD /month",
    IncludedFeatures: [
      "All Standard Plan Features",
      "Expense Tracking",
      "Document Storage",
      "Priority Email Support",
    ],
  },
];
export default FeaturesSection3;
