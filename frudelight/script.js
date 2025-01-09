// script.js
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.icon.like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    // Example data for stories and posts
    const storiesData = [
        { img: 'img/story1.jpg' },
        { img: 'img/story2.jpg' },
        { img: 'img/story3.jpg' }
    ];

    const postsData = [
        {
            user: 'user1',
            profilePic: 'img/profile1.jpg',
            postImg: 'img/post1.jpg',
            likes: 120,
            caption: 'Beautiful sunset!'
        },
        {
            user: 'user2',
            profilePic: 'img/profile2.jpg',
            postImg: 'img/post2.jpg',
            likes: 200,
            caption: 'Amazing view!'
        }
    ];

    const storiesContainer = document.querySelector('.stories');
    const postsContainer = document.querySelector('.posts');

    // Render stories
    storiesData.forEach(story => {
        const storyElement = document.createElement('div');
        storyElement.classList.add('story');
        storyElement.style.backgroundImage = `url(${story.img})`;
        storiesContainer.appendChild(storyElement);
    });

    // Render posts
    postsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-header">
                <div class="user-profile" style="background-image: url(${post.profilePic})"></div>
                <span>${post.user}</span>
            </div>
            <img src="${post.postImg}" class="post-img" alt="Post Image">
            <div class="post-footer">
                <img src="img/like.png" class="icon like" alt="Like">
                <span>${post.likes} likes</span>
                <p><strong>${post.user}</strong> ${post.caption}</p>
            </div>
        `;

        postsContainer.appendChild(postElement);
    });
});