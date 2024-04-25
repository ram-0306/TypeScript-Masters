import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './Developer.module.css';

const Developer = () => {
  return (
    <div className={classes.container}>
      {/* First Article Card */}
      <Paper shadow="md" p="xl" radius="md" className={classes.card1}>
        <div className={classes.content}>
          <Text className={classes.category} size="xs">
            nature
          </Text>
          
          <Title order={3} className={classes.title}>
            Ram Gopal Gautam
          </Title>
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="white" color="dark">
            Contact
          </Button>
        </div>
      </Paper>
      

      {/* Second Article Card */}
      <Paper shadow="md" p="xl" radius="md" className={classes.card2}>
        <div className={classes.content}>
          <Text className={classes.category} size="xs">
            travel
          </Text>
          <Title order={3} className={classes.title}>
            Ayush Singh
          </Title>
        </div>
        <div className={classes.buttonContainer}>
          <Button variant="white" color="dark">
            Contact
          </Button>
        </div>
      </Paper>
    </div>
    
    
  );
}

export default Developer; 
