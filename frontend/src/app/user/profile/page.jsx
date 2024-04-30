'use client';
import { Container, Grid, SimpleGrid, rem } from '@mantine/core';
import { Box, Center, GridCol, Group, Paper, RingProgress, Text, } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import StatsCard from './StatsCard';
import { IconChecklist, IconQuestionMark, IconUser } from '@tabler/icons-react';
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

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    const fetchUserQuestions = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/getbyuser/${currentUser._id}`)
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then((result) => {
                            console.log(result);
                            setQuestions(result);
                        })
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    const fetchUserAnswers = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/answer/getbyuser/${currentUser._id}`)
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then((result) => {
                            console.log(result);
                            setAnswers(result);
                        })
                }
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchUserQuestions();
        fetchUserAnswers();
    }, [])


    return (

        <div mt={30}>
            <Container my="md" mt={50}>
                <HeaderMenu />
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
                                                progress: 56,
                                                stats: questions.length
                                            }}
                                            Icon={IconQuestionMark}
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
                                                progress: 29,
                                                stats: answers.length
                                            }}
                                            Icon={IconChecklist}
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