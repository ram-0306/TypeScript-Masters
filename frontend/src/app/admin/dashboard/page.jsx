'use client';
import { Box, Center, Grid, GridCol, Group, Paper, RingProgress, Text, rem } from '@mantine/core';


import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import { IconUser } from '@tabler/icons-react';

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 50%)`
}

const data = [
  {
    "country": "AD",
    "hot dog": 31,
    "hot dogColor": getRandomColor(),
  },
  {
    "country": "AE",
    "hot dog": 94,
    "hot dogColor": getRandomColor(),
  },
  {
    "country": "AF",
    "hot dog": 13,
    "hot dogColor": getRandomColor(),
  },
  {
    "country": "AG",
    "hot dog": 148,
    "hot dogColor": getRandomColor(),
  },
  {
    "country": "AI",
    "hot dog": 58,
    "hot dogColor": getRandomColor(),
  },
  {
    "country": "AL",
    "hot dog": 153,
    "hot dogColor": getRandomColor(),
  },
  {
    "country": "AM",
    "hot dog": 6,
    "hot dogColor": getRandomColor(),
  }
]
const data2 = [
  {
    "id": "go",
    "label": "go",
    "value": 392
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 564
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 420
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 468
  },
  {
    "id": "css",
    "label": "css",
    "value": 70
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
}

const Admin = () => {

  const [userList, setUserList] = useState([]);
  const [guideList, setGuideList] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [answerList, setAnswerList] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [barKeys, setBarKeys] = useState([]);

  const formatPieData = (data, key) => {
    const uniqueValues = getUniqueValues(data, key)
    const formattedData = uniqueValues.map(value => {
      const count = data.filter(item => item[key] === value).length
      return { id: value, label: value, value: count }
    })
    return formattedData
  }

  const getUniqueValues = (data, key) => {
    const uniqueValues = data.map(item => item[key])
    return [...new Set(uniqueValues)]
  }

  function formatDataForBarChart(users) {
    // Create an empty object to store the counts
    console.log(new Date(users[0].createdAt));
    const counts = {};
    const DateKeys = users.map(user => new Date(user.createdAt).toISOString().split('T')[0]);
  
    // Iterate over the array of users
    for (let user of users) {
      // Convert the registration date to a string in the format 'yyyy-mm-dd'
      const date = new Date(user.createdAt).toISOString().split('T')[0];
  
      // If this date is not already a property in the counts object, add it with a value of 1
      // If it is already a property, increment its value
      counts[date] = (counts[date] || 0) + 1;
    }
  
    // Convert the counts object to an array of objects in the format needed for the bar chart
    const data = Object.entries(counts).map(([date, value]) => ({
      id: date,
      label: date,
      value: value,
    }));
  
    return [data, DateKeys];
  }

  const fetchUsersData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getall`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUserList(data)
        const [formattedData, datekeys] = formatDataForBarChart(data);
        console.log(datekeys);
        setBarData(formatDataForBarChart(formattedData));
        setBarKeys(datekeys);
        // console.log(formattedData);
      })
      .catch(err => console.log(err))
  }

  const fetchguidesData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/guide/getall`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setGuideList(data)
        setPieData(formatPieData(data, 'category'));
      })
      .catch(err => console.log(err))
  }

  const fetchQuestionData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/question/getall`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setQuestionList(data)
      })
      .catch(err => console.log(err))
  }

  const fetchAnswerData = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/answer/getall`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAnswerList(data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchUsersData()
    fetchguidesData()
    fetchQuestionData()
    fetchAnswerData()
  }, [])


  return (
    <Box mx={'sm'}>
      <Grid mt={'10vh'}>
        <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
          <StatCard
            stat={{
              label: 'Total User',
              color: 'cyan',
              progress: 70,
              stats: userList.length
            }}
            Icon={IconUser}
          />
        </GridCol>
        <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
          <StatCard
            stat={{
              label: 'Total Guides',
              color: 'yellow',
              progress: 70,
              stats: guideList.length
            }}
            Icon={IconUser}
          />
        </GridCol>
        <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
          <StatCard
            stat={{
              label: 'Total Question Asked',
              color: 'pink',
              progress: 70,
              stats: questionList.length
            }}
            Icon={IconUser}
          />
        </GridCol>
        <GridCol span={{ base: 12, md: 6, xl: 3 }} h={'15vh'}>
          <StatCard
            stat={{
              label: 'Total Question Answered',
              color: 'cyan',
              progress: 70,
              stats: answerList.length
            }}
            Icon={IconUser}
          />
        </GridCol>
      </Grid>
      <Grid>
        <GridCol span={{ base: 12, md: 6 }} h={'40vh'}>
          <BarChart data={barData} keys={barKeys} />
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }} h={'40vh'}>
          <PieChart data={pieData} />
        </GridCol>
        <GridCol span={{ base: 12, md: 12 }} h={'40vh'}>
          <LineChart data={data3} />
        </GridCol>
      </Grid>

    </Box>
  )
}

export default Admin;