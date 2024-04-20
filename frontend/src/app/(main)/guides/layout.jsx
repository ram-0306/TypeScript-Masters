'use client';
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Guides from './page';
import { IconCalendarStats } from '@tabler/icons-react';

export default function Layout({children}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const [guidesList, setGuidesList] = useState([])
  const [selGuide, setSelGuide] = useState(null);
  const [categoryWiseGuides, setCategoryWiseGuides] = useState([]);

  const fetchGuidesData = () => {
    fetch('http://localhost:5000/guide/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              const categories = Array.from(new Set(result.map((item) => item.category)));
              const tempData = result.map(item => (
                {
                  label: item.category,
                  icon: IconCalendarStats,
                  links: result.filter((guide) => guide.category === item.category).map((guide) => (
                    { label: guide.title, link: '/guides/' + guide._id }
                  ))
                }
              ));

              console.log(tempData);
              // setCategoryWiseGuides();
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
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Sidebar guidesData={guidesList} selGuide={selGuide} setSelGuide={setSelGuide} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Guides selGuide={selGuide} />
      </AppShell.Main>
    </AppShell>
  );
}