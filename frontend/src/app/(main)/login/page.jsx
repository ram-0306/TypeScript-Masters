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
} from '@mantine/core';
import { GoogleButton } from './GoogleButton';
import { TwitterButton } from './TwitterButton';
import classes from './login.module.css';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';


const Login = () => {

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
              router.push('/guides');
          })
        } else if (response.status === 401) {
          enqueueSnackbar('Invalide Credential', { variant: 'error' });
        }
        else {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
      }).catch((err) => {
        console.log(err);
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      });
  }

  return (
    <div className={classes.background}>
      <div className={classes.blur}>
        <Container size="sm" p={110}>
          <div >
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
        </Container>
      </div>
    </div>
  );
}
export default Login;