'use client';
import { Box, Button, Card, Container, Flex, Group, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const QuesAndAns = () => {

  const [questionList, setQuestionList] = useState([]);

  const fetchQuestions = () => {
    fetch('http://localhost:5000/question/getall')
      .then(response => response.json())
      .then(data => setQuestionList(data))
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  const displayQuestions = () => {
    return questionList.map((question, index) => (

      <Card key={index} shadow='lg'>
        <Flex p={20} shadow="md" radius="md" justify={'space-between'}>
          <Group>
            <Title order={3}>{question.title}</Title>
            <Text size='sm'>{question.description}</Text>
          </Group>
          <Group>
          <Button component={Link} href={'/view-question/' + question._id}>View Question</Button>
          </Group>
        </Flex>

      </Card>

    ))
  }

  return (
    <div>
      <Container>
        <Flex justify="space-between" my={30} >
          <Title
            order={1}
            fw={900}
          >Questions and Answers</Title>
          <Button component={Link} href={'/user/post-question'}>Ask Question</Button>
        </Flex>

        {displayQuestions()}

      </Container>
    </div>

  )
}

export default QuesAndAns;