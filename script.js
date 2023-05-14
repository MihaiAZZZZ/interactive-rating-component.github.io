
const rating1 = document.querySelector('#rating-1');
let rating = 0;

rating1.addEventListener('click', function() {
    if (rating !== 0) {
        document.querySelector('#rating-' + rating).classList.remove('rating-selected');
    }
    this.classList.add('rating-selected');
    rating = 1;
});
const rating2 = document.querySelector('#rating-2');
const rating3 = document.querySelector('#rating-3');

rating2.addEventListener('click', function() {
    if (rating !== 0) {
        document.querySelector('#rating-' + rating).classList.remove('rating-selected');
    }
    this.classList.add('rating-selected');
    rating = 2;
});

rating3.addEventListener('click', function() {
    if (rating !== 0) {
        document.querySelector('#rating-' + rating).classList.remove('rating-selected');
    }
    this.classList.add('rating-selected');
    rating = 3;
});
const rating4 = document.querySelector('#rating-4');
const rating5 = document.querySelector('#rating-5');
const ratingSubmit = document.querySelector('#rating-submit');

rating4.addEventListener('click', function() {
    if (rating !== 0) {
        document.querySelector('#rating-' + rating).classList.remove('rating-selected');
    }
    this.classList.add('rating-selected');
    rating = 4;
});

rating5.addEventListener('click', function() {
    if (rating !== 0) {
        document.querySelector('#rating-' + rating).classList.remove('rating-selected');
    }
    this.classList.add('rating-selected');
    rating = 5;
});

ratingSubmit.addEventListener('click', function() {
    if (rating > 0 && rating < 6) {
        const ratingElements = document.querySelectorAll('.rating');
        const ratedElements = document.querySelectorAll('.rated');
        ratingElements.forEach(element => {
            element.style.display = 'none';
        });
        ratedElements.forEach(element => {
            element.style.display = 'block';
        });
        const ratedResult = document.querySelector('.rated-result p');
        ratedResult.textContent = "You selected " + rating + " out of 5";
    }
});
