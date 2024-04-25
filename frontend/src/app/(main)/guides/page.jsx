'use client';
import { Title } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import CodeTool from '@editorjs/code';

const DEFAULT_INITIAL_DATA = {
  "time": new Date().getTime(),
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "This is my awesome editor!",
        "level": 1
      }
    },
  ]
}

const Guides = ({ selGuide }) => {


  const ejInstance = useRef();
  const [initialContent, setInitialContent] = useState(DEFAULT_INITIAL_DATA);

  const initEditor = () => {
    const editor = new EditorJS({
      readOnly: true,
      holder: 'editorjs',
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      data: selGuide.content ?? initialContent,
      tools: {
        header: Header,
        list: List,
        image: SimpleImage,
        checklist: Checklist,
        quote: Quote,
        table: Table,
        code: CodeTool

      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null && selGuide !== null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [selGuide]);

  return (
    <div>
      {
        selGuide !== null ? (
          <>
            <Title align= 'center' order={1}>{selGuide.title}</Title>
            <div id='editorjs'></div>
          </>
        ) : (
          <Title order={3} align="center" c="dimmed">Select a guide from the sidebar</Title>
        )
     }
    </div>
  )
}
  

export default Guides