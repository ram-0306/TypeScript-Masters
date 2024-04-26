'use client';
import { Container, Grid, SimpleGrid, rem } from '@mantine/core';
import { Box, Center, GridCol, Group, Paper, RingProgress, Text, } from '@mantine/core';
import React from 'react';
import FeatureCard from './FeatureCard';
import StatsCard from './StatsCard';
import { IconUser } from '@tabler/icons-react';
import HeaderMenu from './HeaderMenu';
import useAppContext from '@/app/context/AppContext';
import HomeHeader from '@/app/HomeHeader';
const PRIMARY_COL_HEIGHT = rem(300);
const StatCard = ({ stat, Icon }) => {
    return <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
            <RingProgress
                size={80}
                roundCaps
                thickness={8}
                sections={[{ value: stat.progress, color: stat.color }]}
                label={
                    <Center>
                        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                    </Center>
                }
            />

            <div>
                <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                    {stat.label}
                </Text>
                <Text fw={700} size="xl">
                    {stat.stats}
                </Text>
            </div>
        </Group>
    </Paper>
}

const userProfile = () => {
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;



    return (
    
        <div mt={30}>

            <Container my="md" mt={50}>
            <HeaderMenu/>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <FeatureCard />
                    <Grid gutter="md">
                        <Grid.Col>
                            <StatsCard />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Box mx={'sm'}>
                                <Grid mt={'10vh'}>
                                    <GridCol >
                                        <StatCard
                                            stat={{
                                                label: 'Asked',
                                                color: 'cyan',
                                                progress: 70,
                                                stats: 10
                                            }}
                                            Icon={IconUser}
                                        />
                                    </GridCol>
                                </Grid>
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Box mx={'sm'}>
                                <Grid mt={'10vh'}>
                                    <GridCol >
                                        <StatCard
                                            stat={{
                                                label: 'Answered',
                                                color: 'cyan',
                                                progress: 70,
                                                stats: 750
                                            }}
                                            Icon={IconUser}
                                        />
                                    </GridCol>
                                </Grid>

                            </Box>

                        </Grid.Col>
                    </Grid>
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default userProfile;