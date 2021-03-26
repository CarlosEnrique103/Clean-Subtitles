
let inputFile = textarea = download = null;

const loadData = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    console.log(reader.result);
    textarea.innerHTML = reader.result; 
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
  textarea = document.querySelector(".content");
  download = document.querySelector(".button-download");
  listeners();
}

init();