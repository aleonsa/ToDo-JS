'use strict';
const btn = document.getElementById("addTodo");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const alert = document.getElementById("alert");
const table = document.getElementById("table");
const id = 1;


function addTodo() {
    if(title.value === "" || desc.value === ""){
        alert.classList.remove("d-none");
        return;
    } 
    alert.classList.add("d-none");
    const row = table.insertRow();
    //row.setAttribute('id', id++);
    row.innerHTML = `
        <tr>
            <td>${title.value}</td>
            <td>${desc.value}</td>
            <td>
                <input class="form-check-input" type="checkbox">
                <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
                <button type="button" class="btn btn-primary"><i class="fas fa-pen"></i></button>
            </td>
        </tr>
        `;

}


btn.addEventListener('click', () => {
    addTodo();
});