"use client";
import React from "react";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { BorderBeam } from "./Button-beam";

const HeroSection = () => {
  const logos = ["Google", "Discord", "Linkedin", "Twitter"];
  return (
    <>
      <div>
        <div className="">
          <div className="flex items-center flex-col border-[#1b1b21] border-2 mt-16 m-10 gap-1 border-dashed relative">
            {/* Top-left corner */}

            <div className="flex flex-col md:flex-row justify-evenly gap-3">
              <h1 className="heading-style-h1 text-center">Manage Your </h1>
              <TextCarousel />
            </div>
            <h1 className="heading-style-h1"> &nbsp;in One Place</h1>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col gap-8">
          <div className="text-size-regular w-[500px] text-center text-[8a8c9f]">
            Tellus orci sed gravida lectus. Aliquam nunc praesent et scelerisque
            id turpis. Sit quis fusce eget nisl vel eu. Amet habitasse arcu
            blandit duis quam venenatis purus lacus.
          </div>

          <div className="flex gap-5">
            <Link
              data-w-id="54ea39a0-74bc-9c4e-5709-28a9e6471ecd"
              href="/price"
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
            </Link>

            <Link href="/about" className="button is-secondary w-inline-block">
              <div>How it work</div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 mb-16">
          {/* Left image - hidden on sm/md screens */}

          {/* Center image - larger on all screens */}
          <div className="pt-4 lg:pt-14 group flex items-center mx-2 lg:mx-6 rounded-lg justify-center flex-grow">
            <div className="p-2 lg:p-5 relative w-full">
              <div className="p-[10px] bg-[#d3d3df1a] rounded-xl z-50">
                <img
                  src="/hero-image.png"
                  loading="lazy"
                  sizes="(max-width: 479px) 89vw, (max-width: 767px) 91vw, (max-width: 991px) 92vw, 840px"
                  alt=""
                  className="hero-image"
                />
              </div>
              <BorderBeam duration={10} />

              <div className="lg:h-[50rem] h-56 transition-all duration-300 opacity-0 group-hover:opacity-100 w-[30rem] top-1 left-1/2 transform -translate-x-1/2 blur-[300px] bg-[#7f25fb] absolute -z-10"></div>
              <div className="lg:h-[50rem] h-56 transition-all duration-300 opacity-0 group-hover:opacity-100 w-[30rem] top-1 left-1/2 transform -translate-x-1/2 blur-3xl bg-[#7f25fb] absolute -z-10"></div>
            </div>
          </div>

          {/* Right image - hidden on sm/md screens */}
        </div>
      </div>
      <div className="flex mt-2 pt-10 items-center justify-center text-center">
        <div className="text-size-regular">
          Trusted brands partnering For exceptional{" "}
          <span className="text-size-regular text-color-white">
            property management
          </span>{" "}
          solutions.
        </div>
      </div>
      <div className="">
        <Marquee>
          <div className="gap-10 flex font-bold text-xl py-10 text-[#8a8c90]">
            {logos.map((logo, i) => (
              <div key={i}>{logo}</div>
            ))}
          </div>
        </Marquee>{" "}
      </div>
    </>
  );
};

const texts = ["Tenants", "Payments", "Properties"];

function TextCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-white overflow-hidden flex items-center justify-center ">
      <div className="heading">
        <div className="heading-content flex items-center justify-center">
          {texts.map((text, i) => (
            <motion.h1
              key={i}
              animate={{ y: (i - index) * 60 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="heading-style-h1 text-color-pink"
              style={{
                position: "absolute",
                transform: "translateY(-50%)",
              }}
            >
              {text}
            </motion.h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
