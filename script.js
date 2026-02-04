document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation
  const textElement = document.querySelector(".typewriter");
  const words = ["Software Developer.", "Web Developer.", "AI Enthusiast."];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!textElement) return;
    const currentWord = words[wordIndex];
    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }
  type();

  // Scroll Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});
