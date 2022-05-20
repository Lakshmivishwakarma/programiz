class Triangle {

    constructor(s1, s2, s3) {
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }


    getSemiPerimeter() {
        let s = (this.s1 + this.s2 + this.s3) / 2;
        return s;

    }
    getPerimeter() {
        return (s1 + s2 + s3);

    }
    getArea() {
        let s = this.getSemiPerimeter();
        console.log(s * (s - this.s1) * (s - this.s2) * (s - this.s3))
        let area = Math.sqrt(s * (s - this.s1) * (s - this.s2) * (s - this.s3));
        return area;
    }

    getTypeOfTriangle() {

        if (this.s1 == this.s2 == this.s3) {
            return 'equilateral';
        } else if (this.s1 == this.s2 || this.s2 == this.s3 || this.s3 == this.s1) {
            return "isosceles";
        }else{
            return "triangle";
        }

    }

}
let newtriangle;

newtriangle = new Triangle(3, 4, 5);
console.log(newtriangle);
console.log(newtriangle.getArea());

console.log(newtriangle.getTypeOfTriangle());