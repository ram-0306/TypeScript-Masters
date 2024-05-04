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
  ActionIcon,
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
  IconEdit,
  IconUsersGroup,
} from '@tabler/icons-react';
import classes from './navbar.module.css';
import Link from 'next/link';
import { IconUser } from '@tabler/icons-react';


// const mockdata = [
//   {
//     icon: IconCode,
//     title: 'Seamless Transition',
//     description: 'Effortlessly convert your existing JavaScript projects into TypeScript with our user-friendly conversion tools',
//   },
//   {
//     icon: IconCoin,
//     title: 'Free for everyone',
//     description: 'Accessible to everyone at no cost, ensuring inclusivity and equal opportunity for learning TypeScript.',
//   },
//   {
//     icon: IconBook,
//     title: 'Documentation',
//     description: 'Comprehensive documentation covering TypeScript concepts, features, and best practices for effective learning and reference.',
//   },
//   {
//     icon: IconFingerprint,
//     title: 'Q/A Support',
  
//     description: 'Interactive Q&A support to address user queries, troubleshoot issues, and foster community engagement for enhanced learning and collaboration..',
//   },

// ];

const Navbar = () =>  {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();


  return (
    <Box style={{position: 'relative'}}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Title order={3}>TypeScript Masters</Title>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a component={Link} href='/' className={classes.link}>
              Home
            </a>     
            <Divider my="sm" />               
           
            <a component={Link} href='./manage-user' className={classes.link}>
             Users
            </a>
            <a component={Link} href='./user-feedback' className={classes.link}>
              Feedback
            </a>
            <a component={Link} href='./manage-guides' className={classes.link}>
              Manage Guides
            </a>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          <Group>
         
        </Group>
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
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
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

export default Navbar;