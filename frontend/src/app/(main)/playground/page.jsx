'use client';
import { Button, Container, Grid, NativeSelect, Text, Title } from '@mantine/core'
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'

const Playground = () => {


    const [inputCode, setInputCode] = useState('');
    const [outputCode, setOutputCode] = useState('');

    const [inputLanguage, setInputLanguage] = useState('TypeScript');
    const [outputLanguage, setOutputLanguage] = useState('JavaScript');


    function displayConvertedCode(tsCode) {
        alert(tsCode);
    }


    function displayConvertedCode(tsCode) {
        document.getElementById('ts-code-display').textContent = tsCode;
    }

    const executeConversion  = () => {
        console.log(inputCode, inputLanguage, outputLanguage);
        if(inputLanguage === 'TypeScript' && outputLanguage === 'JavaScript') {
            fetch('http://localhost:5000/playground/ts-to-js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: inputCode })
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    setOutputCode(data);
                })
                .catch(error => console.error(error));
        }
    }


    return (
        <div>
            <Container>
                <Title order={1} size="h1" my={30} ta={'center'}>TypeScript Playground</Title>


                <Grid>

                    <Grid.Col span={{ md: 6 }}>

                        <NativeSelect value={inputLanguage} onChange={e => setInputLanguage(e.target.value)} radius="md" label="Language" description="Select language" data={['Javascript', 'TypeScript', 'Python']} mb={30} />
                        <Editor  language={inputLanguage.toLowerCase()} theme='vs-dark' height={'50vh'} value={inputCode} onChange={setInputCode} />

                    </Grid.Col>

                    <Grid.Col span={{ md: 6 }}>

                        <NativeSelect value={outputLanguage} onChange={e => setOutputLanguage(e.target.value)} radius="md" label="Language" description="Select language" data={['Javascript', 'Java', 'TypeScript']} mb={30} />
                        <Editor  language={outputLanguage.toLowerCase()} theme='vs-dark' height={'50vh'} value={outputCode} onChange={setOutputCode} />

                    </Grid.Col>

                </Grid>

                <Button variant="filled" mt={20} id='convert-button' onClick={executeConversion}>Convert</Button>


            </Container>
        </div>
    )
}

export default Playground;