'use client';
import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import classes from './user-feedback.module.css';
import { useEffect, useState } from 'react';


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
          />
        
          <div>
            <Text fz="sm">  {feed.name}</Text>
            <Text fz="sm">  {feed.email}</Text>
            <Text fz="xs" c="dimmed">
            {feed.message}
            </Text>
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
              '<p>I am from <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">RCB</a> and i want to say,  <strong>ee sala cup namde!!</strong>. It will be my first IPL title <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">BCCI</a> will select me for T2O WC.</p>',
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
}
export default userFeedback;