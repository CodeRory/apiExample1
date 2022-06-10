//seleccionamos el div principal con querySelector
const aplicacion = document.querySelector('.container');

//Ahora, como queremos coger los distintos parámetros 
// para acceder a una nueva url según el ID de cada nombre,
// utilizamos lo siguiente.

//URLSEARCHPARAMS necesita que le pasemos un parámetro, en este caso
// window.location.search lo que hace es desglosar todo lo que 
// viene en la URL después de la "?". En otras palabras, 
// nos permite extraer lo que necesitamos de la url
// 
const getUrl = new URLSearchParams(window.location.search)
id = getUrl.get('id')

//Volvemos a realizar peticion
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(`${url}/${id}`)
//en la primera promesa recogemos la respuesta y lo pasamos por .json
.then(res => res.json())
//imprimimos por consola
.then(data => {
    //Creamos un párrafo
    const name = document.createElement('p')
    //A este párrafo le añadimos los nombres
    name.innerHTML = data.name

    const email = document.createElement('p')
    email.innerHTML = data.email

    //Lo metemos en el div
    aplicacion.appendChild(name)
    aplicacion.appendChild(email)
    
    
    console.log(data)})
.catch(error => console.log(error))
