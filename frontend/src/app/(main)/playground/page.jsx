'use client';
import { Container, Grid } from '@mantine/core'
import {Editor} from '@monaco-editor/react'
import React from 'react'

const Playground = () => {
  return (
    <div>



      <Grid>

        <Grid.Col span={{md: 6}}>
          <Editor defaultLanguage='javascript' language='javascript' theme='vs-dark' height={'520vh'}/>

        </Grid.Col>
        <Grid.Col span={{md: 6}}>


        </Grid.Col>
      </Grid>
      

    </div>
  )
}

export default Playground