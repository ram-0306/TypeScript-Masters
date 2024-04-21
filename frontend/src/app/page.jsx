'use client'
import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './page.module.css';
import { HomeHeader } from './HomeHeader';
import Footer from './Footer';
import Features from './Features';
import Faq from './user/faq/page';
import EmbeddedVideo from './EmbeddedVideo';
<<<<<<< HEAD
import Developer from './user/Developer/page';
import review from './user/review/page';

=======
import Animation from './user/animation'; // Corrected import name
import React from 'react'; // Don't forget to import React
>>>>>>> 424266b0f66b49237e4cb332eb94ccd05078c0ba

export default function Home() {
  const items = [
    { id: 1, title: "TypeScript", subtitle: "TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system. For example, JavaScript provides language primitives like string and number , but it doesn't check that you've consistently assigned these." },
    { id: 2, title: "Title 2", subtitle: "Subtitle 2" },
    // Add more items as needed
  ];

  return (
    <>
      <HomeHeader />
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>Unlock the power of TypeScript with TypeScript Masters</Title>
          <Text className={classes.description} size="xl" mt="xl">
            Your ultimate destination for mastering TypeScript and accelerating your development journey.
          </Text>

          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Get started
          </Button>
        </Container>
      </div>
<<<<<<< HEAD
        <Features />
        <EmbeddedVideo />
        <Developer />
       <Faq />
        <review/>
        <Footer/>
=======
      <Features />
      <EmbeddedVideo />
      <Faq />
      <Animation items={items} /> {/* Corrected component name */}
      <Footer/>
>>>>>>> 424266b0f66b49237e4cb332eb94ccd05078c0ba
    </>
  );
}
