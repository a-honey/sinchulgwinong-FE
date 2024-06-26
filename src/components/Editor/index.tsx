"use client";

import "react-quill/dist/quill.snow.css";

import React, { useMemo, useState } from "react";

import { UseFormRegisterReturn } from "react-hook-form";
import dynamic from "next/dynamic";

const formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "color",
  "background",
  "size",
  "h1",
];

const Editor = ({
  defaultValue,
  register,
}: {
  defaultValue?: string;
  register?: UseFormRegisterReturn;
}) => {
  const [values, setValues] = useState(defaultValue ?? "");

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
      },
    };
  }, []);

  const handleChange = (value: string) => {
    setValues(value);
    console.log(register?.onChange);
    register?.onChange(value);
  };

  return (
    <>
      {ReactQuill && (
        <ReactQuill
          className="w-full h-full"
          theme="snow"
          modules={modules}
          value={values}
          formats={formats}
          onChange={handleChange}
        />
      )}
    </>
  );
};
export default Editor;
