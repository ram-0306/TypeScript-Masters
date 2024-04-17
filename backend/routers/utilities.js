const fs = require('fs');
const ts = require('typescript');

function convertJsToTs(jsCode) {
    const tsFilename = 'temp.ts'; // Temporary filename for conversion
    fs.writeFileSync(tsFilename, jsCode); // Write JS code to temporary file

    const output = require('child_process').execSync(`tsc ${tsFilename}`); // Execute tsc
    // fs.unlinkSync(tsFilename); // Delete temporary file

    return output.toString(); // Return converted TypeScript code
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