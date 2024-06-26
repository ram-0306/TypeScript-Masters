'use client'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  Flex,
  Image,
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';

const Signup = () => {
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const signupSubmit = (values) => {
    console.log(values);
    fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          enqueueSnackbar('User Registered Successfully', { variant: 'success' });
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
    <Container size="lg">
    <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
    >
    <div>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" Text="center" fw={500}>
          Welcome to Typescript Masters, Register Yourself
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(signupSubmit)}>
          <Stack>

            <TextInput
              required
              label="Name"
              placeholder="Your name"
              id="name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              error={form.errors.name && 'Invalid name'}
              radius="md"
            />

            <TextInput
              required
              label="Email"
              placeholder="Your email"
              id="email"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              id="password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm password"
              id="confirmPassword"
              value={form.values.confirmPassword}
              onChange={(event) => form.setFieldValue('confirmPassword', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor href={'/login'} c="dimmed" component={Link} size="xs">
              Already have an account? Login
            </Anchor>
            <Button type="submit" radius="xl">
              Signup
            </Button>
          </Group>
        </form>
      </Paper>
      </div>
      <div>
        <Image src="/signup-img.jpg" alt="Signup Image"
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
export default Signup;