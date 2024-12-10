// Step1.js
import React from 'react';

const Step1 = ({publishDate,register,errors}) => {

  return (
    <>
      <label htmlFor="title" className="flex flex-col gap-y-1 w-full">
        <span className="text-sm">عنوان پست را وارد کنید</span>
        <input
          type="text"
          name="title"
          id="title"
          {...register("title", {
            required: "وارد کردن عنوان الزامی است",
            minLength: {
              value: 3,
              message: "عنوان باید حداقل ۳ حرف داشته باشد",
            },
            maxLength: {
              value: 45,
              message: "عنوان نباید بیشتر از ۴۵ حرف باشد",
            },
          })}
          placeholder="عنوان پست" 
          maxLength="50"
          className="p-2 rounded border w-full"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">{errors.title.message}</span>
        )}
      </label>
      <label htmlFor="description" className="flex flex-col gap-y-2 w-full">
    توضیحات
    <textarea
      name="description"
      id="description"
      maxLength={276}
      placeholder="توضیحات پست را وارد کنید..."
      className="p-2 rounded h-[170px]
       border w-full form-textarea"
       {...register("description", { // اصلاح نام فیلد
        required: "توضیحات الزامی است",
        minLength: {
          value: 30,
message: "توضیحات باید حداقل ۳۰ کاراکتر باشد",
        },
        maxLength: {
          value: 225,
          message: "توضیحات نباید بیشتر از ۲۲۵ کاراکتر باشد",
        },
      })}
    />
     {errors.description && ( // اصلاح نام فیلد
          <span className="text-red-500 text-sm">{errors.description.message}</span>
        )}
  </label>
  <label htmlFor="publishDate" className="flex flex-col gap-y-2 w-full">
  تاریخ انتشار
  <input
    type="date"
    name="publishDate"
    id="publishDate"
    className="rounded p-2 border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    {...register("publishDate", { required: "تاریخ انتشار الزامی است" })}
    defaultValue={publishDate}
  />
  {errors.publishDate && ( 
    <span className="text-red-500 text-sm">{errors.publishDate.message}</span>
  )}
</label>
          
    </>
  );
};

export default Step1;