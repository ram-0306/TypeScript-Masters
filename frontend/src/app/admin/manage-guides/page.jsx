'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, Container, Flex, Title, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { IconEdit, IconNote, IconPlus, IconTrash } from '@tabler/icons-react';

const ManageGuides = () => {

  const router = useRouter();
  const [guidesList, setGuidesList] = useState([]);

  const createGuide = () => {
    fetch('http://localhost:5000/guide/add', {
      method: 'POST'
    })
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              router.push('/admin/create-guide/' + result._id)
            })
        }
      }).catch((err) => {

      });
  }

  const fetchGuidesData = () => {
    fetch('http://localhost:5000/guide/getall')
      .then((response) => {
        if (response.status === 200) {
          response.json()
            .then((result) => {
              console.log(result);
              setGuidesList(result);
            })
        }
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchGuidesData();
  }, [])

  const displayGuides = () => {
    return guidesList.map(guide => (
      <Card shadow="sm" padding="lg" radius="md" withBorder >


        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{guide.title}</Text>
          <Text fw={500}>{guide.subtitle}</Text>
          <ActionIcon onClick={() => deleteGuide(guide._id)} color='red'>
            <IconTrash />
          </ActionIcon>
          <ActionIcon component={Link} href={'/admin/create-guide/' + guide._id} color='cyan'>
            <IconEdit />
          </ActionIcon>
        </Group>
      </Card>
    ))
  }

  const deleteGuide = (id) => {
    fetch('http://localhost:5000/guide/delete/' + id, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.status === 200) {
          fetchGuidesData();
        }
      }).catch((err) => {
        console.log(err);
      });
  }


  return (
    <div>
      <Container>
        <Flex justify={'space-between'} align={'center'}>

          <h1>TypeScript Guides</h1>

          <Button justify="center" leftSection={<IconPlus />} variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            onClick={() => createGuide()}
          >
            New Guide
          </Button>
        </Flex>

        <SimpleGrid cols={4}>

          {/* <Card shadow="sm" padding="lg" radius="md" withBorder onClick={createGuide}>
            <Card.Section>
              <Flex justify={'center'} align={'center'} direction={'column'}>

                <IconPlus size={100} />
                <Title order={6}>New Guide</Title>
              </Flex>
            </Card.Section>
          </Card> */}
          {
            displayGuides()
          }
        </SimpleGrid>


      </Container>
    </div>
  )
}

export default ManageGuides;