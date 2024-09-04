"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any
}
const FormSection = ({ selectedTemplate ,userFormInput}: PROPS) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (e: any) => {
    // handle input changes
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    userFormInput(formData);
  };

  return (
    <div className="p-5 shadow-md border rounded-lg">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-[#704ef8]">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>
      <form action="" className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="my-2 flex flex-col gap-2 mb-7">
              <label className="font-bold">{item.label}</label>
              {/* <input type={item.type} id={item.name} name={item.name} placeholder={item.placeholder} /> */}
              {item.field == "input" ? (
                <Input
                  name={item?.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              ) : item.field == "textarea" ? (
                <Textarea
                  name={item?.name}
                  required={item?.required}
                  onChange={handleInputChange}
                />
              ) : null}
            </div>
          </div>
        ))}
        <Button type="submit" className="w-full py-6">
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
