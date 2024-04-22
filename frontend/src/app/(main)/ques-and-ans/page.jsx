'use client';
import { Button, Card } from '@mantine/core';
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
      <Card key={index}>
        <h3>{question.title}</h3>
        <p>{question.description}</p>
        <Button component={Link} href={'/view-question/'+question._id}>View Question</Button>
      </Card>
    ))
  }

  return (
    <div>
      <h1>Questions and Answers</h1>
      {displayQuestions()}
    </div>
  )
}

export default QuesAndAns