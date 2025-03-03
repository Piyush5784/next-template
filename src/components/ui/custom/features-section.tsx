import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      image: "/feature-image.png",
      alt: "feature-image",
      srcSet:
        "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a265b7ec241a3ff29e_Feature%20Image%203-p-500.png 500w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a265b7ec241a3ff29e_Feature%20Image%203-p-800.png 800w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a265b7ec241a3ff29e_Feature%20Image%203.png 1035w",
    },
    {
      image: "/feature-image-2.png",
      alt: "feature-image-2",
      srcSet:
        "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a257ff4ac8d1ea1a29_Feature%20Image%202-p-500.png 500w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a257ff4ac8d1ea1a29_Feature%20Image%202-p-800.png 800w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a257ff4ac8d1ea1a29_Feature%20Image%202.png 1032w",
    },
    {
      image: "/feature-image-3.png",
      alt: "feature-image-3",
      srcSet:
        "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e8eb26ed8d27b6fed4a0a_Feature%20Image%201-p-500.png 500w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e8eb26ed8d27b6fed4a0a_Feature%20Image%201.png 688w",
    },
  ];
  return (
    <>
      <div className="flex items-center flex-col gap-10 justify-center text-center pt-10">
        <div className="max-w-3xl">
          <h2 className="heading-style-h2 ">
            Advanced Features to Simplify Your Property Operations
          </h2>
          <div className="text-size-regular w-[90%]">
            Eget senectus quis facilisis nibh sed enim. Sed nunc eget volutpat
            nulla sagittis urna viverra.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="feature-card-bg _01 mt-10 "
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="feature-card-content w-auto">
              <h5 className="heading-style-h5">Tenant Screening Tools</h5>
              <div className="text-size-regular px-2">
                Leo fusce pulvinar at cursus consequat eget cursus. Eget amet in
                amet leo cursus.
              </div>
            </div>
            <div className="feature-image-wrapper _01 ">
              <img
                src={feature.image}
                loading="lazy"
                sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 41vw, 342px"
                srcSet={feature.srcSet}
                alt=""
                className={feature.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesSection;
