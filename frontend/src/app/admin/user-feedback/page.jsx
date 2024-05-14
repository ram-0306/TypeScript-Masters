'use client';
import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import classes from './user-feedback.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const userFeedback=()=> {

  const [feedback, setFeedback] = useState([]);

  const getFeedback = async() => {
    const res = await fetch("http://localhost:5000/feedback/getall")
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setFeedback(data);

  }
  useEffect(() => {
  getFeedback()
  },[])

  return (
    <Paper withBorder radius="md" className={classes.comment}>
    {
      feedback.map((feed) => {
        return(
          <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
            alt="Jacob Warnhalter"
            radius="xl"
            component={Link}
            href='/user/profile'

          />
        
          <div>
          <Text fz="sm" >
            {feed.message}
            </Text>
           {/* <Text fz="sm">  {feed.name}</Text> */}
            <Text fz="xs" c="dimmed">  {feed.email}</Text>
           
          </div>
        </Group>
        )
      })
    }
     
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p></p>',
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}
export default userFeedback;