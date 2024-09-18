const ratingButtons = document.querySelectorAll('.rating-buttons button');
const submitButton = document.querySelector('.submit-button');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const selectedRating = document.getElementById('selected-rating');
let rating = 0;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    rating = button.textContent;
    ratingButtons.forEach(btn => btn.style.background = 'hsl(210, 36%, 96%)');
    button.style.background = 'hsl(25, 97%, 53%)';
  });
});

submitButton.addEventListener('click', () => {
  if (rating) {
    selectedRating.textContent = rating;
    ratingState.style.display = 'none';
    thankYouState.style.display = 'block';
  }
});
