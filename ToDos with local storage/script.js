console.log("hello");

const add = (e) => {
  e.preventDefault();

  let savedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  let todo = document.querySelector("#new-task");
  if (todo.value) {
    let obj = { task: todo.value, completed: false };
    savedTasks.push(obj);
    localStorage.setItem("Tasks", JSON.stringify(savedTasks));
    todo.value = "";
    populate();
  }
};

function populate() {
  const list = document.querySelector(".todo-list");
  list.innerHTML = "";

  const parsedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  parsedTasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML = `
      <input type="checkbox" id="task${index}" ${
      task.completed ? "checked" : ""
    }/>
      <span for="n" style="padding-right: 5px">${index + 1}.</span>
      <span for="n" class="${task.completed ? "completed" : ""}">${
      task.task
    }</span>
      <span class="delete">❌</span>
    `;

    li.querySelector(`#task${index}`).addEventListener("change", (e) => {
      task.completed = e.target.checked;
      localStorage.setItem("Tasks", JSON.stringify(parsedTasks));
      populate();
    });

    li.querySelector(".delete").addEventListener("click", () => {
      parsedTasks.splice(index, 1);
      localStorage.setItem("Tasks", JSON.stringify(parsedTasks));
      populate();
    });

    list.appendChild(li);
  });
//   events();
}

// function events() {
//   let checkboxes = document.querySelectorAll("input[type='checkbox']");
//   let deleteBtns = document.querySelectorAll(".delete");

//   checkboxes.forEach((box, index) => {
//     box.addEventListener("change", (e) => {
//       let isCheck = e.target.checked;
//       const parsedTasks = JSON.parse(localStorage.getItem("Tasks"));
//       parsedTasks[index].completed = isCheck;
//       localStorage.setItem("Tasks", JSON.stringify(parsedTasks));
//       populate();
//     });
//   });

//   deleteBtns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       const parsedTasks = JSON.parse(localStorage.getItem("Tasks"));
//       parsedTasks.splice(index, 1);
//       localStorage.setItem("Tasks", JSON.stringify(parsedTasks));
//       populate();
//     });
//   });
// }

const form = document.querySelector(".input-container");
form.addEventListener("submit", add);
populate();




// splice(start, deleteCount, item1)
