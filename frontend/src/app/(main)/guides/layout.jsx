'use client';
import { AppShell, Burger, Group,Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Guides from './page';
import { IconCalendarStats } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './page.module.css';

export default function Layout({ children }) {
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