document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 10)
  });
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
  
    menuButton.addEventListener('click', function () {
      menu.classList.toggle('open');
      menuToggle.classList.toggle('hidden');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const animalSpan = document.getElementById('an');
    const sportSpan = document.getElementById('sp');
    const cuisSpan = document.getElementById('cui');
    const patisSpan = document.getElementById('pat');
    const meImage = document.querySelector('.me');
    const animalImage = document.querySelector('.animal');
    const sportImage = document.querySelector('.sport');
    const cuisImage = document.querySelector('.cuisine');
    const patisImage = document.querySelector('.patis');

    animalSpan.addEventListener('mouseover', () => {
        meImage.style.display = 'none';
        animalImage.style.display = 'inline-block';
    });

    animalSpan.addEventListener('mouseout', () => {
        meImage.style.display = 'inline-block';
        animalImage.style.display = 'none';
    });

    sportSpan.addEventListener('mouseover', () => {
        meImage.style.display = 'none';
        sportImage.style.display = 'inline-block';
    });

    sportSpan.addEventListener('mouseout', () => {
        meImage.style.display = 'inline-block';
        sportImage.style.display = 'none';
    });
    cuisSpan.addEventListener('mouseover', () => {
        meImage.style.display = 'none';
        cuisImage.style.display = 'inline-block';
    });

    cuisSpan.addEventListener('mouseout', () => {
        meImage.style.display = 'inline-block';
        cuisImage.style.display = 'none';
    });
    patisSpan.addEventListener('mouseover', () => {
        meImage.style.display = 'none';
        patisImage.style.display = 'inline-block';
    });

    patisSpan.addEventListener('mouseout', () => {
        meImage.style.display = 'inline-block';
        patisImage.style.display = 'none';
    });
});
