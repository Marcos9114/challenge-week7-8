const dropArea = document.querySelector(".agregar-producto__arrastre");
const dragText = document.querySelector(".p-img");
const button = document.querySelector("#boton-buscar");
const input = dropArea.querySelector("#input-file");
let files;

button.addEventListener("click", (e) => {
  input.click();
});

input.addEventListener("change", (e) => {
  files = this.files;
  dropArea.classList.add("active");
  showFiles(files);
  dropArea.classList.remove("active");
});

//mientras tenemos elemento que se está arrastrando se activa
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = "Suelta para subir los archivos";
});
//mientras tenemos elemento que se estan arrastrando pero estemos afuera de la zona
dropArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra y suelta imagenes";
});
//cuando soltamos los archivos en la zona
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  files = e.dataTransfer.files; //being dragged during a drag and drop operation
  showFiles(files);
  dropArea.classList.remove("active");
  dragText.textContent = "Arrastra y suelta imagenes";
});

//funcion para ver la cantidad de archivos que ingreso, si son muchos, los guardo como un array de files
const showFiles = (files) => {
  if (files.length === undefined) {
    processFile(files);
  } else {
    for (const file of files) {
      processFile(file);
    }
  }
};

const processFile = (file) => {
  const docType = file.type;
  console.log(docType);
  const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  if (validExtensions.includes(docType)) {
    //archivo valido
    const fileReader = new FileReader();
    const id = `file-${Math.random().toString(32).substring(7)}`;

    fileReader.addEventListener("load", (e) => {
      const fileUrl = file.result;
      const image = `
                <div id=${id} class="file-container">
                    <img src=${fileUrl} alt=${file.name} width=50px>
                    <div class="status">
                        <span>${file.name}</span>   
                        <span class="status-text">
                        Loading...
                        </span>
                    </div>
                </div>
            `;
            const html = document.querySelector("#preview").innerHTML;
            document.querySelector("#preview").innerHTML = image + html; //html = image + html
    });
    fileReader.readAsDataURL(file);



  } else {
    //archivo nop valido
    alert("no es un archivo válido");
  }
};
