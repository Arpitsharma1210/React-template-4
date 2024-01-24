import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Wrapper } from "./style";
import { baseFontFamily, baseFontSize } from "../../theme/style.typography";

interface TinyMCEProps {
  onContentChange: (text: string, html: string) => void;
}

const apiKey = "a7jo6vkgszgd4voi7kq7lbvh0wogk5r4o1kf6teh5mc1zqbt";

const RichTextEditor: React.FC<TinyMCEProps> = ({ onContentChange }) => {
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState<string | undefined>();

  const onEditorChange = (a: string, editor: any) => {
    setContent(a);
    const htmlContent = editorRef.current.getContent();
    onContentChange(a, htmlContent);
  };

  return (
    <Wrapper>
      <Editor
        apiKey={apiKey}
        onEditorChange={onEditorChange}
        value={content}
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          menubar: false,
          plugins: "lists",
          toolbar:
            "bold | italic | underline | casechange | alignleft | aligncenter | numlist |  paragraph",
          setup: (editor) => {
            editor.ui.registry.addButton("paragraph", {
              icon: "paragraph",
              onAction: () => {
                editor.execCommand("mceInsertContent", false, "<p></p>");
              },
            });

            editor.ui.registry.addButton("casechange", {
              icon: "change-case",
              onAction: () => {
                const selectedText = editor.selection.getContent();
                const upperCaseText = selectedText.toUpperCase();
                editor.execCommand("mceInsertContent", false, upperCaseText);
              },
            });
          },
          content_style: `body { font-family: ${baseFontFamily}; font-size:${baseFontSize}; }`,
        }}
      />
    </Wrapper>
  );
};

export default RichTextEditor;
