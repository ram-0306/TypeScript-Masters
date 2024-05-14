const fs = require('fs');
const ts = require('typescript');

 function convertJsToTs(jsCode) {
   // Add a newline at the end to ensure last line is parsed
  const jsCodeWithNewline = jsCode + "\n";

   const result = ts.transpileModule(jsCodeWithNewline, {
     compilerOptions: {
       allowJs: true, // Allow JavaScript code
       declaration: true, // Generate .d.ts file (optional)
       emitDeclarationOnly: true // Only emit .d.ts file (optional)
     }
   });

  return result.outputText.trim(); // Trim any leading or trailing whitespace
 }





function convertTsToJs(tsCode) {
    // const fileContents = ts.sys.readFile(tsFilePath);
    const result = ts.transpileModule(tsCode, {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS, // Adjust module type as needed
            target: ts.ScriptTarget.ES2015,   // Adjust target ECMAScript version
            sourceMap: false                 // Optional: Generate source maps
        }
    });

    // ts.sys.writeFile(outputFilePath, result.outputText);
    return result.outputText;
}

// let result = convertTsToJs(`const x:Number = 10;`) // Returns `const x: number = 10;`
// console.log(result);

module.exports = { convertJsToTs, convertTsToJs };