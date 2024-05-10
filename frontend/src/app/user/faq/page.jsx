'use client'
import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
 //import image from '/faq_img.svg';
import classes from './faq.module.css';

const placeholder =
  '  Yes, TypeScript is fully compatible with JavaScript, meaning you can gradually adopt TypeScript into your existing projects without having to rewrite all your code.';
const placeholder2 = 'Yes, you can! Our website is fully optimized for mobile devices, making it convenient for you to access TypeScript resources on the move. Happy exploring!';
const placeholder3 ='Stay in the loop effortlessly! Simply register your email with us, and we will ensure you are the first to know about exciting updates, fresh content, and innovative features added to our website. Your inbox is about to become a treasure trove of TypeScript knowledge!'; 
const placeholder4 = 'No restrictions here! Dive right in and unleash the power of our TypeScript conversion tools without any limitations. Get ready to transform your JavaScript code seamlessly into TypeScript with ease. Let your coding journey begin without bounds!';

const Faq=()=> {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={'/faq_img.svg'} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control> Can I use TypeScript with existing JavaScript code?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>Can I access your website's resources on mobile devices?</Accordion.Control>
                <Accordion.Panel>{placeholder2}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How can I stay updated on new features and content added to your website?</Accordion.Control>
                <Accordion.Panel>{placeholder3}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                Are there any restrictions or limitations on using the TypeScript conversion tools on your website?
                </Accordion.Control>
                <Accordion.Panel>{placeholder4}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
export default Faq;