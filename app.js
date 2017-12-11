// given an array of numbers, return the sum of the square of the numbers, but only
// if the number is greater than 5.

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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
