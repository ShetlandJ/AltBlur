
function blurify() {
  chrome.tabs.executeScript({
    file: 'blurify.js'
  });
}

  document.getElementById('trigger-blur').addEventListener('click', blurify);
