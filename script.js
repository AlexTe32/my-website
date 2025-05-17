function showModal(id) {
    document.getElementById(id).style.display = "block";
}

function hideModal(id) {
    document.getElementById(id).style.display = "none";
}

// Optional: close modal on outside click
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
