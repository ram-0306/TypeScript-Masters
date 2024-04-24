'use client';
import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from './UserButton/UserButton';
import classes from './sidebar.module.css';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';

const mockdata = [
  { label: 'TypeScript Introduction', icon: IconGauge },
  {
    label: 'TypeScript Basics',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Introduction to TypeScript', link: '/' },
      { label: 'Diffrence between JavaScript and TypeScript', link: '/' },
      { label: 'How to install TypeScript', link: '/' },
      { label: 'Hello wrold ! in typescript', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

const Sidebar = ({guidesData, selGuide, setSelGuide, categories}) => {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Title order={2} style={{ marginBottom: rem(20) }}>
          Guides
        </Title>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}

export default Sidebar;