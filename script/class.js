class Sprite {
    constructor({
      position,
      image,
      images,
      animate = false,
    }) {
      this.position = position
      this.image = new Image()
      this.image.onload = () => {
        this.width = this.image.width
        this.height = this.image.height
      }
      this.image.src = image.src
  
      this.animate = animate
      this.images = images
    }
  }
  
  class Boundary {
    static width = 64
    static height = 64
    constructor({ 
        position 
    }) {
        this.position = position
        this.width = 64
        this.height = 64
    }
  }