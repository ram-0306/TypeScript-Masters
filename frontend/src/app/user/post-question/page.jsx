'use client'
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


const postQuestion =() => {
  const quesForm = useForm({
    initialValues:{
      question:''
    }
  });

  const quesSubmit = (values) =>{
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
   <Container size={560} my={80} shadow= "md">
     <Title ta="center">
       Ask Your Querry !
     </Title>
     <Text c="dimmed" fz="sm" ta="center">
       Write down your question here !
     </Text>

     <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
     <form onSubmit={quesForm.onSubmit(quesSubmit)}>
       <TextInput 
         id='question'
         required
         label="Your Question" 
         placeholder="feel free to ask" 
         value={quesForm.values.question}
         onChange={(event) => quesForm.setFieldValue('question', event.currentTarget.value)}      
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