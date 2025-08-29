  
  //Seleccionar elementos del HTML
  const taskInput = document.getElementById("task-input");   
  const addTaskBtn = document.getElementById("add-task-btn"); 
  const taskList = document.getElementById("task-list");     
  
  //Función para generar un nuevo elemento a la lista de tareas
  function createTaskElement(taskText) {
    const li = document.createElement("li");
    const leftDiv = document.createElement("div");
    leftDiv.className = "task-left";
    
    //Cuadradito para chequear las tareas ya creadas
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.setAttribute("aria-label", "Marcar tarea como completada");

    //Texto alineado con el cuadradito
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText; 

    //Creación botón Eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.type = "button"; 
    deleteBtn.textContent = "Eliminar";
    deleteBtn.setAttribute("aria-label", `Eliminar tarea: ${taskText}`);

    //Eventos al marcar el cuadradito(subrayado verde)
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });

    //Evento del botón eliminar 
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    //Lista de Tareas agregadas
    leftDiv.appendChild(checkbox); 
    leftDiv.appendChild(span);     
    li.appendChild(leftDiv);       
    li.appendChild(deleteBtn);    

    
    return li;
  }

  //Funcion para agregar las tareas del campo de texto inicial
  function addTaskFromInput() {
    const text = taskInput.value.trim(); 
    if (text === "") { //Validación si esta vacio   
      taskInput.focus();
      return;
    }

    //Crea y agrega la tarea con la función anterior
    const taskElement = createTaskElement(text);
    taskList.appendChild(taskElement);

    //Limpia el campo inicial
    taskInput.value = "";
    taskInput.focus();
  }

  //Evento del botón Agregar con la función
  addTaskBtn.addEventListener("click", addTaskFromInput);

  taskInput.addEventListener("keydown", (e) => { //Al presionar la tecla Enter esto se ejecuta
    if (e.key === "Enter") {
      e.preventDefault();
      addTaskFromInput();
    }
  });






