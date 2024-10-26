document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.article__share-btn');
  
    // Переключаем видимость ссылок на социальные сети
    shareButton.addEventListener('click', toggleShareLinks);
  });
  
  // Функция для переключения видимости ссылок
  function toggleShareLinks() {
    const shareLinks = document.querySelector('.article__share-links');
    // Проверяем текущее состояние и меняем его на противоположное
    shareLinks.style.display = (shareLinks.style.display === 'none' || !shareLinks.style.display) 
      ? 'flex' 
      : 'none';
  }
  