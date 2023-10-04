(function () {
  const h3Elements = document.querySelectorAll('h3.truncateText');

  h3Elements.forEach(function (h3Element) {
    let text = h3Element.textContent.trim();
    const characterLimit = 50;
    if (text.length > characterLimit) {
      const lastSpaceIndex = text.lastIndexOf(' ', characterLimit);
      text = text.substring(0, lastSpaceIndex);
      h3Element.textContent = text.slice(0, characterLimit) + '...';
    }
  });
})();
