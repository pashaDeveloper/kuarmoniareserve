import React from "react";
import Link from "next/link";

const Slide = ({ title, description, bgImg, url }) => {
  return (
    <div
      className={`relative w-[100%] h-[50vh] rounded-md   md:h-[70vh] bg-cover bg-center bg-no-repeat`}
      >
         {bgImg.type==="video" ? (
       <video
       className="absolute w-full h-full object-cover rounded-md"
       src={bgImg?.url}
       autoPlay
       loop
       muted
       controlsList="nodownload"
       onContextMenu={(e) => e.preventDefault()}
     />
      ) : (
        <div
          className="absolute w-full h-full bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${bgImg.url})` }}
        ></div>
      )}
      {bgImg.type!=="video" && (

      <Link href={url} passHref>
        <div className="block">
          <div
            className={`backdrop-filter w-full backdrop-blur-[12px] bg-white/60 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right  md:rounded-md md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
          >
            <h3 className="text-lg md:text-2xl lg:text-3xl font-medium">
              {title}
            </h3>
            <p className="text-[13px] md:text-lg mt-2 md:mt-4 lg:mt-8">
              {description}
            </p>
          </div>
        </div>
      </Link>
      ) }
    </div>
  );
};

export default Slide;
