$(document).ready(function() {

  
});

// Open/Close Modals API w/o jQuery
function launch(obj) {
    var el = document.getElementById(obj);
        el.style.display = 'block';
        setTimeout( function() { el.classList.remove('hidden'); }, 100);
        setTimeout( function() { el.classList.add('visible'); }, 500);
        setTimeout( function() { el.classList.add('entry'); }, 500);
}
function blast(obj) {
    var el = document.getElementById(obj);
        el.classList.remove('visible');
        el.classList.add('hidden');
        setTimeout( function() { el.style.display='none' }, 500);
}
