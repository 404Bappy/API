function loadPost(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => displayPosts(data))
}
loadPost();

function displayPosts(posts){
   const postContainer = document.getElementById('posts');
   for (const post of posts){
       const div = document.createElement('div');
       div.innerHTML = `
       <h3>New title</h3>
       <p>New description </P>
       
       `
       postContainer.appendchild(div);
   }
}