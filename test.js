const form = document.querySelector("form");
const name = document.getElementsByClassName("info")[0];
const email = document.getElementsByClassName("info2")[0];
const btn = document.getElementById("add");
const list = document.querySelector(".list");

form.addEventListener("submit", submitForm);

function getList() {
  let listed = localStorage.getItem("list");
  let str = JSON.stringify([]);
  if (listed === null) {
    localStorage.setItem("list", str);
    return;
  } else {
    listed = JSON.parse(listed);
    let lists = ``;
    listed.forEach((li) => {
      lists += `<li>${li.name} ${li.email}</li>`;
    });
    console.log(lists);
    list.innerHTML = lists;
  }
}

getList();

function submitForm(e) {
  e.preventDefault();
  let object = { name: name.value, email: email.value };
  let getList = localStorage.getItem("list");
  getList = JSON.parse(getList);
  getList.push(object);
  let str = JSON.stringify(getList);
  localStorage.setItem("list", str);
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>${name.value}</span> <span>${email.value}</span>`;
  list.appendChild(listItem);
}
