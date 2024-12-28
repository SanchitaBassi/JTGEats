// Get the elements
const cartIcon = document.querySelector('.fa-shopping-cart');
const emptyCartModal = document.getElementById('emptyCartModal');
const overlay = document.getElementById('overlay');
const backToMenuBtn = document.getElementById('backToMenuBtn');

// Function to open the modal
function openCartModal() {
  emptyCartModal.style.display = 'block'; // Show the cart modal
  overlay.style.display = 'block'; // Show the overlay
}

// Function to close the modal
function closeCartModal() {
  emptyCartModal.style.display = 'none'; // Hide the cart modal
  overlay.style.display = 'none'; // Hide the overlay
}

// Add event listener to the cart icon
cartIcon.addEventListener('click', openCartModal);

// Add event listener to the back-to-menu button
backToMenuBtn.addEventListener('click', closeCartModal);

// Optional: Close the modal when clicking on the overlay
overlay.addEventListener('click', closeCartModal);


const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 1; // Start at the first real card
const totalCards = cards.length;

// Set the initial position
carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;

// Update carousel for seamless looping
function updateCarousel() {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;

  // Remove and re-add transition for infinite loop
  carousel.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
      carousel.style.transition = 'none';
      currentIndex = totalCards - 2;
      carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }
    if (currentIndex === totalCards - 1) {
      carousel.style.transition = 'none';
      currentIndex = 1;
      carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    }
  });
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

const video = document.getElementById('custom-video');
const playIcon = document.getElementById('play-icon');
const container = document.querySelector('.video-container');

// Toggle play/pause on video click
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    container.classList.remove('paused'); // Hide the play icon
  } else {
    video.pause();
    container.classList.add('paused'); // Show the play icon
  }
});

// Ensure the play icon is visible when the video is paused
video.addEventListener('pause', () => {
  container.classList.add('paused');
});

// Ensure the play icon is hidden when the video is playing
video.addEventListener('play', () => {
  container.classList.remove('paused');
});


// Open Modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal-overlay');
  const cancelButton = document.querySelector('.cancel-button');
  const submitButton = document.querySelector('.submit-button');
  const form = document.querySelector('form');
  const requestDishButton = document.getElementById('requestDishButton');

  // Close modal function
  function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  // Open modal function
  function openModal() {
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  // Open the modal when the "Request Dish" button is clicked
  requestDishButton.addEventListener('click', function() {
    openModal();
  });

  // Cancel button click event
  cancelButton.addEventListener('click', function() {
    closeModal();
  });

  // If clicking outside the modal container, close the modal
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close the modal when the 'Escape' key is pressed
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Submit form
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const dishName = document.getElementById('dishName').value;
    const imageUrl = document.getElementById('imageUrl').value;
    console.log('Submitted:', { dishName, imageUrl });
    closeModal();
  });
});
