"use client";
import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './contactIcons.module.css';

// interface ContactIconProps {
//   icon: React.ElementType;
//   title: React.ReactNode;
//   description: React.ReactNode;
// }

function ContactIcon({ icon: Icon, title, description }) {
  return (
    <div className={classes.wrapper}>
      <Box mr={rem(12)}>
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'typescriptmasters.com', icon: IconAt },
  { title: 'Phone', description: '+(91) 8081241314', icon: IconPhone },
  { title: 'Address', description: 'Alambagh Lucknow', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

const ContactIconsList = () => {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}

export default ContactIconsList;
