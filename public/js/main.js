$(document).ready(function() {

  

});

// Open/Close Modals API w/o jQuery
function launch(obj) {
    var el = document.getElementById(obj);
        el.style.display = 'block';
        el.classList.remove('hidden')
        setTimeout( function() { el.classList.add('visible'); }, 10);
        setTimeout( function() { el.classList.add('entry'); }, 50);
        setTimeout( function() { el.classList.add('entry'); }, 50);
}
function hide(obj) {
    var el = document.getElementById(obj);
        el.classList.remove('visible');
        el.classList.add('hidden');
        el.style.display = 'none';
}
function blast(obj) {
    var el = document.getElementById(obj);
        el.classList.remove('visible');
        el.classList.add('hidden');
        setTimeout( function() { el.style.display='none' }, 500);
}
