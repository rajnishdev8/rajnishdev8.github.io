// Typing effect (compact)
const roles = ["Lead Software Engineer", "Backend Developer", "Cloud Enthusiast"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = roles[i];

  if (deleting) j--;
  else j++;

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, deleting ? 40 : 80);
}

type();

// Expandable sections
document.querySelectorAll(".expandable").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
