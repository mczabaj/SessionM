## Code Example

In Javascript, given an array of numbers, return the sum of the square of the numbers, but only if the number is greater than 5.

The code below is contained in this repo in the `app.js` file. You can run it locally to see it working by executing `node app.js` from the SessionM directory (assuming you have node installed).

```javascript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var data = [0,1,3,5,32,45,50,75,80,99,120];

function checkGreaterThan(number) {
    return number > 5;
}

function numberSquared(number) {
    return Math.pow(number,2);
}

function getSum(total, number) {
    return total + number;
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(data.filter(checkGreaterThan).map(numberSquared).reduce(getSum).toString());
});
```

## Technical Rating

Please rate yourself from 1 (little/no knowledge) to 5 (expert.) If you rate yourself 3 or above, please be sure to consider if you are still proficient if you have not used the technology in the last 24 months.

* Java/C#:

    __2__ It's been years since I've used C#

* Javascript:

  __3__

* C/C++/Go:
  __1__
* Ruby:
    __4__
* Python:
  *3*
* Bash Scripts:
  *2*
* HTML/CSS/HTTP Protocol/TLS/Browser developer tools:
  *3*
* REST:
  *4*
* JSON:
  *4*
* XML:
  *4*
* SQL:
  *3*
* NoSQL systems (please list which):
  __3__ Datomic (query language of DataLog)
* Linux / Linux command line / System Administration:
  __3__
* AWS Console and Core Apps:

  __3__ There's just so much!

* Docker:
  *3* Docker, docker-compose, and Vagrant
* Distributed systems:
  *2*
* Object Oriented Programming Fundamentals:
  *4*
* Functional Programing Fundamentals:
  *4* I've been using Clojure the last 18 months
* Android:
  *1* I've done no development for Andriod
* iOS:
  *1* or iOS

## Open Source

If you have contributed to Open Source projects, or are working on one, feel free to provide links to your work:

    I have not worked on, nor am I currently working on any open source projects.
