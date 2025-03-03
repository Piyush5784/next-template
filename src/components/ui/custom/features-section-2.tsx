import React from "react";

const FeaturesSection2 = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center text-center pt-20 ">
        <div className="max-w-3xl">
          <h2 className="heading-style-h2">
            A Step-by-Step Guide to Streamlined Management
          </h2>
          <div className="text-size-regular">
            Vehicula pulvinar diam est sodales auctor turpis. Lorem morbi mattis
            egestas in scelerisque dignissim sed fames eget.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 mt-10 items-center">
        <div>
          <div
            className="process-card _01 flex"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="process-card-top-content ">
              <div className="process-icon-wrapper _01">
                <div className="text-size-small text-color-white">01</div>
              </div>
              <h4 className="heading-style-h4">Sign Up</h4>
            </div>
            <div className="process-card-content">
              <div className="text-size-regular">
                Adipiscing urna volutpat nibh massa pulvinar. Nec lectus ut
                gravida sed nulla. Duis erat et id diam urna ullamcorper aliquet
                sit sagittis. Ornare etiam neque risus commodo turpis. Orci cras
                orci nisl blandit.
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a41b6a9d23982d332e_Process%20Image%201.png"
            loading="lazy"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 90vw, (max-width: 991px) 91vw, 34vw"
            srcSet="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a41b6a9d23982d332e_Process%20Image%201-p-500.png 500w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a41b6a9d23982d332e_Process%20Image%201-p-800.png 800w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a41b6a9d23982d332e_Process%20Image%201-p-1080.png 1080w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a41b6a9d23982d332e_Process%20Image%201.png 1500w"
            alt=""
            className="process-image w-full"
          />
        </div>
        <div>
          <img
            src="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a4281c8af9f890a987_Process%20Image%203.png"
            loading="lazy"
            sizes="(max-width: 479px) 87vw, (max-width: 767px) 89vw, (max-width: 991px) 90vw, 33vw"
            srcSet="https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a4281c8af9f890a987_Process%20Image%203-p-500.png 500w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a4281c8af9f890a987_Process%20Image%203-p-800.png 800w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a4281c8af9f890a987_Process%20Image%203-p-1080.png 1080w, https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a4281c8af9f890a987_Process%20Image%203.png 1390w"
            alt=""
            className="process-image w-full"
          />
        </div>
        <div>
          <div
            className="process-card _02"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
            }}
          >
            <div className="process-card-top-content">
              <div className="process-icon-wrapper _02">
                <div className="text-size-small text-color-white">02</div>
              </div>
              <h4 className="heading-style-h4">Property Setup</h4>
            </div>
            <div className="process-card-content">
              <div className="text-size-regular">
                Mi maecenas natoque sapien enim. Aliquam mauris montes risus
                elementum consequat nisl orci. Congue nec placerat risus turpis
                turpis leo sed sit enim. Suspendisse lacus mattis morbi eu
                viverra maecenas fermentum in nisl. Vel semper tincidunt vitae
                ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-2">
        <div className="flex flex-col gap-2 items-center justify-center text-center pt-20 pb-12">
          <div className="max-w-3xl">
            <h2 className="heading-style-h2">
              Powerful Tools for Effortless Property Management
            </h2>
            <div className="text-size-regular">
              Eu pellentesque viverra tellus sit accumsan aliquam metus enim.
              Cursus volutpat ornare
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {featuresCard.map((features, i) => (
            <div
              key={i}
              className="all-feature-card _01"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              <div className="all-feature-icon-wrapper _01">
                <img
                  src={features.image}
                  loading="lazy"
                  alt=""
                  className="all-feature-icon"
                />
              </div>
              <div className="all-feature-card-content">
                <h6 className="heading-style-h6">{features.name}</h6>
                <div className="text-size-regular">
                  In bibendum interdum eget amet. Velit id odio aliquet sit vel.
                  Tempus purus est.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const featuresCard = [
  {
    name: "Automated Invoicing",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a21e7b95b18ecedc13_Feature%20Icon%206.svg",
  },
  {
    name: "Tenant Portal",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a2cc65d8e32101d276_Feature%20Icon%205.svg",
  },
  {
    name: "Maintainance Dashboard",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a2821d0e2d4fa442df_Feature%20Icon%204.svg",
  },
  {
    name: "Lease Management",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a2377fa0efd1969c9f_Feature%20Icon%203.svg",
  },
  {
    name: "Report Analytics",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a20115a7ce813c6b17_Feature%20Icon%202.svg",
  },
  {
    name: "Communication Tools",
    image:
      "https://cdn.prod.website-files.com/670b9a74cb664fe24f3ca39c/671e16a2b673743cc9b66722_Feature%20Icon%201.svg",
  },
];

export default FeaturesSection2;
