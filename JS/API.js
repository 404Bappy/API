function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))


}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json));
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json));
}

//function displayUsers(data){
//  console.log(data);
//}

function displayUsers(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        //console.log(user.name);
        const li = document.getElementById('li');
        li.innerText='New User';
        ul.appendChild(li);

    }
}