
const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskType = document.getElementById("taskType");


addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const type = taskType.value;

  if (taskText === "") {
    alert("กรุณากรอกข้อความในรายการ");
    return;
  }

  const listItem = document.createElement("li");
  const taskImage = document.createElement("img");
  const deleteButton = document.createElement("button");

  
  taskImage.src = getTaskImage(type);
  taskImage.alt = type;
  taskImage.classList.add("task-image");

  
  const taskDescription = document.createElement("span");
  taskDescription.textContent = taskText;

  
  deleteButton.textContent = "ลบ";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    const confirmDelete = confirm("คุณต้องการลบรายการนี้หรือไม่?");
    if (confirmDelete) {
      listItem.remove();
    }
  });


  listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
  });

 
  listItem.appendChild(taskImage);
  listItem.appendChild(taskDescription);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  
  taskInput.value = "";
});


function getTaskImage(type) {
  switch (type) {
    case "work":
      return "https://via.placeholder.com/30x30/3498db/ffffff?text=W"; 
    case "personal":
      return "https://via.placeholder.com/30x30/e74c3c/ffffff?text=P"; 
    case "study":
      return "https://via.placeholder.com/30x30/2ecc71/ffffff?text=S"; 
    default:
      return "https://via.placeholder.com/30x30/95a5a6/ffffff?text=O"; 
  }
}
