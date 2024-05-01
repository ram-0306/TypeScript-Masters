'use client';
import { Box, Button, Center, Container, Text, TextInput } from '@mantine/core';
import { useParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import ReactTimeAgo, { useTimeAgo } from 'react-time-ago'
import { date } from 'yup';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const result = useTimeAgo(parameters)

const ViewQuestion = () => {

  const { id } = useParams();

  const titleRef = useRef();
  const [answerList, setAnswerList] = useState([]);

  const [questionData, setQuestionData] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  )

  const fetchAnswers = () => {
    fetch(`http://localhost:5000/answer/getbyquestion/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAnswerList(data);
      })
  }

  const fetchQuestionDetails = () => {
    fetch(`http://localhost:5000/question/getbyid/${id}`)
      .then(response => response.json())
      .then(data => {
        setQuestionData(data);
        console.log(data);
      })
  }

  useEffect(() => {
    fetchQuestionDetails()
    fetchAnswers()
  }, [])

  const displayQuestionDetails = () => {
    if (questionData !== null) {
      return <div>
        <h1>{questionData.question}</h1>
        <p>{questionData.category}</p>
        <pre>{questionData.code}</pre>
      </div>
    } else {
      return <div>Loading...</div>
    }
  }

  const submitAnswer = () => {
    const answer = titleRef.current.value;
    const data = {
      user: currentUser._id,
      question: id,
      title: answer
    }
    fetch('http://localhost:5000/answer/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response.status);
        return response.json()
      })
      .then(data => {
        console.log(data)
        // fetchQuestionDetails();
        fetchAnswers();
      })
  }

  const answerForm = () => {
    if (currentUser !== null) {
      return <Box>
        <TextInput ref={titleRef} placeholder="Answer" />
        <Button onClick={submitAnswer} mt={20}>Submit Answer</Button>
      </Box>
    }
  }

  const displayAnswers = () => {
    return <Box>

      {/* <h3>Answer List</h3> */}
      {answerList.map((answer, index) => (
        <div key={index} >

          <h3>{answer.title}</h3>
          <Text size='md'>{answer.content}</Text>
          <ReactTimeAgo date={new Date(answer.createdAt)} locale="en-US" />

        </div>
      ))}

    </Box>
  }

  return (
    <div>

      <Container>
        {displayQuestionDetails()}

        {displayAnswers()}
        {answerForm()}
      </Container>
    </div>
  )
}

export default ViewQuestion