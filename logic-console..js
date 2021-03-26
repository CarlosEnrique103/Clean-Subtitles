const fs = require('fs');
const http = require('http');
const name = "prueba.srt";
const path = `./${name}`;
try {
    // read contents of the file
    const data = fs.readFileSync(path, 'UTF-8');

    let text = data.split(/\n/g);
    // split the contents by new line
    // let space = /\s/g;
    // let text = data.replace(space, "");
    // console.log(text);
    let newData = text.filter(line => line.length !== 1);
    let arr = [];
    for (let i = 0; i < newData.length; i++) {
      if(!(newData[i] === newData[i + 1])){
        arr.push(newData[i]);
      }
    }
    let newArr = arr.map((item) => {
      if(+item){
        return `\n\n${item}`;
      } else {
        return item;
      }
    });
    console.log(newArr);
    fs.writeFile(path, newArr.join("").trim(), err => {
      if(err) {
        return;
      }
    })
} catch (err) {
    console.error(err);
}