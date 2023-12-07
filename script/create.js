const displaySchedule = document.querySelector(".display");

//////////////////// createSchedule function ///////////////
const createSchedule = (item) => {
  const html = `
      <div class=" dlite  justify-content-around align-content-center pt-5 col-4  small">
        <div
            class=" col-md-4 edit col-lg-4  rounded-top shadow text-center text-light pt-1 pb-1"
            style="background-color: #6664c2"
          >          
            ${item.time_manager_title}
        </div>
        <div class=" line col-md-4 col-lg-4  bg-light rounded-bottom shadow text-center small pt-2 pb-2" >
            ${item.time_manager_message}
        </div>
        <div class="container">
        <div class="row" style="width: 150px; display: flex">
          <div class="col-3">
            <button
              class="clear btn btn-danger mx-sm-5 mx-md-2 my-1 small fw-bold"
              onClick="clearBtn(${item.id})"
            >
              Delete
            </button>
          </div>
          <div class="col-5 my-1" style="margin-left: 38px">
           <a
           >
           <button class="btn btn-success col mx-sm-5 mx-md-2 small fw-bold">                   
              Edit
            </button> </a>
          </div>
        </div>
      </div>      
      </div>
`;

  displaySchedule.insertAdjacentHTML("beforeEnd", html);
};

////////////////// createTodosStorage function /////////////////

const createTodosStorage = () => {
  const item = localStorage.getItem("todos");
  if (!item) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
};

////////////////// createNewSchedule function /////////////////

const createNewSchedule = () => {
  createTodosStorage();

  const todos = localStorage.getItem("todos");
  JSON.parse(todos).forEach((item) => {
    createSchedule(item);
  });
};
createNewSchedule();

///////////////// ClearBtn function /////////////////////////

const clear = document.querySelector(".clear");
const todos = localStorage.getItem("todos");

const clearBtn = (id) => {
  console.log(id);
  let getItem = JSON.parse(todos);
  deleteBtn = getItem.filter((item) => item.id !== id);
  localStorage.setItem("todos", JSON.stringify(deleteBtn));
  clearHtml();
  location.reload();
};

///////// ClearHtml function /////
const deleteHtml = document.querySelectorAll(".dlite");
console.log(deleteHtml.length);

const clearHtml = () => {
  deleteHtml.forEach((deleteElement, index) => {
    deleteElement.addEventListener("click", () => {
      console.log(x);
      if (index < deleteHtml.length) {
        deleteHtml[index].innerHTML = "";
      }
    });
  });
};
/////////////////////////////////

const edit = document.querySelectorAll(".edit");
console.log(edit.value);
edit.forEach((x) => {
  x.addEventListener("click", () => {
    console.log("edit");
  });
});
