/*,.This is a complex number library that can perform some basic operations on complex number

*/

// Creates the class Complex and initializes it. 

var Complex = function(real, im){
  this.real = real;
  this.im = im;
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
    if (typeof r === 'string'){
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
    var result = z.multiply(this.clone().log()).exp(); // z^w = e^(w*log(z))
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

//Returns the sine of a complex number
  sin: function(){
    var a = this.real, b = this.im;
    return this.fromRect(
      Math.sin(a) * cosh(b),
      Math.cos(a) * sinh(b)
    );
  },

//Returns the cosine of a complex number
  cos: function(){
    var a = this.real, b = this.im;
    return this.fromRect(
      Math.cos(a) * cosh(b),
      Math.sin(a) * sinh(b) * -1
    );
  },

//Returns the tangent of a complex number
  tan: function(){
    var a = this.real, b = this.im,
      divident = Math.cos(2 * a) + cosh(2 * b);
    return this.fromRect(
      Math.sin(2 * a) / divident,
      sinh(2 * b) / divident
    );
  },

//Returns the hyperbolic sine of a complex number
  sinh: function(){
    var a = this.real, b = this.im;
    return this.fromRect(
      sinh(a) * Math.cos(b),
      cosh(a) * Math.sin(b)
    );
  },

//Returns the hyperbolic cosine of a complex number
  cosh: function(){
    var a = this.real, b = this.im;
    return this.fromRect(
      cosh(a) * Math.cos(b),
      sinh(a) * Math.sin(b)
    );
  },

//Returns the hyperbolic tangent of a complex number
  tanh: function(){
    var a = this.real, b = this.im,
      divident = cosh(2 * a) + Math.cos(2 * b);
    return this.fromRect(
      sinh(2 * a) / divident,
      Math.sin(2 * b) / divident
    );
  },

//Returns a new Complex instance with the same real and imaginary properties
  clone: function(){
    return new Complex(this.real, this.im);
  },

//Returns a string representation of the complex number
  toString: function(polar){
    if (polar) return this.magnitude() + ' ' + this.angle();

    var ret = '', a = this.real, b = this.im;
    if (a) ret += a;
    if (a && b || b < 0) ret += b < 0 ? '-' : '+';
    if (b){
      var absIm = Math.abs(b);
      if (absIm != 1) ret += absIm;
      ret += 'i';
    }
    return ret || '0';
  },

//Compares if two complex numbers are the same
  equals: function(z){
    z = Complex.from(z);
    return (z.real === this.real && z.im === this.im);
  }

};

//Creates optional numes for alreday specified names
var alias = {
  abs: 'magnitude',
  arg: 'angle',
  phase: 'angle',
  conj: 'conjugate',
  mult: 'multiply',
  dev: 'divide',
  sub: 'subtract'
};

for (var a in alias) prototype[a] = prototype[alias[a]];

//This is extends the functionality of indicated method
var extend = {

  from: function(real, im){
    if (real instanceof Complex) return new Complex(real.real, real.im);
    var type = typeof real;
    if (type === 'string'){
      if (real === 'i') real = '0+1i';
      var match = real.match(/(\d+)?([\+\-]\d*)[ij]/);
      if (match){
        real = match[1];
        im = (match[2] === '+' || match[2] === '-') ? match[2] + '1' : match[2];
      }
    }
    real = +real;
    im = +im;
    return new Complex(isNaN(real) ? 0 : real, isNaN(im) ? 0 : im);
  },

  fromPolar: function(r, phi){
    return new Complex(1, 1).fromPolar(r, phi);
  },

  i: new Complex(0, 1).finalize(),

  one: new Complex(1, 0).finalize()

};

for (var e in extend) Complex[e] = extend[e];

var sinh = function(x){
  return (Math.pow(Math.E, x) - Math.pow(Math.E, -x)) / 2;
};

var cosh = function(x){
  return (Math.pow(Math.E, x) + Math.pow(Math.E, -x)) / 2;
};


