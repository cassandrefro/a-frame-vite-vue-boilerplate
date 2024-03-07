AFRAME.registerComponent('capturable', {
    init: function () {
      this.onClick = this.onClick.bind(this);
      this.el.addEventListener('click', this.onClick);
    },
  
    onClick: function () {
      // Cacher l'entité
      this.el.setAttribute('visible', false);
  
      // Récupérer l'ID de l'entité cliquée
      const entityId = this.el.getAttribute('id');
      console.log(entityId);
  
      // Modifier la couleur du texte lié à l'entité dans le modal
      const modalText = document.querySelector(`#${entityId}-modal-text`);
      console.log(modalText);
      if (modalText) {
        modalText.setAttribute('color', '#33ff33');
      }
    },
  
    remove: function () {
      this.el.removeEventListener('click', this.onClick);
    }
  });
  