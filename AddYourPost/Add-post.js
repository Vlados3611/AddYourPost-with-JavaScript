const AddButton = document.querySelector(`.Open-post-add-button`);
const PostAdd = document.querySelector(`.Post-add-section`);
const cancelButton = document.querySelector(`.cancel-add-post-button`);
const confrimButton = document.querySelector(`.confrim-add-post-button`);
const Textarea = document.querySelector(`.textarea-add-post`);

AddButton.addEventListener(`click`, function() {
    PostAdd.style.display = `flex`;
});

cancelButton.addEventListener(`click`, function() {
    PostAdd.style.display = `none`;
    Textarea.style.border = `none`;
});

confrimButton.addEventListener(`click`, function() {
    if (Textarea.value.length > 0) {
        PostAdd.style.display = `none`;
        Textarea.style.border = `none`;
    }
});

Textarea.addEventListener(`keyup`, function() {
    if (Textarea.value.length <= 0) {
        Textarea.style.border = `1px solid red`;
    }
    else {
        Textarea.style.border = `none`;
    }
})