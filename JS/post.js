function loadPosts(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => displayPosts(data))
}
loadPosts();

function displayPosts(posts){
   const postContainer = document.getElementById('posts');
   for (const post of posts){
       const div = document.createElement('div');
       div.classList.add('post')
       div.innerHTML = `
       <h3>${post.title}</h3>
       <p>New description </P>
       
       `;
       postContainer.appendChild(div);
       console.log(post);
   }
}

function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            userId: 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}