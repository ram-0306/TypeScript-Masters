'use client';
import { Group, Code, ScrollArea, rem, Title } from '@mantine/core';
import { UserButton } from './UserButton/UserButton';
import classes from './sidebar.module.css';
import { LinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import useAppContext from '@/app/context/AppContext';


const Sidebar = ({ guidesData, selGuide, setSelGuide }) => {
  const links = guidesData.map((item) => <LinksGroup setSelGuide={setSelGuide} {...item} key={item.label} />);

  const { loggedIn, currentUser } = useAppContext();

  return (
    <nav className={classes.navbar}>

      <div className={classes.header}>
        <Title order={2}>
          Guides
        </Title>

      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      {
        loggedIn &&
        <div className={classes.footer}>
          <UserButton user={currentUser} />
        </div>
      }
    </nav>
  );
}

export default Sidebar;