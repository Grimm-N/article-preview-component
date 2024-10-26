document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.querySelector('.article__info-author-btn-share');
    const shareLinks = document.querySelector('.article__info-author-links');
  
    shareLinks.style.display = 'none';
  
    shareButton.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleShareLinks();
      shareButton.classList.toggle('active'); 
    });
  
    document.addEventListener('click', function () {
      if (shareLinks.classList.contains('show')) {
        hideShareLinks();
        shareButton.classList.remove('active');
      }
    });
  });
  
  function toggleShareLinks() {
    const shareLinks = document.querySelector('.article__info-author-links');
    if (shareLinks.classList.contains('show')) {
      hideShareLinks();
    } else {
      showShareLinks();
    }
  }
  
  function showShareLinks() {
    const shareLinks = document.querySelector('.article__info-author-links');
    shareLinks.style.display = 'flex';
    requestAnimationFrame(() => {
      shareLinks.classList.add('show');
    });
  }
  
  function hideShareLinks() {
    const shareLinks = document.querySelector('.article__info-author-links');
    shareLinks.classList.remove('show');
    shareLinks.addEventListener('transitionend', function () {
      shareLinks.style.display = 'none';
    }, { once: true });
  }
  