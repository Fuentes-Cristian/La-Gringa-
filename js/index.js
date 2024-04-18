const form = document.getElementById("form");
const datos = []; // Array para almacenar los datos del formulario

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //valores tomados por inputs que ingresa el usuario
    const nombre = document.getElementById("nombre").value;
    const clave = document.getElementById("clave").value;


    // Crear un objeto para almacenar los datos del formulario
    const formData = {
        nombre: nombre,
        clave: clave
    };

    usuario()

    //guardar los datos ingresados en localStorage
    function usuario() {
        
        // Agregar los datos del formulario al array
        datos.push(formData);        
        
        const baseDatos = JSON.stringify(datos);
        localStorage.setItem("Datos del usuario", baseDatos)

    }

    form.reset()
});


