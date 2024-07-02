"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";

const Editor = () => {
  const [value, setValue] = useState("");
  const [editorHtml, setEditorHtml] = useState("");
  const handleSubmit = () => {
    const html = document.querySelector(".ql-editor").innerHTML;
    setEditorHtml(html);
    console.log(editorHtml);
  };

  console.log();
  return (
    <div className="">
      <ReactQuill value={value} onChange={setValue} />
      <div className="editor-container">
        <div className="ql-editor" />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
export default Editor;
