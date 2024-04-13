// 'use client';
// import { Button, Container, Grid, NativeSelect, Text, Title } from '@mantine/core'
// import {Editor} from '@monaco-editor/react'
// import React from 'react'

// const Playground = () => {

//   const editor = new EditorJS({
//     holder: document.getElementById('editorjs'),
//     tools: ['code'] // Assuming you only need code block conversion
// });
   
//   document.getElementById('convert-button').addEventListener('click', () => {
//     editor.saver.save()
//         .then(savedData => {
//             const jsCode = savedData.blocks.find(block => block.type === 'code').data.text;
//             const tsCode = convertJsToTs(jsCode); // Call conversion function

//             // Display the converted code (see options below)
//             displayConvertedCode(tsCode);
//         })
//         .catch(error => {
//             console.error('Error saving Editor.js content:', error);
//         });
// });

// function convertJsToTs(jsCode) {
//   const tsFilename = 'temp.ts'; // Temporary filename for conversion
//   fs.writeFileSync(tsFilename, jsCode); // Write JS code to temporary file

//   const output = require('child_process').execSync(`tsc ${tsFilename}`); // Execute tsc
//   fs.unlinkSync(tsFilename); // Delete temporary file

//   return output.toString(); // Return converted TypeScript code
// }


// function displayConvertedCode(tsCode) {
//   alert(tsCode);
// }


// function displayConvertedCode(tsCode) {
//   document.getElementById('ts-code-display').textContent = tsCode;
// }


//   return (
//     <div>
//     <Container>
//     <Title order={1}  size="h1" my={30} ta={'center'}>TypeScript Playground</Title>
      
       
//       <Grid>

//         <Grid.Col span={{md: 6}}>

//         <NativeSelect radius="md" label="Language" description="Select language" data={['Javascript', 'TypeScript', 'Python']} mb={30} />
//           <Editor defaultLanguage='javascript' language='javascript' theme='vs-dark' height={'50vh'}/>

//         </Grid.Col>

//         <Grid.Col span={{md: 6}}>

//         <NativeSelect radius="md" label="Language" description="Select language" data={['Javascript', 'Java', 'TypeScript']} mb={30} />
//           <Editor id="ts-code-display" defaultLanguage='typescript' language='javascript' theme='vs-dark' height={'50vh'}/>

//         </Grid.Col>

//       </Grid>

//       <Button variant="filled" mt={20} id='convert-button'>Convert</Button>

      
//    </Container>
//     </div>
//   )
// }

// export default Playground;