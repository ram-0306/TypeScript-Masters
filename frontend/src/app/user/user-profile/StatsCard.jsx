'use client'
import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconSwimming } from '@tabler/icons-react';
import classes from './StatsCard.module.css';
import React from 'react';

const StatsCard=()=> {
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconSwimming style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
        TypeScript Syllabus
      </Text>
      <Text c="dimmed" ta="center" fz="sm">
        2 Topics  / day
      </Text>

      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Progress
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">20 / 36 topics</Text>
        <Badge size="sm">2 hours left</Badge>
      </Group>
    </Paper>
  );
}
export default StatsCard;