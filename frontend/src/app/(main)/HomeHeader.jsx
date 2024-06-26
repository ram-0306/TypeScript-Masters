'use client'
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './homeheader.module.css';
import Link from 'next/link';
import ActionToggle from './Action/page';
import Features from '../Features';
import Image from 'next/image';


const mockdata = [
  {
    icon: IconCode,
    title: 'Seamless Transition',
    description: 'Effortlessly convert your existing JavaScript projects into TypeScript with our user-friendly conversion tools',
    url: '/playground',
  },
  {
    icon: IconCoin,
    title: 'Feedback Driven',
    description: 'Accessible to everyone at no cost, ensuring inclusivity and equal opportunity for learning TypeScript.',
    url: '/feedback',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Comprehensive documentation covering TypeScript concepts, features, and best practices for effective learning and reference.',
    url: '/guides',
  },
  {
    icon: IconFingerprint,
    title: 'Q/A Support',
    description: 'Interactive Q&A support to address user queries, troubleshoot issues, and foster community engagement for enhanced learning and collaboration..',
    url: '/ques-and-ans',
  },

];

const HomeHeader = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <a href={item.url} className={classes.link} key={item.title}>
    <UnstyledButton className={classes.subLink}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
    </a>
  ));

  return (
    <Box>
      <header className={classes.header} >
   
    {/* <Image src="/file.png" alt="TypeScript Masters" width={80} height={60} /> */}
        <Group justify="space-between" h="100%">

        <Title order={3}>TypeScript Masters</Title>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor  fz="xs" component={Link} href='/'>
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text component={Link} href="/signup" fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed"  >
                        Start your TypeScript journey here...
                      </Text>
                    </div>
                    <Button component={Link} href="/login" variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <a href="/guides" className={classes.link}>
              Documentation
            </a>
            <a href="/playground" className={classes.link}>
              Playground
            </a>
          </Group>

          <Group visibleFrom="sm">

            <Link href={"/login"}><Button variant="default">Log in</Button></Link>
            <Link href={"/signup"} ><Button>Sign up</Button></Link>
            <ActionToggle />
         
           
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default HomeHeader;