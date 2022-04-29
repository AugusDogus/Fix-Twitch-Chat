const htmlBody = document.querySelector('body');
const chatLoadedObserver = new MutationObserver((mutations, observer) => {
  mutations.forEach(() => {
    const buttonSelector = document.querySelector(
      '[data-test-selector="chat-toggle"]'
    );
    if (buttonSelector) {
      if (buttonSelector.parentElement) {
        buttonSelector.parentElement.setAttribute(
          'style',
          'z-index: 100 !important'
        );
        observer.disconnect();
      }
    }
  });
});

chatLoadedObserver.observe(htmlBody, {
  attributes: false,
  childList: true,
  characterData: false,
});
