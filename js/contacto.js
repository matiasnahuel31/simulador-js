let form = document.getElementById("form")

form.addEventListener("submit",(event) =>{
    event.preventDefault()
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let gmail = document.getElementById("email").value
    let consulta = document.getElementById("mensaje").value


    console.log(nombre)
    console.log(apellido)
    console.log(gmail)
    console.log(consulta)
})