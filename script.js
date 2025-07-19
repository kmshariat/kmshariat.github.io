// Typing effect
const typingElement = document.getElementById('typing');
const texts = ['This is Shariat', 'An amateur astronomer'];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 50;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];
  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500); // Pause before deleting
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  type();

  // Scroll animation for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.9;
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Initial check
});



document.querySelectorAll('.course-done-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('done');
  });
  btn.addEventListener('keydown', function(e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      this.classList.toggle('done');
    }
  });
});
