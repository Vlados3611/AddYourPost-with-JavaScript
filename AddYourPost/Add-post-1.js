const subSection = document.querySelector(`.sub-high-section`);

window.addEventListener(`click`, function(event) {
    if (event.target.hasAttribute(`Confrim`)) {
        const PostSection = event.target.closest(`.Post-add-section`);
        const Textarea = document.querySelector(`.textarea-add-post`);
        const DatePost = new Date();
        const user = document.querySelector(`.High-menu`);

        const userInfo = {
            Name: user.querySelector(`.user-name-title`).innerText,
            ImgSrc: user.querySelector(`.user-img`).getAttribute(`src`),
        }

        const postInfo = {
            title: PostSection.querySelector(`.textarea-add-post`).value,

        }
        if (Textarea.value.length <= 0) {
            Textarea.style.border = `1px solid red`;
        }
        else {
            const postAddHTML = ` <div class="Post-section">
        <div class="user-icon-info-box">
            <div class="img-for-user-icon-box">
            <img class="img-for-user-icon" src="/Icon/channel-1.jpeg">
            </div>
            <div class="full_name-for-user-icon">${userInfo.Name}</div>
        </div>
        <div class="user-title-post-box">
            <div class="user-title-post">${postInfo.title}</div>
        </div>
        <div class="date-post-box">
            <p class="date-post">Date post: ${DatePost.getFullYear()}-${DatePost.getMonth() + 1}-${DatePost.getDate()}</p>
        </div>
    </div>`;

    subSection.insertAdjacentHTML(`beforeend`, postAddHTML);
        }

    PostSection.querySelector(`.textarea-add-post`).value = ``;
    }
});