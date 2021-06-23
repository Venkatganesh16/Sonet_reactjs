const posts = [
    { title: 'post1', body: 'this is first post' },
    { title: 'post2', body: 'this is second post' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createPost({ title: 'post3', body: 'this is third post' }, getPosts)