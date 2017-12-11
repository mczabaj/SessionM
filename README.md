## Design

Design a messaging system that:

  * The system takes as an input a list of users, in the millions
  * You will be interfacing with a remote system that takes messages in batches of up-to 100 users.
  * The system needs to continue operating with as little impact if any physical machines fails (aka undelivered messages)

Within this repo you will find some UML for the design of the messaging system. It is written in `.puml` files. These files can be **viewed** in the Atom IDE with the [plantuml-viewer](https://atom.io/packages/plantuml-viewer) package plugin. Once installed, go to a puml file and hit:

    control + alt/option + p

And it will bing up a split view to the right.

#### Discuss tradeoffs if any

  With this design, there is a potential bottle neck for processing at the ingestion point. It really depends on the needs of the system for performance though. If there is not super made rush for getting all users and their messages in and through the system, it might not be an issue. If it does need to be faster, instead of "saving" the inout file before processing it sequentially. It could be opened, lazily, read in on a stream, and batched off to additionally processes (threads) to be ingested quicker. 

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

* Java/C#: __2__
    It's been years since I've used C#. I can read Java, but have spent little to no time writing it.
* Javascript: __3__
* C/C++/Go: __1__
* Ruby: __4__
* Python: __3__
* Bash Scripts: __2__
* HTML/CSS/HTTP Protocol/TLS/Browser developer tools: __3__
* REST: __4__
* JSON: __4__
* XML:  __4__
* SQL:  __3__
* NoSQL systems (please list which): __3__
    Datomic (query language of DataLog)
* Linux / Linux command line / System Administration: __3__
* AWS Console and Core Apps: __3__
    There's just so much!
* Docker: __3__
    Docker, docker-compose, and Vagrant
* Distributed systems: __1__
* Object Oriented Programming Fundamentals: __4__
* Functional Programing Fundamentals: __4__
    I've been using Clojure the last 18 months
* Android: __1__
    I've done no development for Andriod mobile
* iOS: __1__
    or iOS mobile

## Open Source

If you have contributed to Open Source projects, or are working on one, feel free to provide links to your work:

    I have not worked on, nor am I currently working on any open source projects.
