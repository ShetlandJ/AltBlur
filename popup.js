
function blurify() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  });
}

  document.getElementById('trigger-blur').addEventListener('click', blurify);
