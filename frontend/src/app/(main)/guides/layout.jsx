'use client';
import { AppShell, Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Guides from './page';
import { IconCalendarStats } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './page.module.css';
//
import {
  HoverCard,

  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Image,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,

} from '@mantine/core';

import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classess from './homeheader.module.css';

//


//
const mockdata = [
  {
    icon: IconCode,
    title: 'Seamless Transition',
    description: 'Effortlessly convert your existing JavaScript projects into TypeScript with our user-friendly conversion tools',
    url: '/playground',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'Accessible to everyone at no cost, ensuring inclusivity and equal opportunity for learning TypeScript.',
    url: '/features',
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
    url:'/ques-and-ans'
  
  },

];

//

export default function Layout({ children }) {
  //
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <a href={item.url} className={classess.link} key={item.title}>
      <UnstyledButton className={classess.subLink}>
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
  //

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [guidesList, setGuidesList] = useState([])
  const [selGuide, setSelGuide] = useState(null);
  const [categoryWiseGuides, setCategoryWiseGuides] = useState([]);
  const [guideCategories, setGuideCategories] = useState([]);

  const fetchGuidesData = () => {
    fetch('http://localhost:5000/guide/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              const categories = Array.from(new Set(result.map((item) => item.category)));
              const tempData = categories.map(item => (
                {
                  category: item,
                  icon: IconCalendarStats,
                  guides: result.filter((guide) => guide.category === item)
                }
              ));

              console.log(tempData);
              setCategoryWiseGuides(tempData);
              setGuidesList(result);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchGuidesData();
  }, [])

  return (

    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >

      <AppShell.Header>
        <Group h="100%" px="md">

          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />

          <Link className={classes.userBtn} style={{ textDecoration: 'none' }} href='/'><Title align="center" weight={700} order={3}>TypeScript Masters</Title></Link>
          <Box>
            <header className={classess.header}>
              <Group justify="space-between" h="100%">
                {/* <Title order={3}>TypeScript Masters</Title> */}

                <Group h="100%" gap={0} visibleFrom="sm">
                  <a href="#" className={classess.link}>
                    Home
                  </a>
                  <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                    <HoverCard.Target>
                      <a href="#" className={classess.link}>
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
                        <Anchor href="#" fz="xs">
                          View all
                        </Anchor>
                      </Group>

                      <Divider my="sm" />

                      <SimpleGrid cols={2} spacing={0}>
                        {links}
                      </SimpleGrid>

                      <div className={classess.dropdownFooter}>
                        <Group justify="space-between">
                          <div>
                            <Text fw={500} fz="sm">
                              Get started
                            </Text>
                            <Text size="xs" c="dimmed">
                              Start your TypeScript journey here...
                            </Text>
                          </div>
                          <Button component={Link} href="/login" variant="default">Get started</Button>
                        </Group>
                      </div>
                    </HoverCard.Dropdown>
                  </HoverCard>
                  <a href="/playground" className={classess.link}>
                    Playground
                  </a>
                  <a href="/profile" className={classess.link}>
                    Your Profile
                  </a>
                </Group>

                <Group visibleFrom="sm">

                  {/* <Link href={"/login"}><Button variant="default">Log in</Button></Link> */}
                  <Link href={"/"} ><Button variant='outline' color='red' radius='xl'>Logout</Button></Link>


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

                <a href="#" className={classess.link}>
                  Home
                </a>
                <UnstyledButton className={classess.link} onClick={toggleLinks}>
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
                <a href="#" className={classess.link}>
                  Learn
                </a>
                <a href="#" className={classess.link}>
                  Academy
                </a>

                <Divider my="sm" />

                <Group justify="center" grow px="md">
                  {/* <Button variant="default">Log in</Button> */}
                  <Button variant='outline' color='red' radius='xl'>Logout</Button>
                </Group>
              </ScrollArea>
            </Drawer>
          </Box>

        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar guidesData={categoryWiseGuides} selGuide={selGuide} setSelGuide={setSelGuide} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Guides selGuide={selGuide} />
        

      </AppShell.Main>
    </AppShell>

  );
}