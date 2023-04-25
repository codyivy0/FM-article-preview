const shareButton = document.querySelector('.share-button');
const alternate = document.querySelector('.alternate')
const shareIcon = document.getElementById('share')
const facebookIcon = document.querySelector('.social-icon[alt="Facebook"]');
const twitterIcon = document.querySelector('.social-icon[alt="Twitter"]');
const pinterestIcon = document.querySelector('.social-icon[alt="pinterest"]');


shareButton.addEventListener('click', () => {
    alternate.style.display = alternate.style.display === 'none' ? 'flex' : 'none';
    shareButton.classList.toggle('button-active');
    shareIcon.classList.toggle('icon-active')
});

facebookIcon.addEventListener('click', () => {
    window.open('https://www.facebook.com/', '_blank');
});

twitterIcon.addEventListener('click', () => {
    window.open('https://twitter.com/', '_blank');
});

pinterestIcon.addEventListener('click', () => {
    window.open('https://www.pinterest.com/', '_blank');
});