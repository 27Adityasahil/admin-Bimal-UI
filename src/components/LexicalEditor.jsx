import React from "react";
import {
  LexicalComposer
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import "./LexicalEditor.css";


const editorConfig = {
  namespace: "MyEditor",
  onError(error) {
    throw error;
  },
  theme: {
    paragraph: "editor-paragraph",
  },
  nodes: [],
};

const MyOnChangePlugin = ({ onChange }) => {
  const [editor] = useLexicalComposerContext();

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          const root = $getRoot();
          const html = root.getTextContent(); // plain text, safe fallback
          onChange(html);
        });
      }}
    />
  );
};

const LexicalEditor = ({ value, onChange }) => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<p>Start writing here...</p>}
        />
        <HistoryPlugin />
        <MyOnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
};

export default LexicalEditor;
