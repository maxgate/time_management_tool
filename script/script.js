const schedule = document.getElementById("mov");
// const clear = document.querySelectorAll(".clear");

const createTodosStorage = () => {
  const item = localStorage.getItem("todos");
  if (!item) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
};

schedule.addEventListener("click", () => {
  createTodosStorage();

  const todos = localStorage.getItem("todos");
  const todoArray = JSON.parse(todos);
  const title = document.getElementById("exampleFormControlInput1").value;
  const note = document.querySelector(".note").value;
  const id = todoArray.length + 1;
  const newTodoArray = [
    ...todoArray,
    {
      id,
      time_manager_message: note,
      time_manager_title: title,
    },
  ];
  localStorage.setItem("todos", JSON.stringify(newTodoArray));

  window.location.href = "../index.html";
});

// clear.addEventListener("click", () => {
//   console.log("cleared");
// });
