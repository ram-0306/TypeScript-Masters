import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, rem, Container } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons-react';
import classes from './features.module.css';
import Link from 'next/link';

const features = [
  {
    icon: IconReceiptOff,
    title: 'Seamless Transition',
    description: 'Effortlessly convert your existing JavaScript projects into TypeScript with our user-friendly conversion tools'
  },
  {
    icon: IconFileCode,
    title: 'Documentation',
    description: 'Comprehensive documentation covering TypeScript concepts, features, and best practices for effective learning and reference.',
  },
  {
    icon: IconCircleDotted,
    title: 'Q and A support',
    description:
      'Interactive Q&A support to address user queries, troubleshoot issues, and foster community engagement for enhanced learning and collaboration..',
  },
  {
    icon: IconFlame,
    title: 'Free For Everyone',
    description:
      'Accessible to everyone at no cost, ensuring inclusivity and equal opportunity for learning TypeScript',
  },
];

export default function Features() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div>


    
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
          TypeScript Masters: bridging the gap between creativity and certainty in code.
          </Title>
          <Text c="dimmed">
          TypeScript: where the fluidity of JavaScript meets the solidity of types, crafting code that dances elegantly between innovation and reliability.
          </Text>

          <Button component={Link} href="/about"
            variant="gradient"
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Get started
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>

   
    </div>
  );
}