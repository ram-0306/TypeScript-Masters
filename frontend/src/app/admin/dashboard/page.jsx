<<<<<<< HEAD
'use client';
import { Box, Center, Grid, GridCol, Group, Paper, RingProgress, Text, rem } from '@mantine/core';


import React from 'react'
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { IconUser } from '@tabler/icons-react';

const data = [
    {
        "country": "AD",
        "hot dog": 31,
        "hot dogColor": "hsl(248, 70%, 50%)",
        "burger": 187,
        "burgerColor": "hsl(319, 70%, 50%)",
        "sandwich": 82,
        "sandwichColor": "hsl(3, 70%, 50%)",
        "kebab": 105,
        "kebabColor": "hsl(81, 70%, 50%)",
        "fries": 31,
        "friesColor": "hsl(44, 70%, 50%)",
        "donut": 99,
        "donutColor": "hsl(57, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 94,
        "hot dogColor": "hsl(84, 70%, 50%)",
        "burger": 143,
        "burgerColor": "hsl(8, 70%, 50%)",
        "sandwich": 41,
        "sandwichColor": "hsl(97, 70%, 50%)",
        "kebab": 79,
        "kebabColor": "hsl(179, 70%, 50%)",
        "fries": 5,
        "friesColor": "hsl(179, 70%, 50%)",
        "donut": 84,
        "donutColor": "hsl(328, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 13,
        "hot dogColor": "hsl(256, 70%, 50%)",
        "burger": 111,
        "burgerColor": "hsl(37, 70%, 50%)",
        "sandwich": 137,
        "sandwichColor": "hsl(261, 70%, 50%)",
        "kebab": 65,
        "kebabColor": "hsl(291, 70%, 50%)",
        "fries": 35,
        "friesColor": "hsl(79, 70%, 50%)",
        "donut": 199,
        "donutColor": "hsl(59, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 148,
        "hot dogColor": "hsl(354, 70%, 50%)",
        "burger": 195,
        "burgerColor": "hsl(297, 70%, 50%)",
        "sandwich": 86,
        "sandwichColor": "hsl(160, 70%, 50%)",
        "kebab": 63,
        "kebabColor": "hsl(225, 70%, 50%)",
        "fries": 195,
        "friesColor": "hsl(216, 70%, 50%)",
        "donut": 19,
        "donutColor": "hsl(312, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 58,
        "hot dogColor": "hsl(259, 70%, 50%)",
        "burger": 105,
        "burgerColor": "hsl(178, 70%, 50%)",
        "sandwich": 84,
        "sandwichColor": "hsl(117, 70%, 50%)",
        "kebab": 198,
        "kebabColor": "hsl(223, 70%, 50%)",
        "fries": 82,
        "friesColor": "hsl(266, 70%, 50%)",
        "donut": 27,
        "donutColor": "hsl(180, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 153,
        "hot dogColor": "hsl(158, 70%, 50%)",
        "burger": 63,
        "burgerColor": "hsl(290, 70%, 50%)",
        "sandwich": 185,
        "sandwichColor": "hsl(145, 70%, 50%)",
        "kebab": 108,
        "kebabColor": "hsl(50, 70%, 50%)",
        "fries": 146,
        "friesColor": "hsl(358, 70%, 50%)",
        "donut": 116,
        "donutColor": "hsl(240, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 6,
        "hot dogColor": "hsl(142, 70%, 50%)",
        "burger": 142,
        "burgerColor": "hsl(138, 70%, 50%)",
        "sandwich": 89,
        "sandwichColor": "hsl(305, 70%, 50%)",
        "kebab": 106,
        "kebabColor": "hsl(87, 70%, 50%)",
        "fries": 196,
        "friesColor": "hsl(157, 70%, 50%)",
        "donut": 123,
        "donutColor": "hsl(284, 70%, 50%)"
    }
]
const data2 = [
    {
      "id": "go",
      "label": "go",
      "value": 392,
      "color": "hsl(229, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 564,
      "color": "hsl(300, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 420,
      "color": "hsl(30, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 468,
      "color": "hsl(294, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 70,
      "color": "hsl(98, 70%, 50%)"
    }
  ]
const data3 = [
    {
      "id": "japan",
      "color": "hsl(327, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 1
        },
        {
          "x": "helicopter",
          "y": 36
        },
        {
          "x": "boat",
          "y": 47
        },
        {
          "x": "train",
          "y": 166
        },
        {
          "x": "subway",
          "y": 299
        },
        {
          "x": "bus",
          "y": 264
        },
        {
          "x": "car",
          "y": 27
        },
        {
          "x": "moto",
          "y": 119
        },
        {
          "x": "bicycle",
          "y": 111
        },
        {
          "x": "horse",
          "y": 171
        },
        {
          "x": "skateboard",
          "y": 17
        },
        {
          "x": "others",
          "y": 253
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(289, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 164
        },
        {
          "x": "helicopter",
          "y": 173
        },
        {
          "x": "boat",
          "y": 290
        },
        {
          "x": "train",
          "y": 71
        },
        {
          "x": "subway",
          "y": 296
        },
        {
          "x": "bus",
          "y": 123
        },
        {
          "x": "car",
          "y": 131
        },
        {
          "x": "moto",
          "y": 232
        },
        {
          "x": "bicycle",
          "y": 73
        },
        {
          "x": "horse",
          "y": 113
        },
        {
          "x": "skateboard",
          "y": 45
        },
        {
          "x": "others",
          "y": 197
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(73, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 250
        },
        {
          "x": "helicopter",
          "y": 11
        },
        {
          "x": "boat",
          "y": 93
        },
        {
          "x": "train",
          "y": 291
        },
        {
          "x": "subway",
          "y": 5
        },
        {
          "x": "bus",
          "y": 171
        },
        {
          "x": "car",
          "y": 33
        },
        {
          "x": "moto",
          "y": 83
        },
        {
          "x": "bicycle",
          "y": 68
        },
        {
          "x": "horse",
          "y": 144
        },
        {
          "x": "skateboard",
          "y": 141
        },
        {
          "x": "others",
          "y": 267
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(92, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 206
        },
        {
          "x": "helicopter",
          "y": 83
        },
        {
          "x": "boat",
          "y": 101
        },
        {
          "x": "train",
          "y": 277
        },
        {
          "x": "subway",
          "y": 253
        },
        {
          "x": "bus",
          "y": 179
        },
        {
          "x": "car",
          "y": 292
        },
        {
          "x": "moto",
          "y": 113
        },
        {
          "x": "bicycle",
          "y": 34
        },
        {
          "x": "horse",
          "y": 41
        },
        {
          "x": "skateboard",
          "y": 27
        },
        {
          "x": "others",
          "y": 33
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(44, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 203
        },
        {
          "x": "helicopter",
          "y": 27
        },
        {
          "x": "boat",
          "y": 256
        },
        {
          "x": "train",
          "y": 121
        },
        {
          "x": "subway",
          "y": 180
        },
        {
          "x": "bus",
          "y": 89
        },
        {
          "x": "car",
          "y": 250
        },
        {
          "x": "moto",
          "y": 222
        },
        {
          "x": "bicycle",
          "y": 286
        },
        {
          "x": "horse",
          "y": 118
        },
        {
          "x": "skateboard",
          "y": 260
        },
        {
          "x": "others",
          "y": 131
        }
      ]
    }
  ]



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
=======
import { Container } from '@mantine/core';
import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <Container>
        <Text>Admin Dashboard</Text>
        <Text>Dashboard</Text>
      </Container>
    </div>
  )
>>>>>>> aeffc4a555f236ed85dc5bb14f8fe302802f7cbc
}

const Admin = () => {
    return (
        <Box mx={'sm'}>
            <Grid mt={'10vh'}>
                <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
                    <StatCard
                        stat={{
                            label: 'Total User',
                            color: 'cyan',
                            progress: 70,
                            stats: 7500
                        }}
                        Icon={IconUser}
                    />
                </GridCol>
                <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
                    <StatCard
                        stat={{
                            label: 'guest user',
                            color: 'yellow',
                            progress: 70,
                            stats: 7000
                        }}
                        Icon={IconUser}
                    />
                </GridCol>
                <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
                    <StatCard
                        stat={{
                            label: 'reistered user',
                            color: 'pink',
                            progress: 70,
                            stats: 500
                        }}
                        Icon={IconUser}
                    />
                </GridCol>
                <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
                    <StatCard
                        stat={{
                            label: 'New Users',
                            color: 'cyan',
                            progress: 70,
                            stats: 756
                        }}
                        Icon={IconUser}
                    />
                </GridCol>
            </Grid>
            <Grid>
                <GridCol span={{ base: 12, md: 6 }} h={'40vh'}>
                    <BarChart data={data} />
                </GridCol>
                <GridCol span={{ base: 12, md: 6 }} h={'40vh'}>
                    <PieChart data={data2} />
                </GridCol>
                <GridCol span={{ base: 12, md: 12 }} h={'40vh'}>
                    <LineChart data={data3} />
                </GridCol>
            </Grid>

        </Box>
    )
}

export default Admin