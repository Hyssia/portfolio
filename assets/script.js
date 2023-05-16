const delay = ms => new Promise(res => setTimeout(res, ms));

const welcomeContainer = document.querySelector('.container');

const welcomeSection = document.querySelector('.welcome-section');
const landingContainer = document.querySelector('.landing-container');
const welcomeButton = document.querySelector('.welcome-button');
const welcomeText = document.querySelector('.welcome-text');
const welcomeLinks = document.querySelector('.welcome-links');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const welcomeTitle = document.querySelector('h1');
const introText = document.querySelector('.introText');

document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('h1');
  let iterations = 0;
  const interval = setInterval(() => {
    h1.innerText = h1.dataset.value
      .split('')
      .map((letter, index) => {
        if (index < iterations) {
          return h1.dataset.value[index];
        } else return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      })
      .join('');
    if (iterations >= h1.dataset.value.length) clearInterval(interval);

    iterations += 1 / 15;
  }, 20);

  setTimeout(() => {
    clearInterval(interval);
  }, 5100);
});

setTimeout(() => {
  const links = document.querySelectorAll('.welcome-links a');
  const button = document.querySelector('.welcome-button');
  const icons = document.querySelectorAll('.welcome-links i');

  links.forEach(link => {
    link.style.opacity = 1;
  });
  button.style.opacity = 1;
  icons.forEach(icon => {
    icon.style.opacity = 1;
  });
}, 4000);

const welcomeInit = async () => {
  welcomeText.classList.toggle('fade');
  welcomeButton.classList.toggle('fade');
  welcomeLinks.classList.toggle('fade');
  //   await delay(500);
  welcomeText.classList.toggle('hidden');
  welcomeButton.classList.toggle('hidden');
  welcomeSection.classList.toggle('hidden');
  welcomeLinks.classList.toggle('hidden');
  //   await delay(1500);
  landingContainer.classList.toggle('hidden');
};
