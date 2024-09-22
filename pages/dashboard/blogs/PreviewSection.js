// PreviewSection.js
import React,{useState,useRef} from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { BsArrowsFullscreen } from "react-icons/bs";
import { TfiFullscreen } from "react-icons/tfi";
import BlogCard from "@/components/shared/card/BlogCard";
import MainContent from "@/components/shared/content/MainContent";
import {toggleFullscreen  } from '@/utils/functionHelpers'
const PreviewSection = ({
  watch,
  galleryPreview,
  isLoading,
  handleImageLoad,
  publishDate,
  editorData,
  selectedTags,
}) => {
    const [isHidden, setIsHidden] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const previewRef = useRef(null);
    const profileImage = "https://avatar.iran.liara.run/public"; // آدرس عکس واقعی

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
      };
      const handleToggleFullscreen = () => {
        toggleFullscreen(isFullscreen, setIsFullscreen, previewRef);
      };
  return (
    <div>
      <button
        className="bg-white p-2 rounded-full shadow cursor-pointer z-10"
        onClick={toggleVisibility}
      >
        {isHidden ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
      </button>
      <div className={`${isHidden ? "hidden" : "opacity-100"}`}>
        <BlogCard watch={watch} galleryPreview={galleryPreview} />
      </div>
      <div
        ref={previewRef}
        className={`w-full h-full bg-gray-50 flex mt-10 items-start justify-center transition-all duration-500 ${
          isFullscreen ? "fixed inset-0 z-50" : "relative"
        }`}
        style={{
          boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.2)", // سایه از بالا
        }}
      >
        <button
          className="bg-white p-2 rounded-full shadow cursor-pointer absolute top-2 right-2 z-10"
          onClick={handleToggleFullscreen}
        >
          {isFullscreen ? (
            <TfiFullscreen size={20} />
          ) : (
            <BsArrowsFullscreen size={20} />
          )}
        </button>

        <div className="flex-1 p-4 mt-4 h-full sm:h-screen rounded-lg overflow-y-auto bg-gray-50">
          <MainContent
            galleryPreview={galleryPreview}
            profileImage={profileImage}
            isLoading={isLoading}
            handleImageLoad={handleImageLoad}
            publishDate={publishDate}
            watch={watch}
            editorData={editorData}
            selectedTags={selectedTags}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
