import * as readline from 'readline';
const { performance } = require('perf_hooks');

module.exports = {
    alphanumeric, reverseString, flipCase
}

function alphanumeric(str: string)
{
    // use a regular expression to check the string
    var alphaNumRegex = /^[0-9a-zA-Z]+$/;
    if(str.match(alphaNumRegex)) 
        return true;
    else 
        return false; 
}

  function reverseString(str : string) 
  {
    // iterate through the string backwards
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--)
        reversed += str[i];
    return reversed;
  }


function flipCase(str: string)
{
    var flipped = '';
    for (var i = 0; i < str.length; i++) 
    {
        var c = str.charAt(i);
        if (c == c.toUpperCase())
            c = c.toLowerCase();
        else
            c = c.toUpperCase();
        flipped += c;
    }
    return flipped;
}

function writeToFile(input : string, output : string, time: number)
{
    const fs = require('fs');

    // create a JSON object
    const obj = {
        "input": input,
        "output": output,
        "duration": time
    };

    // convert JSON object to string
    const data = JSON.stringify(obj);

    // write JSON string to a file
    fs.writeFileSync('processed.json', data, (err: any) => {
        if (err) {
            throw err;
        }
    });
}

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nPlease, enter an alphanumeric string: ', (answer) => {
    if(!alphanumeric(answer))
    {
        console.log("Invalid input !")      
    }
    else
    {
        const startTime = performance.now();
        const output = flipCase(reverseString(answer));
        const endTime = performance.now();
        const time = endTime - startTime;
        console.log("\n Output string: " + output);
        console.log("\n The algorithm was completed in " + time + " ms.\n");
        writeToFile(answer, output, time);
    }
  
  rl.close();
});