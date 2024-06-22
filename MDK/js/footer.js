var claim = document.getElementById('claim');
function menuClaimOpen() {
    claim.classList.remove('destroy');
    document.body.style.overflow = 'hidden';
}
function menuClaimClose() {
    claim.classList.add('destroy');
    document.body.style.overflow = 'visible';
}
document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        menuClaimClose();
    }
}
