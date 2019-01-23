## Complex Number Library
This is a complex number libry that can perform some simple operations of complex number.
To use it, the libry has to be required in your code. You can use

`var Complex = require("Complex")`


**_Complex constructor:_**
 
 `var z = new Complex(real, im);`
 
 Arguments:
1.	real (number) the real part of the number
2.	im (number) the imaginary part of the number

**_Function: `Complex.from`_**:
An in line function like `Number.from`.
`var z = Complex.from(real[, im]);`

Arguments:
1.	real (number): the real part of the number
2.	im (number, optional): the imaginary part of the number
Or
1.	real (string): a string representation of the number, for example 1+4i

Examples:
```
var z = Complex.from(2, 4);
var z = Complex.from(5);
var z = Complex.from('2+5i');
```

**_Constant: `Complex.i`_**: A instance of the imaginary unit i

`var i = Complex.i;`


**_Constant: `Complex.one`_**:
An instance for the real number 1
`var one = Complex.one;`

**_Method: `fromRect`_**:
Sets the real and imaginary properties a and b from a + bi

`myComplex.fromRect(real, im);`

Arguments:
1.	real (number): the real part of the number
2.	im (number): the imaginary part of the number

**_Method: `fromPolar`_**:
Sets the a and b in a + bi from a polar representation.

`myComplex.fromPolar(r, phi);`

Arguments:
1.	r (number): the radius/magnitude of the number
2.	phi (number): the angle/phase of the number

**_Method: `toPrecision`_**
Sets the precision of the numbers. Similar to Number.prototype.toPrecision. Useful before printing the number with the toString 

`myComplex.toPrecision(k);`

Argument:
1.	k (number): an integer specifying the number of significant digits

**_Method: `toFixed`_**:
Formats a number using fixed-point notation. Similar to Number.prototype.toFixed. Useful before printing the number with the toString 

`myComplex.toFixed(k);`

Argument:
1.	k (number): the number of digits to appear after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0

**_Method: `finalize`_**:
Finalizes the instance. The number will not change and any other method call will return a new instance. Very useful when a complex instance should stay constant. For example the Complex.i variable is a finalized instance.

`myComplex.finalize();`

**_Method: `magnitude`_**:
Calculates the magnitude of the complex number

`myComplex.magnitude();`
Alias:
   •	abs

**_Method: `angle`_**:
Calculates the angle with respect to the real axis, in radians.

`myComplex.angle();`

Aliases
   •	arg
   •	phase

**_Method: `conjugate`_**:
Calculates the conjugate of the complex number (multiplies the imaginary part with -1)

`myComplex.conjugate();`

**_Method: `negate`_**:
Negates the number (multiplies both the real and imaginary part with -1)

`myComplex.negate();`

**_Method: `multiply`_**:
Multiplies the number with a real or complex number

`myComplex.multiply(z);`

Arguments:
1.	z (number, complex) the number to multiply with

Alias:
   •	mult

**_Method: `divide`_**:
Divides the number by a real or complex number

`myComplex.divide(z);`

Arguments:
1.	z (number, complex): the number to divide by
Alias:
   •	div

**_Method: `add`_**:
Adds a real or complex number

`myComplex.add(z);`

Arguments:
1.	z (number, complex): the number to add

**_Method: `subtract`_**:
Subtracts a real or complex number

`myComplex.subtract(z);`

Arguments:
1.	z (number, complex): the number to subtract
Alias:
   •	sub

**_Method: `pow`_**:
Returns the base to the exponent

`myComplex.pow(z);`

Arguments:
1.	z (number, complex) the exponent

**_Method: `sqrt`_**:
Returns the square root

`myComplex.sqrt();`

**_Method: `log`_**:
Returns the natural logarithm (base E)

`myComplex.log([k]);`

Arguments:
1.	k (number): the actual answer has a multiplicity (ln(z) = ln|z| + arg(z)) where arg(z) can return the same for different angles (every 2*pi), with this argument you can define which answer is required

**_Method: `exp`_**:
Calculates the e^z where the base is E and the exponential the complex number.

`myComplex.exp();`

**_Method: `sin`_**:
Calculates the sine of the complex number

`myComplex.sin();`

**_Method: `cos`_**:
Calculates the cosine of the complex number

`myComplex.cos();`

**_Method: `tan`_**:
Calculates the tangent of the complex number

`myComplex.tan();`

**_Method: `sinh`_**:
Calculates the hyperbolic sine of the complex number

`myComplex.sinh();`

**_Method: `cosh`_**:
Calculates the hyperbolic cosine of the complex number

`myComplex.cosh();`

**_Method: `tanh`_**:
Calculates the hyperbolic tangent of the complex number

`myComplex.tanh();`

**_Method: `clone`_**:
Returns a new Complex instance with the same real and imaginary properties

`myComplex.clone();`

**_Method: `toString`_**:
Returns a string representation of the complex number

`myComplex.toString();`

Examples:
```
new Complex(1, 2).toString(); // 1+2i
new Complex(0, 1).toString(); // i
new Complex(4, 0).toString(); // 4
new Complex(1, 1).toString(); // 1+i
```

**_Method: `Equals`_**:
Checks if the real and imaginary components are equal to the passed in compelex components.

`myComplex.equals(z);`

Arguments:
1.	z (number, complex): the complex number to compare with

Examples:
```
new Complex(1, 4).equals(new Complex(1, 4)); // true
new Complex(1, 4).equals(new Complex(1, 3)); // false
```


