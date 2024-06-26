'use client'
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { enqueueSnackbar } from 'notistack';

const feedback = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },

  });

  return (
    <div>
      <Container> 
      <form onSubmit={form.onSubmit((values) => {
        console.log(values);

        fetch('http://localhost:5000/feedback/add', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((response) => {
            console.log(response.status);
             if(response.status === 200){
              enqueueSnackbar("feedback added successfully", {variant:"success"})
             }else{
              enqueueSnackbar("something went wrong",{variant:"warning"})
             }
          }).catch((err) => {
            console.log(err);
          });
      })}>
        <Title
          order={1}
          size="h1"
          style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
          mt={20}
        >
          Feedback
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
      </Container>
    </div>
  
  );
}

export default feedback;