'use client';
import { Button, Container, Grid, NativeSelect, Text, Title } from '@mantine/core'
import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import classes from './page.module.css'

const Playground = () => {


    const [inputCode, setInputCode] = useState('');
    const [outputCode, setOutputCode] = useState('');

    const [inputLanguage, setInputLanguage] = useState('TypeScript');
    const [outputLanguage, setOutputLanguage] = useState('JavaScript');



    const executeConversion = () => {
        console.log(inputCode, inputLanguage, outputLanguage);
        if (inputLanguage === 'TypeScript' && outputLanguage === 'JavaScript') {
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

        } else if (inputLanguage === 'JavaScript' && outputLanguage === 'TypeScript') {
            fetch('http://localhost:5000/playground/js-to-ts', {
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
        <div className={classes.bg}  height='100vh'>
            <Container  >
                <Title order={1} size="h1" ta={'center'}>TypeScript Playground</Title>


                <Grid>

                    <Grid.Col span={{ md: 6 }}>

                        <NativeSelect value={inputLanguage} onChange={e => setInputLanguage(e.target.value)} radius="md" label="Language" description="Select language" data={['JavaScript', 'TypeScript']} mb={30} />
                        <Editor language={inputLanguage.toLowerCase()} theme="vs-dark" height={'60vh'} value={inputCode} onChange={setInputCode}  />

                    </Grid.Col>

                    <Grid.Col span={{ md: 6 }}>

                        <NativeSelect value={outputLanguage} onChange={e => setOutputLanguage(e.target.value)} radius="md" label="Language" description="Select language" data={['JavaScript', 'TypeScript']} mb={30} />
                        <Editor language={outputLanguage.toLowerCase()} theme='vs-dark' height={'60vh'} value={outputCode} onChange={setOutputCode} />

                    </Grid.Col>

                </Grid>

                <Button variant="filled" mt={20} id='convert-button' onClick={executeConversion}>Convert</Button>


            </Container>
        </div>
    )
}

export default Playground;