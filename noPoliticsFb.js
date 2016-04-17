function hidePoliticalPosts() {
    console.log('checking...');
    var forbidden = ['bernie', 'hillary', 'sanders', 'clinton', 'trump', 'drumpf', 'election', '#feelthebern'];
    var posts = document.getElementsByClassName('userContentWrapper');
    for (var i = 0; i < posts.length; i ++) {
       var post = posts[i];
       var postText = post.textContent.toLowerCase();
       if (forbidden.some(function(v) { return postText.indexOf(v) >= 0; })) {
        console.log('found one!');
        console.log(postText);
        post.style.display = 'none';
       }
    }
}

document.addEventListener("DOMContentLoaded", function() {
  hidePoliticalPosts();
  window.onscroll = function() {
      console.log('scrolling...');
      hidePoliticalPosts();
  }
});
