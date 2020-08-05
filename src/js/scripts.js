const toggleGrid = document.querySelector('.toggle__link--grid');
const toggleList = document.querySelector('.toggle__link--list');
const ul = document.querySelector('.articles');

toggleGrid.addEventListener('click', function(e) {
    e.preventDefault();
    toggleGrid.classList.add('primary');
    toggleList.classList.remove('primary');
    ul.classList.remove('articles-list');
});

toggleList.addEventListener('click', function(e) {
    e.preventDefault();
    toggleList.classList.add('primary');
    toggleGrid.classList.remove('primary');
    ul.classList.add('articles-list');
});