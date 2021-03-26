
let inputFile = content = newContent = download = subtitleContent = null;

const createFile = () => {
  let file = new File([subtitleContent], "newSubtitle.srt", {
    type: "text/plain",
  })
  console.log(file);
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
    console.log(reader.result);
    const data = reader.result;
    content.innerHTML = data;
    subtitleContent = newContent.innerHTML = cleanSubtitle(data); 
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