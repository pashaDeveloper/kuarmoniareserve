import React from "react";
import { Apply, Reject } from "@/utils/SaveIcon";

const DeleteModal = ({ isOpen, onDelete, onClose, message }) => {
  if (!isOpen ) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-opacity-70 transition-all ease-in-out duration-500"
      style={{ transform: "translateY(0)", opacity: 1 }}
    >
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1)]">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold">
          {message}          </h3>
          <p className="text-red-500 text-sm mt-2">
            این عملیات غیر قابل بازگشت است.
          </p>
         
        </div>
        <div className="flex justify-around items-center">
          <button
            onClick={() => onDelete()} // اجرای تابع حذف بدون نیاز به ارسال شناسه
            className="group w-[150px] py-2 rounded-md reject-button"
          >
            <Reject />
            <span className="mr-2">تایید</span>
          </button>
          <button
            onClick={onClose} // بستن مودال
            className="group border apply-button w-[150px]"
          >
            <Apply />
            <span className="mr-2">لغو</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
