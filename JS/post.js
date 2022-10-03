function loadPost(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => displayPosts(data))
}
loadPost();

function displayPosts(posts){
    console.log(posts);
}