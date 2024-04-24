import { useState } from 'react';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, rem } from '@mantine/core';
import { IconCalendarStats, IconChevronRight, IconNote } from '@tabler/icons-react';
import classes from './NavbarLinksGroup.module.css';
import Link from 'next/link';

const SliceString = (str, len) => {
  if (str.length > len) {
    return str.slice(0, len) + '...';
  }
  return str;

}

export function LinksGroup({ icon: Icon, category, initiallyOpened, guides, setSelGuide }) {
  const hasLinks = Array.isArray(guides);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? guides : []).map((guide) => (
    <Text
      component={Link}
      className={classes.link}
      href="#"
      key={guide.title}
      onClick={(event) => {
        event.preventDefault()
        setSelGuide(guide);
      }}
    >
      {SliceString(guide.title, 30)}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <IconNote style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{SliceString(category, 25)}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}