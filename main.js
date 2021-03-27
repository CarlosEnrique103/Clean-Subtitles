
let fileName = inputFile = content = newContent = download = subtitleContent = null;

const createFile = () => {
  // let file = new File([subtitleContent], "newSubtitle.srt", {
  //   type: "text/plain",
  // })
  // console.log(file);
  // const reader = new FileReader();
  // reader.onloadend = () => {
  //   console.log(reader.result);
  // }
  // reader.readAsBinaryString(file);
  let btn = document.createElement("a");
  btn.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(subtitleContent)}`);
  btn.setAttribute("download", fileName);
  btn.style.display = "none";
  document.body.appendChild(btn);
  btn.click();
  document.body.removeChild(btn);
}

const cleanSubtitle = (data) => {
  let text = data.split(/\n/g);
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
    const data = reader.result;
    content.innerHTML = data;
    subtitleContent = newContent.innerHTML = cleanSubtitle(data);
    fileName = file.name; 
  }
  reader.readAsBinaryString(file);
}

const listeners = () => {
  inputFile.addEventListener('change', (e) => {
    loadData(e);
  })
  download.addEventListener('click', () => {
    createFile()
  })
}

const init = () => {
  inputFile = document.querySelector(".input-file");
  content = document.querySelector(".content");
  newContent = document.querySelector(".new-content");
  download = document.querySelector(".btn-download");
  listeners();
}

init();