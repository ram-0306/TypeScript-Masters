'use client'
import { Overlay, Container, Title, Button, Text } from '@mantine/core';;
import classes from './page.module.css'
import { HomeHeader } from './HomeHeader';
import Footer from './Footer';
import Features from './Features';
import Faq from './user/faq/page';
import EmbeddedVideo from './EmbeddedVideo';
import Developer from './user/Developer/page';
import review from './user/review/page';


export default function Home() {
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
        <Features />
        <EmbeddedVideo />
        <Developer />
       <Faq />
        <review/>
        <Footer/>
    </>

  );
}