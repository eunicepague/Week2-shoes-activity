document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');
      toggleCards(filter);
    });
  });

  function toggleCards(filter) {
    cards.forEach((card) => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block'; // Show the card
      } else {
        card.style.display = 'none'; // Hide the card
      }
    });

    // Toggle the "hidden" class on key-icons cards
    if (filter === 'key-icons' && filter === 'running-shoes') {
      const keyIconsCards = document.querySelectorAll('.card.key-icons');
      const runningShoesCards = document.querySelectorAll(
        '.card.running-shoes'
      );
      keyIconsCards.forEach((card) => {
        card.classList.toggle('hidden', filter !== 'key-icons');
      });
      runningShoesCards.forEach((card) => {
        card.classList.toggle('hidden', filter !== 'running-shoes');
      });
    }
  }
});
