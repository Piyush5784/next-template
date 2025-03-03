"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    role: "Property Owner",
    text: "This platform has transformed how I manage my properties. The automated features save me time and hassle.",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f80_Testimonail%20Image%201.webp",
  },
  {
    name: "Sophia Martinez",
    role: "Portfolio Manager",
    text: "The reporting tools provide valuable insights into my properties’ performance. I can make informed decisions quickly.",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a7681beada7d6a0774_Testimonail%20Image%202.webp",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden  items-center justify-center md:flex">
      <div className=" relative pt-10 px-5">
        <div className="testimonial-card-wrapper ">
          <div className="testimonial-card _01">
            <div className="testimonial-card-top-content-wrapper">
              <div className="testimonial-top-left-content-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f80_Testimonail%20Image%201.webp"
                  loading="lazy"
                  alt=""
                  className="testimonial-icon"
                />
                <div className="testimonial-content">
                  <h6 className="heading-style-h6">John Smith</h6>
                  <div className="text-size-regular text-color-white-300">
                    Property Owner
                  </div>
                </div>
              </div>
              <div className="testimonial-social-link-wrapper">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a244e0637ed1ecc2e8_Facebook%20Icon.svg"
                    loading="lazy"
                    alt="Facebook"
                    className="testimonial-social-icon"
                  />
                </a>
                <a
                  href="http://x.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f68_Twitter.svg"
                    loading="lazy"
                    alt="Twitter"
                    className="testimonial-social-icon"
                  />
                </a>
              </div>
            </div>
            <div className="testimonial-card-bottom-content">
              <div className="text-size-regular text-color-white">
                “This platform has transformed how I manage my properties. The
                automated features save me time and hassle"
              </div>
            </div>
          </div>
          <div className="testimonial-card _02">
            <div className="testimonial-card-top-content-wrapper">
              <div className="testimonial-top-left-content-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a7681beada7d6a0774_Testimonail%20Image%202.webp"
                  loading="lazy"
                  alt=""
                  className="testimonial-icon"
                />
                <div className="testimonial-content">
                  <h6 className="heading-style-h6">Sophia Martinez</h6>
                  <div className="text-size-regular text-color-white-300">
                    Portfolio Manager
                  </div>
                </div>
              </div>
              <div className="testimonial-social-link-wrapper">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a244e0637ed1ecc2e8_Facebook%20Icon.svg"
                    loading="lazy"
                    alt="Facebook"
                    className="testimonial-social-icon"
                  />
                </a>
                <a
                  href="http://x.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f68_Twitter.svg"
                    loading="lazy"
                    alt="Twitter"
                    className="testimonial-social-icon"
                  />
                </a>
              </div>
            </div>
            <div className="testimonial-card-bottom-content">
              <div className="text-size-regular text-color-white">
                “The reporting tools provide valuable insights into my
                properties’ performance. I can make informed decisions quickly.”
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative pt-10 px-5">
        <div className="testimonial-card-wrapper ">
          <div className="testimonial-card _01">
            <div className="testimonial-card-top-content-wrapper">
              <div className="testimonial-top-left-content-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f80_Testimonail%20Image%201.webp"
                  loading="lazy"
                  alt=""
                  className="testimonial-icon"
                />
                <div className="testimonial-content">
                  <h6 className="heading-style-h6">John Smith</h6>
                  <div className="text-size-regular text-color-white-300">
                    Property Owner
                  </div>
                </div>
              </div>
              <div className="testimonial-social-link-wrapper">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a244e0637ed1ecc2e8_Facebook%20Icon.svg"
                    loading="lazy"
                    alt="Facebook"
                    className="testimonial-social-icon"
                  />
                </a>
                <a
                  href="http://x.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f68_Twitter.svg"
                    loading="lazy"
                    alt="Twitter"
                    className="testimonial-social-icon"
                  />
                </a>
              </div>
            </div>
            <div className="testimonial-card-bottom-content">
              <div className="text-size-regular text-color-white">
                “This platform has transformed how I manage my properties. The
                automated features save me time and hassle"
              </div>
            </div>
          </div>
          <div className="testimonial-card _02">
            <div className="testimonial-card-top-content-wrapper">
              <div className="testimonial-top-left-content-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a7681beada7d6a0774_Testimonail%20Image%202.webp"
                  loading="lazy"
                  alt=""
                  className="testimonial-icon"
                />
                <div className="testimonial-content">
                  <h6 className="heading-style-h6">Sophia Martinez</h6>
                  <div className="text-size-regular text-color-white-300">
                    Portfolio Manager
                  </div>
                </div>
              </div>
              <div className="testimonial-social-link-wrapper">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a244e0637ed1ecc2e8_Facebook%20Icon.svg"
                    loading="lazy"
                    alt="Facebook"
                    className="testimonial-social-icon"
                  />
                </a>
                <a
                  href="http://x.com/"
                  target="_blank"
                  className="testimonial-social-link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a5f06c55f1024c1f68_Twitter.svg"
                    loading="lazy"
                    alt="Twitter"
                    className="testimonial-social-icon"
                  />
                </a>
              </div>
            </div>
            <div className="testimonial-card-bottom-content">
              <div className="text-size-regular text-color-white">
                “The reporting tools provide valuable insights into my
                properties’ performance. I can make informed decisions quickly.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
