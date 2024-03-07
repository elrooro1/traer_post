// Paso 1: Definir la función asincrónica para hacer la solicitud a la API
async function obtenerPosts() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
      // Llama a la función para mostrar los resultados en HTML
    mostrarPostsEnHTML(data);
    } catch (error) {
    console.error('Error al obtener los posts:', error.message);
      // Puedes mostrar un mensaje de error en el HTML si lo deseas
    }
}


// Paso 2: Función para mostrar los posts en HTML
function mostrarPostsEnHTML(posts) {
    const listaPosts = document.getElementById('lista-posts'); // Reemplaza 'lista-posts' con el ID de tu lista en el HTML
    
    // Limpiar la lista antes de agregar nuevos elementos
    listaPosts.innerHTML = '';
    
    // Iterar sobre los posts y agregar cada uno a la lista
    posts.forEach(post => {
    const listItem = document.createElement('li');
      listItem.textContent = post.title; // Ajusta según la estructura de tu objeto post
    listaPosts.appendChild(listItem);
    });
}