AFRAME.registerComponent('duplicate-me', {
    schema: {
      tileSize: {type: 'int', default: 1},
  
      cols: {type: 'int', default: 10},
      rows: {type: 'int', default: 10},  
      offset: {type: 'int', default: 0},
    },
  /**
   * tileSize : La taille de base d'une tuile (nous garderons la même pour la width et height,
   * la depth sera attribuée au choix, en dur dans le composant)  
   * cols : Le nombre de tuiles disposées sur l'aye Z rows : Le nombre de tuiles disposées sur l'aye X
   * offset : Un paramètre que vous pouvez rajouter en option pour permettre d'ajouter
   * un écart entre les tuiles sur les axes X et Z (utile pour voir que nos tuiles sont "bien là" et qu'il ne
   * s'agit pas d'une seule grosse boîte ou d'un simple plan)
   */
    init: function () {
      var tileSize = this.data.tileSize;
      var cols = this.data.cols;
      var rows = this.data.rows;
      var offset = this.data.offset;
      console.log(this.el.object3D.position);
      //var sceneEl = this.el.sceneEl;
      var tileEl;
      var x, z;
      for (x = 0; x < rows; x++) {
        for (z = 0; z < cols; z++) {
            tileEl = document.createElement('a-box');
            tileEl.setAttribute('width', tileSize);
            tileEl.setAttribute('height', tileSize);
            tileEl.setAttribute('depth', tileSize);
            tileEl.setAttribute('material', 'color', 'pink');
            tileEl.setAttribute('position', {
                x: this.el.object3D.position.x + x * tileSize + offset * x,
                y: this.el.object3D.position.y + Math.random()*0.05,
                z: this.el.object3D.position.z + z * tileSize + offset * z
            });
            // alternate colors like a chessboard
            if ((x + z) % 2 === 0) {
                tileEl.setAttribute('material', 'color', 'black');
            }
            // change luminosity randomly for each tile using hsl and changing only the luminosity whil keeping wooden beige as a base color
            tileEl.setAttribute('material', 'color', 'hsl(25, 100%, ' + (Math.random() * 5 + 70) + '%)');
            document.querySelector('a-scene').appendChild(tileEl); 
        }
      }
    },
  
    
  
  });