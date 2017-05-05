var modal = document.getElementById('loginModal'),
    span = document.getElementsByClassName("closeModal")[0];

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openLoginModal() {
    modal.style.display = "block";
}

function onClose() {
    modal.style.display = "none";
}

function login() {
    // Authorize User
}