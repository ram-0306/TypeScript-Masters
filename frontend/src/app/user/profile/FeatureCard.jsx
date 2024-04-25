import React, { useState } from 'react';
import { Card, Image, Text, Box, Stack, rem, Group, Badge, Center, Button, TextInput, Select, Icon } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt, IconUser } from '@tabler/icons-react';
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
          <Badge variant="outline">{currentUser.role}</Badge>
        </Group>
        <Card.Section className={classes.section} mt="md">
          <Text fz="sm" c="dimmed" className={classes.label}>
            Contact Information
          </Text>
          <Group justify="start" gap="md">
            {contactInfo.map((info) => (
              <div key={info.label}>
                <Text fw={500} size="sm">
                  {info.label}:
                </Text>
                {isEditing ? (
                  <TextInput
                    value={info.value}
                    onChange={(event) => {
                      const updatedInfo = [...contactInfo];
                      const index = updatedInfo.findIndex((item) => item.label === info.label);
                      updatedInfo[index].value = event.target.value;
                      setContactInfo(updatedInfo);
                    }}
                    size="xs"
                    radius="sm"
                    placeholder={`Enter your ${info.label.toLowerCase()}`}
                    icon={<IconAt />}
                  />
                ) : (
                  <Text size="sm">{info.value}</Text>
                )}
              </div>
            ))}
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
