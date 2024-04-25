'use client';
import React from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Anchor,
  Stack,
  Container,
  Flex,
  Image,
} from '@mantine/core';
import classes from './login.module.css';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation'; // Fixed import
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import useAppContext from '@/app/context/AppContext';

const Login = () => {

  const { setLoggedIn, setCurrentUser } = useAppContext();

  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const loginSubmit = (values) => {
    fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          enqueueSnackbar('User LoggedIn Successfully', { variant: 'success' });
          response.json()
            .then((data) => {
              console.log(data);
              sessionStorage.setItem('user', JSON.stringify(data));
              setLoggedIn(true);
              setCurrentUser(data);
              router.push('/guides');
            })
        } else if (response.status === 401) {
          enqueueSnackbar('Invalid Credential', { variant: 'error' }); // Corrected typo
        } else {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      });
  }

  return (
    <div>
      <Container size={'lg'} my={50}>
        <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <div>
            <Paper radius="md" p="xl" withBorder className={classes.card}>
              <Text size="lg" fw={500}>
                Welcome to TypeScript Masters, Login with
              </Text>
              <Group grow mb="md" mt="md">
                <GoogleButton radius="xl">Google</GoogleButton>
                <TwitterButton radius="xl">Twitter</TwitterButton>
              </Group>

              <Divider label="Or continue with email" labelPosition="center" my="lg" />

              <form onSubmit={form.onSubmit(loginSubmit)}>
                <Stack>
                  <TextInput
                    required
                    label="Email"
                    placeholder="hello@mantine.dev"
                    value={form.values.email}
                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    error={form.errors.email && 'Invalid email'}
                    radius="md"
                  />

                  <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                    error={form.errors.password && 'Password should include at least 6 characters'}
                    radius="md"
                  />
                </Stack>

                <Group justify="space-between" mt="xl">
                  <Anchor component={Link} href={'/signup'} type="button" c="dimmed" size="xs">
                    Don't have an account? Register
                  </Anchor>
                  <Button type="submit" radius="xl">
                    Login
                  </Button>
                </Group>
              </form>
            </Paper>
          </div>
          <div>
            <Image src="/login-img.svg" alt="Login Image"
              h={500}
              w="auto"
              fit="cover"
            />

          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Login;
