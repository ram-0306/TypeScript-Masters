import React, { useState } from 'react';
import { Card, Image, Text, Box, Stack, rem, Group, Badge, Center, Button, TextInput, Select, Icon } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt, IconUser } from '@tabler/icons-react';
import classes from './FeaturesCard.module.css';

const FeatureCard = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [role, setRole] = useState('Developer');
  const [contactInfo, setContactInfo] = useState([
    { label: 'Phone', value: '' },
    { label: 'Email', value: '' },
    { label: 'Address', value: '' },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // You can add logic here to save the updated data to your backend
  };

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src="https://www.digipodium.com/public/images/team_members/mubassir.png"
          alt="Mohammad Mubassir"
          className={classes.image}
        />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          {isEditing ? (
            <TextInput
              value={name}
              onChange={(event) => setName(event.target.value)}
              size="xs"
              radius="sm"
              placeholder="Enter your name"
              icon={<IconUser />}
            />
          ) : (
            <Text fw={500}>{name ? name : 'Enter your name'}</Text>
          )}
          {isEditing ? (
            <TextInput
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              size="xs"
              radius="sm"
              placeholder="Enter your bio"
              icon={<IconSun />}
            />
          ) : (
            <Text fz="xs" c="dimmed">{bio ? bio : 'Enter your bio'}</Text>
          )}
        </div>
        {isEditing ? (
          <Select
            data={[
              { value: 'Developer', label: 'Developer' },
              { value: 'Student', label: 'Student' },
            ]}
            value={role}
            onChange={(value) => setRole(value)}
            size="xs"
            radius="sm"
            placeholder="Select role"
            icon={<IconSun />}
          />
        ) : (
          <Badge variant="outline">{role}</Badge>
        )}
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

      <Card.Section className={classes.section}>
        <Center>
          <Button
            onClick={isEditing ? handleSave : handleEdit}
            radius="xl"
            style={{ flex: 1 }}
          >
            {isEditing ? 'Save' : 'Edit Profile'}
          </Button>
        </Center>
      </Card.Section>
    </Card>
  );
};

export default FeatureCard;
