
const http = new bAJAX;

// GET posts
posts = http.get('https://jsonplaceholder.typicode.com/posts',
function(err, posts) {
  if(err) {
    console.log(err)
  } else {
  console.log(posts);
  }
});
