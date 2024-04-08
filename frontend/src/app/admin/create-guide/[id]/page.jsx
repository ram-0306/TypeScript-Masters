'use client';
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from '@editorjs/list';
import { useParams } from "next/navigation";
// import

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


const EditorComponent = () => {
  const ejInstance = useRef();

  const { id } = useParams();
  // console.log(id);
  const [guideData, setGuideData] = useState(null);


  const fetchGuideData = () => {
    fetch('http://localhost:5000/guide/getbyid/' + id)
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              setGuideData(result);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchGuideData();
  }, [])
  

  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
      data: guideData.content ?? {},
      tools: {
        header: Header,
        list: List,
        // image: SimpleImage,
        // checklist: Checklist,
        // quote: Quote,
        // warning: Warning,
        // marker: Marker,
        // code: CodeTool,
        // delimiter: Delimiter,
        // inlineCode: InlineCode,
        // linkTool: LinkTool,
        // embed: Embed,
        // table: Table
      },
    });
  };

  // This will run only once
  useEffect(() => {
    if (ejInstance.current === null && guideData !==null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const updateGuide = () => {
    // editor.save().then((outputData) => {
    //   console.log('Article data: ', outputData)
    // }).catch((error) => {
    //   console.log('Saving failed: ', error)
    // });
    fetch('http://localhost:5000/guide/update/'+id, {
      method: 'PUT',
      // body: JSON
    })
  }

  return <><div id='editorjs'></div></>;
}

export default EditorComponent;