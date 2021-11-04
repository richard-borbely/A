"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var performance = require('perf_hooks').performance;
module.exports = {
    alphanumeric: alphanumeric,
    reverseString: reverseString,
    flipCase: flipCase
};
function alphanumeric(str) {
    // use a regular expression to check the string
    var alphaNumRegex = /^[0-9a-zA-Z]+$/;
    if (str.match(alphaNumRegex))
        return true;
    else
        return false;
}
function reverseString(str) {
    // iterate through the string backwards
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--)
        reversed += str[i];
    return reversed;
}
function flipCase(str) {
    var flipped = '';
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (c == c.toUpperCase())
            c = c.toLowerCase();
        else
            c = c.toUpperCase();
        flipped += c;
    }
    return flipped;
}
function writeToFile(input, output, time) {
    var fs = require('fs');
    // create a JSON object
    var obj = {
        "input": input,
        "output": output,
        "duration": time
    };
    // convert JSON object to string
    var data = JSON.stringify(obj);
    // write JSON string to a file
    fs.writeFileSync('processed.json', data, function (err) {
        if (err) {
            throw err;
        }
    });
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('\nPlease, enter an alphanumeric string: ', function (answer) {
    if (!alphanumeric(answer)) {
        console.log("Invalid input !");
    }
    else {
        var startTime = performance.now();
        var output = flipCase(reverseString(answer));
        var endTime = performance.now();
        var time = endTime - startTime;
        console.log("\n Output string: " + output);
        console.log("\n The algorithm was completed in " + time + " ms.\n");
        writeToFile(answer, output, time);
    }
    rl.close();
});
