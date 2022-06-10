//seleccionamos el div principal con querySelector
const aplicacion = document.querySelector('.container');

/* Vamos a realizar la petición con la función fetch. Éste recibe un 
string , que en este caso es la url de la página que vamos a utilizar,
donde realizamos la petición.*/
//Lo primero que hacemos es crear una constante con la URL
const url = 'https://jsonplaceholder.typicode.com/users';

//Realizamos la petición. Fetch devuelve una promesa y las resolvemos
// con .then, y los errores con .catch
fetch(url)
//Como nos devuelve una promesa, utilizamos .then y dentro la promesa, que
// podemos llamarla res o response. Dos ejemplos simples
//.then(res => console.log(res))
//.then(res => console.log(res.status))

//En este caso, vamos a utilizar la función .json para poder
// sacar por consola algunos datos de forma correcta. Nos coge
// una información en JSON y lo convierte en un objeto de JS
.then(res => res.json()) 
//Aquí cogemos la data y la imprimos por pantalla
.then(data => {
    //Vamos ahora a iterar ahora el objeto de JS para obtener
    // sólo el nombre. Dentro de la variable usuario se guarda
    // cada una de las iteraciones
    data.forEach(usuario => {
        console.log(usuario.name)
        //Con esto lo sacamos por pantalla y también lo guardamos
        // Creamos un párrafo
        const p = document.createElement('p')
        //Añadimos el ID a cada parrafo, ahora si vemos el html desde la consola se verá
        // como <p id=...
        p.setAttribute('id', usuario.id)
        //A este parrafo le añadimos el valor de la variable
        p.innerHTML = usuario.name
        //Hacemos que se pueda pulsar sobre los nombres
        p.addEventListener('click', function(){
            //con esto nos vamos a la otra URL
            window.location.href = `./usuario.html?id=${usuario.id}`

        })
        //Lo añadimos al div aplicacion
        aplicacion.appendChild(p)

    });
    /* console.log(data) */
})
//Vamos a utilizar .catch por si alguna de las promesas falla
// se lanzará el catch, que lo captura y lo mete en la variable
// err. 
.catch(err => console.log(err));

