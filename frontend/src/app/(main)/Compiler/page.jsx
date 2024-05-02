'use client'
import React from 'react'
import { Editor } from '@monaco-editor/react'
import { Button, Container, rem } from '@mantine/core'

const CodeCompiler = () => {
    return (
        <div>
            <Container mt={100}>
                <Editor language='TypeScript' height={'50vh'} />
                <Button mt={40} style={{ marginLeft: rem(20) }}>Compile Code</Button>
            </Container>
        </div>
    )
}

export default CodeCompiler