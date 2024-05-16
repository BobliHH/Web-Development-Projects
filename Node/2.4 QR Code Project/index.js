/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// let qr = require("qr-image");

// const fs = require("fs");

inquirer
  .prompt([{ message: "What is the link?", name: "URL" }])

  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("first_qr.png"));
    fs.writeFile("url_list.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
