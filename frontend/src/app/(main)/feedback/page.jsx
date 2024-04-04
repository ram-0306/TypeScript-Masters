'use client'
import React from 'react';
import { useForm } from '@mantine/form';
import { enqueueSnackbar } from 'notistack';
import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';

export default function GetInTouchPage() {
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

  const feedbackSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/Feedback/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        enqueueSnackbar('Feedback Submitted Successfully', { variant: 'success' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <Title
        order={2}
        size="xl"
        style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginBottom: '20px' }}
        fw={900}
      >
        Give Us Feedback
      </Title>

      <form onSubmit={form.onSubmit(feedbackSubmit)} style={{ marginBottom: '20px' }}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} gap="md">
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
          label="Feedback"
          placeholder="Your Feedback"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Button type="submit" size="lg">
            Send Feedback
          </Button>
        </Group>
      </form>
    </div>
  );
}
