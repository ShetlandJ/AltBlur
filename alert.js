images = document.querySelectorAll('img:not([alt])')

images.forEach(image => image.style.filter = "blur(20px)")
