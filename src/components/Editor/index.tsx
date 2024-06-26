"use client";

import "react-quill/dist/quill.snow.css";

import { Control, Controller } from "react-hook-form";
import React, { useMemo } from "react";

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
  name,
  control,
}: {
  control: Control<any>;
  defaultValue?: string;
  name: string;
}) => {
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

  return (
    <>
      {ReactQuill && (
        <Controller
          name={name}
          defaultValue={defaultValue}
          control={control}
          render={({ field }) => (
            <ReactQuill
              className="w-full h-full"
              theme="snow"
              modules={modules}
              value={field.value}
              formats={formats}
              onChange={(content: string) => field.onChange(content)}
            />
          )}
        />
      )}
    </>
  );
};
export default Editor;
