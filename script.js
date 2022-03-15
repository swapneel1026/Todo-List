// adding item and date
let addTaskHandler = () => {
  let newtaskName = document.getElementById("input-text").value;
  let newtaskDate = document.getElementById("input-date").value;
  // display output
  let newListItem = document.createElement("li");
  newListItem.innerHTML = `<span > ${newtaskName}</span> <span >  ${newtaskDate}</span> <button id="btn1"  onclick="editItems(event)">Edit</button> <button id="btn2"  onclick="deleteItems(event)">Delete</button>  `;
  if (newtaskName !== "" && newtaskDate !== "") {
    document.getElementById("task-list").appendChild(newListItem);

    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("main").style.opacity = "0";
    document.getElementById("main").style.transition = "all 0.3s ease";

    // taskbox.style.transition = "all 0.1s ease";

    if (document.getElementsByTagName("li").length > 7) {
      let scrollItems = document.getElementById("task-list");
      scrollItems.style.overflow = "hidden";
      scrollItems.style.overflowY = "auto";
    }
  } else if (newtaskName !== "") {
    alert("Date cant be empty");
  } else if (newtaskDate !== "") {
    alert("Task cant be empty");
  } else {
    alert("Fill all the Feilds");
  }
};
// delete function
function deleteItems(event) {
  let Itemtobedeleted = event.target.parentNode;

  Itemtobedeleted.remove();
}
//edit function
function editItems(event) {
  let Itemtobeedited = event.target.parentNode;
  let currentItemName = Itemtobeedited.children[0];
  let currentItemDate = Itemtobeedited.children[1];
  currentItemName.style.display = "none";
  currentItemDate.style.display = "none";

  Itemtobeedited.innerHTML = `<input id="edited-input-text" type="text" placeholder=${currentItemName.innerText}></input> <input id="edited-input-date" type="date" placeholder=${currentItemDate.innerText}></input> <button id="save-btn"  onclick="saveItems(event)">Save</button> <button id="save-btn" onclick="deleteItems(event)">Delete</button>  `;
}
//save function
function saveItems(event) {
  let savetaskName = document.getElementById("edited-input-text").value;
  let savetaskDate = document.getElementById("edited-input-date").value;
  let Itemtobesaved = event.target.parentNode;
  Itemtobesaved.innerHTML = `<span> ${savetaskName}</span> <span> ${savetaskDate}</span> <button id="btn1" onclick="editItems(event)">Edit</button> <button id="btn2" onclick="deleteItems(event)">Delete</button>  `;
}
function openTaskBox() {
  let taskbox = document.getElementById("main");
  if (taskbox.style.visibility !== "visible") {
    taskbox.style.visibility = "visible";
    taskbox.style.opacity = "1";
    taskbox.style.transition = "all 0.3s ease";
  } else {
    taskbox.style.visibility = "hidden";
    taskbox.style.opacity = "0";
    taskbox.style.transition = "all 0.3s ease";
  }
}
