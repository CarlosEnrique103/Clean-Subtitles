
let inputFile = content = newContent = download = null;

const cleanSubtitle = (data) => {

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
  return newArr.join("").trim();
}




const loadData = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    console.log(reader.result);
    const data = reader.result;
    content.innerHTML = data;
    newContent.innerHTML = cleanSubtitle(data); 
  }
  reader.readAsBinaryString(file);
}

const listeners = () => {
  inputFile.addEventListener('change', (e) => {
    loadData(e);
  })
}

const init = () => {
  inputFile = document.querySelector(".input-file");
  content = document.querySelector(".content");
  newContent = document.querySelector(".new-content");
  download = document.querySelector(".button-download");
  listeners();
}

init();