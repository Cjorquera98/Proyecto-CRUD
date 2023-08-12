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

function addItem() {
  const newItemNombre = document.getElementById("newItemNombre").value;
  const newItemEdad = document.getElementById("newItemEdad").value;
  const newItemDireccion = document.getElementById("newItemDireccion").value;

  if (newItemNombre && newItemEdad && newItemDireccion) {
    const key = Date.now().toString();
    const newItem = { nombre: newItemNombre, edad: newItemEdad, direccion: newItemDireccion };
    localStorage.setItem(key, JSON.stringify(newItem));
    loadItems();
    document.getElementById("newItemNombre").value = "";
    document.getElementById("newItemEdad").value = "";
    document.getElementById("newItemDireccion").value = "";
  }
}


function editItem(key, item) {
  const newNombre = prompt("Ingrese nuevo nombre:", item.nombre);
  const newEdad = prompt("Ingrese nueva edad:", item.edad);
  const newDireccion = prompt("Ingrese nueva direccion:", item.direccion);

  if (newNombre && newEdad && newDireccion) {
    item.nombre = newNombre;
    item.edad = newEdad;
    item.direccion = newDireccion;
    localStorage.setItem(key, JSON.stringify(item));
    loadItems();
  }
}

function deleteItem(key) {
  localStorage.removeItem(key);
  loadItems();
}




