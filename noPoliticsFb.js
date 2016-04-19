function hidePoliticalPosts() {
    var forbidden = ['bernie', 'hillary', 'sanders', 'clinton', 'trump', 'drumpf', '#feelthebern', 'cruz', 'rubio', 'kasich', 'little marco', 'superdelegate'];
    var posts = document.getElementsByClassName('userContentWrapper');
    if (posts.length < 1) {
        // keep looking until .userContentWrapper divs appear
        window.requestAnimationFrame(hidePoliticalPosts);
    } else {
        for (var i = 0; i < posts.length; i ++) {
            var post = posts[i];
            var postText = post.textContent.toLowerCase();
            if (forbidden.some(function(v) { return postText.indexOf(v) >= 0; })) {
                post.style.display = 'none';
            }
        }
    }
}

window.onscroll = function() {
    hidePoliticalPosts();
};

window.onload = function() {
    hidePoliticalPosts();
};
