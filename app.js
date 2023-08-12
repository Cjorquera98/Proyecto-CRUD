const itemList = document.getElementById("itemList");

window.onload = function () {
  loadItems();
};

function loadItems() {
  itemList.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));

    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = item.nombre;

    const tdEdad = document.createElement("td");
    tdEdad.textContent = item.edad;

    const tdDireccion = document.createElement("td");
    tdDireccion.textContent = item.direccion;

    const tdActions = document.createElement("td");

    const editarButton = document.createElement("button");
    editarButton.textContent = "Editar";
    editarButton.onclick = function () {
      editItem(key, item);
    };

    const borrarButton = document.createElement("button");
    borrarButton.textContent = "Borrar";
    borrarButton.onclick = function () {
      deleteItem(key);
    };

    tdActions.appendChild(editarButton);
    tdActions.appendChild(borrarButton);

    tr.appendChild(tdNombre);
    tr.appendChild(tdEdad);
    tr.appendChild(tdDireccion);
    tr.appendChild(tdActions);

    itemList.appendChild(tr);
  }
}
