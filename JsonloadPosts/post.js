/*
function loadPosts (){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => displayPosts(data)) 
}

//call the funtion 
loadPosts();

function displayPosts(posts){
    console.log(posts);
}

*/

/*

function loadPosts (){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => displayPosts(data)) 
}

//call the funtion 
loadPosts();

function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for (const post of posts){
        const div = document.createElement('div');
        //connect the style with js
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body}   </p>
        `;
        postContainer.appendChild(div);
        console.log(post.title);
    }
}

*/

//Patch

function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {

     method: 'POST',
     body: JSON.stringify({
         title: 'my new post',
         body: 'This is my posts',
         userId: 2
     }),
     headers: {
        'Content-type': 'application/json; charset=UTF-8',

     }

    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}