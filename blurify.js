images = document.querySelectorAll('img')

images.forEach((image) => {
  if (!image.getAttribute('alt')) { 
    image.style.filter = "blur(20px)"
  }
});