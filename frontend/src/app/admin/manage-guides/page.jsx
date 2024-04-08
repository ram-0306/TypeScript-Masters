'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, Container } from '@mantine/core';
import Link from 'next/link';

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
      <Card component={Link} href={'/admin/create-guide/' + guide._id} shadow="sm" padding="lg" radius="md" withBorder >
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{guide.title}</Text>
          <Text fw={500}>{guide.subtitle}</Text>
        
        </Group>
      </Card>
    ))
  }


  return (
    <div>
      <Container>
        <h1 >TypeScript Guides</h1>

        <SimpleGrid cols={3}>
          <Card shadow="sm" padding="lg" radius="md" withBorder onClick={createGuide}>
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>
          </Card>
          {
            displayGuides()
          }
        </SimpleGrid>


      </Container>
    </div>
  )
}

export default ManageGuides;