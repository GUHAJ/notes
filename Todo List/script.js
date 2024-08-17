// Seleksi element 
const btnSum = document.getElementById("sum");
const titleTask = document.getElementById("title-task");
const deskripsiTask = document.getElementById("deksripsi");
const containerList = document.getElementById("container-list-task");
const btnSend = document.getElementById("send");
const danger = document.querySelector(".danger");
const containerTask = document.getElementById("container-task")
// Menyimpan data array
let data = [];


btnSum.addEventListener("click", function () {
   containerList.classList.remove("hide")
});


// Function inputan data
const valueInput = () => {
   const inputTask = titleTask.value;
   const inputDeksripsi = deskripsiTask.value;

   // Input is empty
   if (inputTask === "" || inputDeksripsi === "") {
      // Alert
      alertDisplay("Value is empty!!!!", "hide");
      return false // mengembalikan nilai false jika inputan kosong
   } else {
      data.unshift({ task: inputTask, deksripsi: inputDeksripsi })
      return true // mengembalikan nilai true jika inputan tidak kosong
   }
};

// Function display data
function displayData() {
   containerTask.innerHTML = "";
   const id = new Date().getTime().toString()
   data.forEach((item) => {
      const list = document.createElement("div");
      list.innerHTML = `
         <h1>${item.task}</h1>
         <p>${item.deksripsi}</p>
         <button id="delete">Delete</button>
      `
      containerTask.append(list);
   });
   const deleteItem = document.getElementById("delete");
   deleteItem.addEventListener("click", deleteItems);
};


// Function delete data
function deleteItems(data) {
   const targetElement = data.
      console.log(targetElement)

}

// function send data
btnSend.addEventListener("click", function () {
   // not empty value input
   if (valueInput()) {
      displayData();
      containerList.classList.add("hide")
      titleTask.value = ""
      deskripsiTask.value = ""
   }
});


// Function Alert
function alertDisplay(text, content) {
   danger.textContent = text
   danger.classList.remove(`${content}`)

   // remove alert
   setTimeout(() => {
      danger.textContent = ""
      danger.classList.add(`${content}`)
   }, 1000);
};




