'use client';
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import CodeTool from '@editorjs/code';
import { useParams } from "next/navigation";
import { Button, TextInput } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { enqueueSnackbar } from "notistack";
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

  const [title, setTitle] = useState('');

  const { id } = useParams();
  // console.log(id);
  const [guideData, setGuideData] = useState(null);
  const [initialContent, setInitialContent] = useState(DEFAULT_INITIAL_DATA);


  const fetchGuideData = () => {
    fetch('http://localhost:5000/guide/getbyid/' + id)
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              setGuideData(result);
              setTitle(result.title);
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
      // data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
      data: guideData.content ?? initialContent,
      tools: {
        header: Header,
        list: List,
        image: SimpleImage,
        checklist: Checklist,
        quote: Quote,
        table: Table,
        code:CodeTool
        
      },
    });
  };

  // This will run only once
  useEffect(() => {
    if (ejInstance.current === null && guideData !== null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [guideData]);

  const updateGuide = () => {
    // editor.save().then((outputData) => {
    //   console.log('Article data: ', outputData)
    // }).catch((error) => {
    //   console.log('Saving failed: ', error)
    // });
    ejInstance.current.save()
      .then((result) => {
        console.log(result);
        fetch('http://localhost:5000/guide/update/' + id, {
          method: 'PUT',
          body: JSON.stringify({
            content: result,
            title
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response.status);
          enqueueSnackbar('Guide Updated Successfully', { variant: 'success' });
        })
      }).catch((err) => {
        console.log(err);
      });


    // return 

  }

  return <>

    <TextInput label="Guide Title" value={title} onChange={e => setTitle(e.target.value)} />
    <Button justify="center" leftSection={<IconPlus />} variant="gradient"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
      onClick={updateGuide}
    >
      Update
    </Button>
    <div id='editorjs'></div></>
}

export default EditorComponent;