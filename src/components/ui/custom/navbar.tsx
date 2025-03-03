"use client";
import { MotionConfig, motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";
const links = [
  {
    name: "Home",
    src: "/",
  },
  {
    name: "About",
    src: "/about",
  },
  {
    name: "Contact",
    src: "/contact",
  },
  {
    name: "Features",
    src: "/features",
  },
];

const AnimatedHamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-20 w-20 rounded-full  top-1  transition-colors "
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[0.9px] w-7 bg-[#7f25fb]"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[0.9px] w-7 bg-[#7f25fb]"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute  h-[0.9px] w-7 bg-[#7f25fb] `}
          style={{
            x: "-85%",
            // y: "50%",
            // bottom: "35%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "62%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="h-16 md:h-24 flex md:justify-around justify-center gap-56 items-center bg-[#1b1b21] w-full">
        <Link href="/">
          <img
            src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a394da33c72343a1d0_Nav%20Logo.svg"
            loading="lazy"
            alt="Nav Logo"
            className="nav-brand-logo"
          />
        </Link>

        <div className="lg:flex gap-5 hidden ">
          {links.map((link, idx) => (
            <div key={idx}>
              <Link
                style={
                  link.src === "/"
                    ? {
                        borderRadius: "4px",
                        boxShadow:
                          "inset 0 12px 18px -6px #1212180d, inset 0 -1px #24242a, 0 4px 8px -4px #1212181a, 0 12px 18px -6px #1212180d",
                      }
                    : {}
                }
                className={` px-4 py-1 ${
                  link.src === "/"
                    ? "bg-[#17171d] text-white"
                    : "text-[#8c8f94]"
                }`}
                href={link.src}
                key={idx}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
          <AnimatedHamburgerButton active={active} setActive={setActive} />
        </div>

        {/* desktop nav */}

        <div className="nav-button-content hide-tablet hidden lg:flex">
          <a href="/" className="button is-secondary w-inline-block">
            <div>Login</div>
          </a>
          <a
            data-w-id="54ea39a0-74bc-9c4e-5709-28a9e6471ecd"
            href="/"
            className="button w-inline-block"
          >
            <div className="button-text-wrapper">
              <div
                className="button-text"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;",
                }}
              >
                Get started
              </div>
              <div
                className="button-text"
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;",
                }}
              >
                Get started
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* mobile nav */}
      <div className="absolute w-full z-50">
        <div
          className={`bg-[#121218]  duration-300 relative  ${
            active ? "top-0" : "-top-96"
          } flex flex-col items-start p-8 pl-5 gap-1`}
        >
          {links.map((link, idx) => (
            <LinksButton
              key={idx}
              link={link}
              classNames="w-full mb-[8px] text-sm"
            />
          ))}
          <div className="pl-5 flex gap-2">
            <Link href="/" className="button is-secondary w-inline-block">
              <div>Login</div>
            </Link>
            <Link href="/" className="button w-inline-block">
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
          </div>
        </div>
      </div>
    </>
  );
};

const LinksButton = ({
  link,
  classNames,
}: {
  link: { name: string; src: string };
  classNames?: string;
}) => {
  return (
    <Link
      style={
        link.src === "/"
          ? {
              borderRadius: "4px",
              boxShadow:
                "inset 0 12px 18px -6px #1212180d, inset 0 -1px #24242a, 0 4px 8px -4px #1212181a, 0 12px 18px -6px #1212180d",
            }
          : {}
      }
      className={` px-4 py-1 ${classNames} ${
        link.src === "/" ? "bg-[#17171d] text-white" : "text-[#8c8f94]"
      }`}
      href={link.src}
    >
      {link.name}
    </Link>
  );
};

export default Navbar;
