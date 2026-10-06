:root {
  --bg-color: #0a0a0a;
  --panel-color: #181818;
  --panel-soft: #202020;
  --text-color: #f5f5f5;
  --muted-color: #b5b5b5;
  --red: #e50914;
  --red-dark: #b20710;
  --shadow: rgba(0, 0, 0, 0.5);
  --white-80: rgba(255, 255, 255, 0.8);
  --white-20: rgba(255, 255, 255, 0.2);
  --white-10: rgba(255, 255, 255, 0.1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
}

button {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.topbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 48px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1));
}

.brand-area,
.nav-actions,
.hero-meta,
.hero-actions,
.modal-actions,
.modal-meta {
  display: flex;
  align-items: center;
}

.brand-area {
  gap: 28px;
}

.brand-logo {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: var(--red);
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 0 18px rgba(229, 9, 20, 0.5);
}

.main-nav {
  display: flex;
  gap: 22px;
}

.main-nav a {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: #ffffff;
}

.nav-actions {
  gap: 14px;
}

.icon-button {
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.9;
}

.profile-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 10px 6px 8px;
  font-size: 0.75rem;
}

.profile-avatar {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #e2d1a8, #7b6447);
  color: #1b1b1b;
  font-weight: 700;
}

.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: flex-end;
  padding: 140px 48px 60px;
  background-image: url("https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.42) 35%,
    rgba(0, 0, 0, 0.24) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 650px;
}

.eyebrow {
  margin: 0 0 14px;
  color: #d1d1d1;
  letter-spacing: 0.18rem;
  font-size: 0.75rem;
  font-weight: 700;
}

.hero h1 {
  margin: 0;
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  line-height: 0.9;
}

.hero-meta,
.modal-meta {
  gap: 14px;
  margin-top: 18px;
  color: var(--white-80);
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.hero-meta span:first-child,
.modal-meta span:first-child {
  color: #ffffff;
  font-weight: 600;
}

.hero-description,
#modal-description {
  max-width: 560px;
  margin-top: 18px;
  color: var(--white-80);
  line-height: 1.6;
  font-size: 1.05rem;
}

.hero-actions,
.modal-actions {
  gap: 14px;
  margin-top: 22px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button,
.close-button {
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button {
  padding: 14px 24px;
  background: var(--red);
  color: #ffffff;
  box-shadow: 0 18px 35px rgba(229, 9, 20, 0.35);
}

.secondary-button {
  padding: 14px 22px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.26);
}

.primary-button:hover,
.secondary-button:hover,
.close-button:hover {
  transform: translateY(-1px);
}

.content-section {
  padding: 6px 48px 36px;
}

.content-section h2 {
  margin: 0 0 18px;
  font-size: 1.5rem;
}

.movie-row {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.movie-row::-webkit-scrollbar {
  height: 8px;
}

.movie-row::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.24);
  border-radius: 10px;
}

.movie-card {
  position: relative;
  min-width: 220px;
  height: 320px;
  border-radius: 14px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  box-shadow: 0 20px 35px var(--shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.movie-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 28px 40px rgba(0, 0, 0, 0.52);
}

.movie-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.05));
}

.card-content {
  position: absolute;
  inset: auto 0 0 0;
  z-index: 1;
  padding: 14px;
}

.card-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.card-subtitle {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.72rem;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.modal.visible {
  opacity: 1;
  pointer-events: auto;
}

.modal.hidden {
  display: none;
}

.modal.visible.hidden {
  display: flex;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.modal-card {
  position: relative;
  z-index: 1;
  width: min(900px, calc(100vw - 36px));
  background: #1b1b1b;
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 270px 1fr;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.modal-poster {
  min-height: 100%;
  background-size: cover;
  background-position: center;
}

.modal-body {
  padding: 26px 24px 22px;
}

.modal-tag {
  margin: 0 0 10px;
  color: #ff6b6b;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  font-size: 0.72rem;
  font-weight: 700;
}

.modal-body h3 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #ffffff;
  font-size: 1rem;
}

@media (max-width: 860px) {
  .topbar {
    padding-inline: 20px;
  }

  .main-nav {
    display: none;
  }

  .hero {
    min-height: 560px;
    padding-inline: 20px;
  }

  .content-section {
    padding-inline: 20px;
  }

  .modal-card {
    grid-template-columns: 1fr;
  }

  .modal-poster {
    min-height: 220px;
  }
}
