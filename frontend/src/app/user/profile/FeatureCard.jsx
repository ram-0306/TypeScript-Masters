import React, { useState } from 'react';
import { Card, Image, Text, Box, Stack, rem, Group, Badge, Center, Button, TextInput, Select, Icon, FileInput, ActionIcon } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt, IconUser, IconUpload, IconHome } from '@tabler/icons-react';
import classes from './FeaturesCard.module.css';
import { Formik } from 'formik';
import { useForm } from '@mantine/form';
import useAppContext from '@/app/context/AppContext';
import { enqueueSnackbar } from 'notistack';

const FeatureCard = () => {
  const [contactInfo, setContactInfo] = useState([
    { label: 'Phone', value: '' },
    { label: 'Email', value: '' },
    { label: 'Address', value: '' },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const { currentUser, setCurrentUser, logout } = useAppContext();

  const userForm = useForm({
    initialValues: currentUser,

    validate: {
      name: (value) => (value.length > 0 ? null : 'Name cannot be empty'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const updateProfile = (values) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${currentUser._id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            console.log(data);
            setCurrentUser(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            enqueueSnackbar('Profile updated successfully', { variant: 'success' });
            setIsEditing(false);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        enqueueSnackbar('Error updating profile', { variant: 'error' });
      });
  }

  const uploadImage = (file) => {
    const formData = new FormData();
    formData.append('myfile', file);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/uploadfile`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          updateProfile(
            {
              avatar: file.name,
            }
          )
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        enqueueSnackbar('Error uploaded image', { variant: 'error' });
      });
  }

  // const uploadAvatar = (file) => {}

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/${currentUser.avatar}`}
          alt={currentUser.name}
          // radius={'lg'}
          className={classes.image}
        />
        <Button htmlFor="avatar-upload" component={'label'} m={20}>
          <IconUpload />
          Upload Avatar
        </Button>
        <input hidden id='avatar-upload'
          placeholder="Upload Avatar Image"
          onChange={uploadImage}
        />

      </Card.Section>
      <form onSubmit={userForm.onSubmit(
        (values) => {
          updateProfile(values);
        }
      )}>
        <Group justify="space-between" mt="md">
          <div>
            {isEditing ? (
              <TextInput
                fullWidth
                mb={10}
                size="xs"
                radius="sm"
                placeholder="Enter your name"
                icon={<IconUser />}
                {...userForm.getInputProps('name')}
              />
            ) : (
              <Text fw={500}>{currentUser.name}</Text>
            )}
            {isEditing ? (
              <TextInput
                fullWidth
                mb={10}
                {...userForm.getInputProps('email')}
                size="xs"
                radius="sm"
                placeholder="Email Address"
                icon={<IconAt />}
              />
            ) : (
              <Text fz="xs" c="dimmed">{currentUser.email}</Text>
            )}
          </div>
          <Button onClick={logout} variant='outline' color='red' radius='xl'>
            Logout
          </Button>
        </Group>
        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            Contact Information
          </Text>
          
          <Group>
          {isEditing ? (
            <TextInput
              fullWidth
              mb={10}
              {...userForm.getInputProps('phone')}
              size="xs"
              radius="sm"
              placeholder="Phone"
              icon={<IconPhone />}
            />
          ) : (
            <Text fz="xs" c="dimmed">{currentUser.phone}</Text>
          )}
          {isEditing ? (
            <TextInput
              fullWidth
              mb={10}
              {...userForm.getInputProps('address')}
              size="xs"
              radius="sm"
              placeholder="Address"
              icon={<IconHome />}
            />
          ) : (
            <Text fz="xs" c="dimmed">{currentUser.address}</Text>
          )}
          </Group>

        </Card.Section>

        {
          isEditing && (

            <Button
              fullWidth
              type='submit'
              radius="xl"
              style={{ flex: 1 }}
            >
              Save
            </Button>
          )
        }

      </form>
      {
        !isEditing && (
          <Button
            fullWidth
            type='button'
            onClick={handleEdit}
            radius="xl"
            mt={'auto'}
          // style={{ flex: 1 }}
          >
            Edit Profile
          </Button>
        )
      }
    </Card>
  );
};

export default FeatureCard;
