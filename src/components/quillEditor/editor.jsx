import React from "react";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import style from "./styles.module.css";

export const Editor = () => {
  const { quill, quillRef } = useQuill();

  const blba = "<h5> testing testing </h5>";

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(blba);
    }
  }, [quill]);

  return (
    <div className={`${style.text_editor}`}>
      <div className={`${style.isian}`} ref={quillRef} />
    </div>
  );
};

export default Editor;
