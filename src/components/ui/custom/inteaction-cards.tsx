"use client";
import React from "react";
import { motion } from "motion/react";

const IntegrationsCards = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col w-full">
        {/* First row with 3 items */}
        <div className="flex justify-center items-center p-10 pb-2 w-full gap-3 flex-col lg:flex-row">
          <div className="integration-card relative z-10">
            <div className="integration-icon-wrapper _02">
              <img
                src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a2844df0983b88a797_Integration%20Icon%202.svg"
                loading="lazy"
                alt=""
                className="integration-icon"
              />
            </div>
            <h6 className="heading-style-h6">CRM Systems</h6>
          </div>
          <IntegrationsLine />
          <div className="integration-card relative z-10">
            <div className="integration-icon-wrapper _01">
              <img
                src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a27f66f91d8c91f0b6_Integration%20Icon%205.svg"
                loading="lazy"
                alt=""
                className="integration-icon"
              />
            </div>
            <h6 className="heading-style-h6">Accounting Software</h6>
          </div>
          <IntegrationsLine />
          <div className="integration-card relative z-10">
            <div className="integration-icon-wrapper _01">
              <img
                src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a27f66f91d8c91f0b6_Integration%20Icon%205.svg"
                loading="lazy"
                alt=""
                className="integration-icon"
              />
            </div>
            <h6 className="heading-style-h6">Payment Gateways</h6>
          </div>
        </div>

        {/* Second row with 2 items */}
        <div className="flex justify-center items-center w-full px-10 pt-0 gap-3 flex-col lg:flex-row">
          <div className="integration-card relative z-10">
            <div className="integration-icon-wrapper _02">
              <img
                src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a2a808fb65a69d6adb_Integration%20Icon%204.svg"
                loading="lazy"
                alt=""
                className="integration-icon"
              />
            </div>
            <h6 className="heading-style-h6">Sales Pipeline Tracking</h6>
          </div>
          <IntegrationsLine />

          <div className="integration-card relative z-10">
            <div className="integration-icon-wrapper">
              <img
                src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a20115a7ce813c6b8b_Integration%20Icon%203.svg"
                loading="lazy"
                alt=""
                className="integration-icon"
              />
            </div>
            <h6 className="heading-style-h6">Email Marketing</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntegrationsLine = () => {
  return (
    <div className="integration-line-wrapper hidden lg:block">
      <motion.div
        className="integration-line"
        initial={{
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        }}
        animate={{
          transform:
            "translate3d(100px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div>
    </div>
  );
};

export default IntegrationsCards;
