
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-page');
    header.classList.toggle('scroll-active', window.scrollY > 100);    
})