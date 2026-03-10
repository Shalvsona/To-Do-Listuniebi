const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("input");
const workList = document.querySelector(".work-list");

let works = [];

function renderWorks() {
  workList.innerHTML = "";
  works.forEach((work, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = work;
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttons");

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.classList.add("update");

    updateBtn.addEventListener("click", () => updateWork(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", () => deleteWork(index));
    buttonDiv.appendChild(updateBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);
    workList.appendChild(li);
  });
}

addBtn.addEventListener("click", () => {
  const newWork = input.value.trim();
  if (newWork === "") {
    alert("გთხოვთ ჩაწეროთ დავალების ტექსტი!");
    return;
  }
  works.push(newWork);
  input.value = "";
  renderWorks();
});

function updateWork(index) {
  const newName = prompt("ჩაწერე შენი დავალება", works[index]);

  if (newName && newName.trim() !== "") {
    works[index] = newName.trim();
    renderWorks();
  }
}

renderWorks();

function deleteWork(index) {
  works.splice(index, 1);
  renderWorks();
}
