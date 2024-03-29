'use client';
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './about.module.css';


const mockdata = [
  {
    title: 'Seamless Transition',
    description:
      'Effortlessly convert your existing JavaScript projects into TypeScript with our user-friendly conversion tools and streamlined process. Say goodbye to compatibility issues and hello to enhanced code maintainability and productivity.',
    icon: IconGauge,
  },
  {
    title: 'Enhancing Proficiency',
    description:
      'It includes comprehensive learning resources, advanced tutorials, and practical exercises designed to deepen understanding and enhance skills.',
    icon: IconUser,
  },
  {
    title: 'Fostering Community Engagement',
    description:
      'Facilitating collaboration, knowledge sharing, and skill development among TypeScript enthusiasts',
    icon: IconCookie,
  },
];

const About = ()=> {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best TypeScript Platform
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
      Empowering Developers with Next-Generation TypeScript Mastery
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      Simplifying Transition, Enhancing Proficiency, and Fostering Community Engagement
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default About;