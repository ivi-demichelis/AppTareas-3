var tareas = [
  // {
  //   Titulo: "Aprender JS",
  //   Estado: "pendiente",
  //   id: 0,
  // },
  // {
  //   Titulo: "Aprender CSS",
  //   Estado: "enProgreso",
  //   id: 1,
  // },
  // {
  //   Titulo: "Aprender HTML",
  //   Estado: "terminado",
  //   id: 2,
  // },
];

function $(elementoDeHtml) {
  return document.querySelector(elementoDeHtml);
}

window.addEventListener("load", () => {
 
  let $title = $("#title");
  const $titleEdit = $("#titleEdit");
  let $titleErrors = $("#titleErrors");
  let $EditError = $("#EditError");

  let $state = $("#state");
  let $stateErrors = $("#stateErrors");

  const $stateEdit = $("#stateEdit");
  const $stateErrorsEdit = $("#stateEditErrors");

  //MODAL
  const $openButton = $("#open-modal");
  const $containModal = $(".contain-modal");
  const $closeButton = $("#close-modal");


  //CONTENEDORES
  const $containTareas = $(".contain-tareas");
  const $containInProgress = $(".contain-inProgress");
  const $containPending = $(".contain-pending");
  const $containFinished = $(".contain-finished");
  const $modalForm = $(".form");

  //BODY * DARK-MODE
  const $body = $("body");
  const $btnDarkMode = $("#btn-darkmode");

  //CARDS VACÍAS
  const $pendientes = $(".pendientes");
  const $progreso = $(".progreso");
  const $terminadas = $(".terminadas");

  //EDITAR Y BORRAR
  const $btnEdit = $(".edit");
  
  

  //VENTANA MODAL
  $openButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.add("show-modal");
  });

  $closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.remove("show-modal");
  });


  // AGREGAR TAREAS
  function newTask(titulo, estado, id) {  
    
    const newCard = document.createElement("div")
           
    newCard.classList.add("card")
    
    newCard.innerHTML = `<p>Título: ${titulo}</p>
                          <p>Estado: ${estado}</p>                 
                          <button class="edit"><img src="assets/edit.png" alt="" class="card-icon"></button>
                          <button class="delete"><img src="assets/trash.png" alt="" class="card-icon"></button>`

    newCard.querySelector(".delete").addEventListener("click", () => {
      const tareasFiltradas= tareas.filter((tarea) => tarea.id != id);
      tareas=tareasFiltradas;
      updateNodes(tareas)
    })

    return newCard;
  }

  function updateNodes (tareas) {
    const $pendientes = $(".pendientes");
    const $progreso = $(".progreso");
    const $terminadas = $(".terminadas");

    $containPending.innerHTML = "";    
    $containInProgress.innerHTML = "";    
    $containFinished.innerHTML = "";

      
        
    tareas.forEach((tarea) => {
      
      if (tarea.Estado == "pendiente") {
        $containPending.appendChild(newTask(tarea.Titulo, "Pendiente", tarea.id))
      }
      if (tarea.Estado == "enProgreso") {        
        $containInProgress.appendChild(newTask(tarea.Titulo, "En progreso", tarea.id))
      }
      if (tarea.Estado == "terminado") {
        $containFinished.appendChild(newTask(tarea.Titulo, "Terminado", tarea.id))
      }    

    });
        
    
  }

  // 

  $modalForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    function newTask(titulo, estado, id) {  
      
      const newCard = document.createElement("div")
       
      newCard.classList.add("card")
      
      newCard.innerHTML = `<p>Título: ${titulo}</p>
                            <p>Estado: ${estado}</p>                 
                            <button class="edit"><img src="assets/edit.png" alt="" class="card-icon"></button>
                            <button class="delete"><img src="assets/trash.png" alt="" class="card-icon"></button>`
  
      return newCard;     
      
    } 



  
    if ($state.value !== "" && $title.value.length >= 5) {  
      tareas.push({Titulo: $title.value, Estado: $state.value, id: tareas.length})
          
     updateNodes(tareas)
    }else{
      alert ("El nombre de la tarea debe tener al menos 5 caracteres")
    }
    
      $title.value = ""  

    }
    
  )


  //// ORDEN ALFABETICO
 
    // newTask.sort(a, b)
    //   if (a.(newCard.Titulo) > b.(newCard.Titulo)) {
    //     return 1;
    //   }
    //   if (a.(newCard.Titulo) < b.(newCard.Titulo)) {
    //     return -1;
    //   }
      




  //// FILTROS

  const tareasPendientes = tareas.filter((elem) => elem.Estado === "Pendiente");
  const tareasEnProgreso = tareas.filter((elem) => elem.Estado === "En progreso");
  const tareasTerminadas = tareas.filter((elem) => elem.Estado === "Terminado");

  

  //// MODO OSCURO

  $btnDarkMode.addEventListener("click", () => {
    $body.classList.toggle("btn-darkmode");
    if ($body.classList.contains("btn-darkmode")) {
      $btnDarkMode.innerText = "☀";
    } else {
      $btnDarkMode.innerText = "🌚";
    }
  });

  


///// BOTON "BORRAR"

 $btnDelete.addEventListener("click", () => {
  const $btnDelete = document.querySelectorAll(".delete");
    const tareasFiltradas = tareas.filter((tarea) => tarea.id != 0);
    tareas = tareasFiltradas
    updateNodes(tareas) 

  });



//// BOTON "EDITAR"

 $btnEdit.addEventListener("click", () => {
  const $btnEdit = document.querySelectorAll(".edit");
  const tareasFiltradas = tareas.map((tarea) => tarea.id !=0);
  tareas = tareasFiltradas

const editarTarea = tareas.find((tarea) => tarea.id === Number(e.target.id));
      $stateEdit.value = editarTarea.estado;
      $titleEdit.value = editarTarea.titulo;     
      
    });
 })

 
 

