'use client'
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/image';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import {
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
} from '@mantine/core';
import { enqueueSnackbar } from 'notistack';
import { useForm } from '@mantine/form';


const EditorComponent = () => {
  const ejInstance = useRef();

  const [title, setTitle] = useState('');

  const { id } = useParams();
  // console.log(id);
  const [guideData, setGuideData] = useState(null);
  const [initialContent, setInitialContent] = useState(DEFAULT_INITIAL_DATA);

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
        table: Table

      },
    });
  };


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

const postQuestion = () => {
  const quesForm = useForm({
    initialValues: {
      title: '',
      question: {},
      category: '',
      tags: []
    }
  });

  const quesSubmit = (values) => {
    console.log(values);
    fetch('http://localhost:5000/question/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          enqueueSnackbar('Question Posted Successfully', { variant: 'success' });
        } else {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
      }).catch((err) => {
        console.log(err);
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      });
  }


  return (
    <div>
      <Container size={560} my={80} shadow="md">
        <Title ta="center">
          Ask Your Querry !
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Write down your question here !
        </Text>

        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <form onSubmit={quesForm.onSubmit(quesSubmit)}>
            <TextInput
              required
              label="Your Question"
              placeholder="feel free to ask"
              {...form.getInputProps('email')}
            />

            <Group justify="centre" mt="lg">
              <Button type='submit' >Submit</Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default postQuestion