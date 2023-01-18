class Rectangle {
     constructor(length, height, breadth){
          this.length = length;
          this.height = height;
          this.breadth = breadth;
     }
     CalArea() {
          return this.length * this.height;
      }
      Calperimeter () {
          return 2 * (this.length + this.height)
      }
     }
     
          let rect = new Rectangle(20, 10, 15);

          console.log(rect.CalArea());
          console.log(rect.Calperimeter());
     