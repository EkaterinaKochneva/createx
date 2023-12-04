MicroModal.init({
  onShow: function(modal, element, event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('body').classList.add('faded');
  },
  onClose: function() {
    document.querySelector('body').classList.remove('faded');
  },
  openTrigger: 'data-modal',
  closeTrigger: 'data-modal-close',
  awaitCloseAnimation: true
});