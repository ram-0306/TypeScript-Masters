'use client';
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import CodeTool from '@editorjs/code';
import { useParams } from "next/navigation";
import { Button, Card, Container, Select, TextInput, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { enqueueSnackbar } from "notistack";
import ImageTool from '@editorjs/image';
import axios from 'axios';
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
    {
      id: "hZAjSnqYMX",
      type: "image",
      data: {
      file: {
      url: "Login-img.png",} ,
      withBorder: false,
      withBackground: false,
      stretched: true,
      caption: "CodeX Code Camp 2019",} ,} ,
  ]
}


const CATEGORIES = ['Basics',
  'Difference between JavaScript and TypeScript',
  'TypeScript Primitive Types',
];

const EditorComponent = () => {
  const ejInstance = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);

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
        checklist: Checklist,
        quote: Quote,
        table: Table,
        code: CodeTool,
        image: {
          class: ImageTool,
          config: {
            /**
             * Custom uploader
             */
            uploader: {
  
             async uploadByFile(file){
                // your own uploading logic here
                const formData = new FormData();
                formData.append('myfile', file);

                const response =await axios.post(
                  'http://localhost:5000/util/uploadfile',
                 formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  },
                  withCredentials: false,
              });
              if(response.data.success === 1 )
    
              {
                return response.data;
              }
            }
          }
        }
      }
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
            title,
            category
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

    <Container size={'md'}>
      <Card shadow="xs" padding="md" radius="md" style={{ marginBottom: 20 }}>
        <Title order={3} my={4}>Guide Editor</Title>
        <TextInput mb={20} label="Guide Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Select
          mb={20}
          label="Select category"
          placeholder="Pick value"
          value={category}
          onChange={setCategory}
          data={CATEGORIES}
        />
        <Button justify="center" leftSection={<IconPlus />} variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          onClick={updateGuide}
        >
          Update
        </Button>
      </Card>
    </Container>

    <div id='editorjs'></div>
  </>
}

export default EditorComponent;