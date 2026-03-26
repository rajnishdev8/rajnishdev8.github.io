body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
}

/* Glass navbar */
.glass {
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.05);
  padding: 15px;
  position: sticky;
  top: 0;
}

nav {
  display: flex;
  justify-content: space-between;
}

nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

nav a {
  color: white;
  text-decoration: none;
}

/* Hero */
.hero {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Sections */
.section {
  padding: 80px 20px;
  text-align: center;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.6s ease;
}

/* Cards */
.card, .project-card {
  background: rgba(255,255,255,0.05);
  margin: 20px auto;
  padding: 20px;
  width: 300px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.card:hover, .project-card:hover {
  transform: scale(1.05);
}

/* Reveal animation */
.show {
  opacity: 1;
  transform: translateY(0);
}
