/*This is a complex number library that can perform some basic operations on complex number

*/

// Creates the class Complex and initializes it. 
var Complex = function(real, imaginary){
  this.real = real;
  this.im = imaginary;
};

/*Each block of codes here is a function(method) prototype to Complex. It is the same as using 
Complex.prototype.method.*/
var prototype = Complex.prototype = {

// Creates a complex number and sets the real and imaginary parts from a + bi.
  fromRect: function(a, b){
    this.real = a;
    this.im = b;
    return this;
  },

// Creates a complex number from the polar form z = r(cosθ + isinθ).
  fromPolar: function(r, phi){
    if (typeof r == 'string'){
      var parts = r.split(' ');
      r = parts[0];
      phi = parts[1];
    }
    return this.fromRect(
      r * Math.cos(phi),
      r * Math.sin(phi)
    );
  },

//Sets the precision of the numbers. Similar to Number.prototype.toPrecision. 
//Useful before printing the number with the toString method. 
  toPrecision: function(k){
    return this.fromRect(
      this.real.toPrecision(k),
      this.im.toPrecision(k)
    );
  },

//Formats a number using fixed-point notation. Similar to Number.prototype.toFixed.
//Useful before printing the number with the toString method.
  toFixed: function(k){
    return this.fromRect(
      this.real.toFixed(k),
      this.im.toFixed(k)
    );
  },
//Finalizes the instance. The number will not change and any other method 
//call will return a new instance.
  finalize: function(){
    this.fromRect = function(a, b){
      return new Complex(a, b);
    };
    if (Object.defineProperty){
      Object.defineProperty(this, 'real', {writable: false, value: this.real});
      Object.defineProperty(this, 'im', {writable: false, value: this.im});
    }
    return this;
  },

//Evaluates the absolute value of a complex number using Pythagora theorem.
  magnitude: function(){
    var a = this.real, b = this.im;
    return Math.sqrt(a * a + b * b);
  },

//Evaluates the angle θ between the real and imaginary parts of a complex number.
  angle: function(){
    return Math.atan2(this.im, this.real);
  },

//Returns the conjugate of a complex number
  conjugate: function(){
    return this.fromRect(this.real, -this.im);
  },

//Returns the negative of complex number.
//Multiplies both the real and imaginary part with -1.
  negate: function(){
    return this.fromRect(-this.real, -this.im);
  },
//Multiples two complex numbers or a complex and a real number.
  multiply: function(z){
    z = Complex.from(z);
    var a = this.real, b = this.im;
    return this.fromRect(
      z.real * a - z.im * b,
      b * z.real + z.im * a
    );
  },

//Divides two complex numbers or a complex and a real number.
  divide: function(z){
    z = Complex.from(z);
    var divident = (Math.pow(z.real, 2) + Math.pow(z.im, 2)),
      a = this.real, b = this.im;
    return this.fromRect(
      (a * z.real + b * z.im) / divident,
      (b * z.real - a * z.im) / divident
    );
  },

//Adds two complex numbers or a complex number and a real number
  add: function(z){
    z = Complex.from(z);
    return this.fromRect(this.real + z.real, this.im + z.im);
  },

//Subtracts two complex numbers or a complex number and a real number
  subtract: function(z){
    z = Complex.from(z);
    return this.fromRect(this.real - z.real, this.im - z.im);
  },

 //Returns the result when a complex number is raised to power of w.
 //z^w = e^(w*log(z))
  pow: function(z){
    z = Complex.from(z);
    var result = z.multiply(this.clone().log()).exp();
    return this.fromRect(result.real, result.im);
  },

//Returns the square root of a complex number
  sqrt: function(){
    var abs = this.magnitude(),
      sgn = this.im < 0 ? -1 : 1;
    return this.fromRect(
      Math.sqrt((abs + this.real) / 2),
      sgn * Math.sqrt((abs - this.real) / 2)
    );
  },

//Returns the natural logarithm of a complex number to base E
  log: function(k){
    if (!k) k = 0;
    return this.fromRect(
      Math.log(this.magnitude()),
      this.angle() + k * 2 * Math.PI
    );
  },

//Calculates the e^z and the exponential of a complex number.
//where the base is E 
  exp: function(){
    return this.fromPolar(
      Math.exp(this.real),
      this.im
    );
  },