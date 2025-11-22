// Simple greeting
//alert("Welcome to my Website!");
// Basic interactivity: theme toggle, menu toggle, set year
(function(){
const root = document.documentElement;
const yearEls = [document.getElementById('year'), document.getElementById('year-2')];
const themeToggle = document.getElementById('theme-toggle') || document.getElementById('theme-toggle-2');
const menuToggle = document.getElementById('menu-toggle') || document.getElementById('menu-toggle-2');


// Set year
yearEls.forEach(el => { if(el) el.textContent = new Date().getFullYear(); });


// Persisted theme
const current = localStorage.getItem('theme');
if(current) document.documentElement.setAttribute('data-theme', current);


// Theme toggle (works for both pages)
document.querySelectorAll('#theme-toggle, #theme-toggle-2').forEach(btn => {
btn && btn.addEventListener('click', () => {
const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', theme);
localStorage.setItem('theme', theme);
});
});


// Mobile nav toggle
document.querySelectorAll('.menu-btn').forEach(btn => {
btn && btn.addEventListener('click', () => {
const nav = btn.nextElementSibling || document.getElementById('main-nav') || document.getElementById('main-nav-2');
if(!nav) return;
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
nav.style.flexDirection = 'column';
nav.style.gap = '8px';
});
});
})();