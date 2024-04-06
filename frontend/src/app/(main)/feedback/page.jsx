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
    <div>Feedback</div>
  )
}