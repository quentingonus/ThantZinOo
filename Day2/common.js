function getUsers(callback) {
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ]);
  }, 1000);
}

function findUser(username, callback) {
  getUsers((users) => {
    const user = users.find((user) => user.username === username);
    callback(user);
  });
}

findUser('john', console.log);

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);

function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status == 200) {
        resolve(this.response);
      } else {
        reject(this.status);
      }
    };
    request.open('GET', url, true);
    request.send();
  });
}

const url = 'https://www.javascripttutorial.net/sample/promise/api.json';
const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');

btn.addEventListener('click', () => {
  load(url)
    .then((response) => {
      const result = JSON.parse(response);
      msg.innerHTML = result.message;
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`;
    });
});

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log('Get the user from the database.');
    setTimeout(() => {
      resolve({
        userId: userId,
        username: 'admin'
      });
    }, 1000);
  })
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API.`);
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN']);
    }, 3 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 2 * 1000);
  });
}

getUser(100)
  .then(getServices)
  .then(getServiceCost)
  .then(console.log);


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});


const TIMEOUT = 500;
const DATA_LOAD_TIME = 5000;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = 'Promise.race() Demo Resolved';
      resolve(message);
    }, DATA_LOAD_TIME);
  });
}

function showContent(message) {
  document.querySelector('#message').textContent = message;
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), TIMEOUT);
  });
}

function showLoadingIndicator() {
  document.querySelector('#loader').innerHTML = 'loading...';
}

function hideLoadingIndicator() {
  document.querySelector('#loader').innerHTML = '';
}

let btn2 = document.querySelector('#btnGet2');

btn2.addEventListener('click', () => {
  reset();
  Promise.race([getData()
    .then(showContent)
    .then(hideLoadingIndicator), timeout()
  ])
    .catch(showLoadingIndicator);
});

function reset() {
  hideLoadingIndicator();
  showContent('');
}

let authorized = true;
function getUserById(id) {
  return new Promise((resolve, reject) => {
    if (!authorized) {
      reject('Unauthorized access to the user data');
    }
    resolve({
      id: id,
      username: 'admin'
    });
  });
}

try {
  getUserById(10)
    .then(user => console.log(user.username));
  console.log('next');

} catch (error) {
  console.log(`Caught by try/catch ${error}`);
}

let chars = Array.of('A', 'B', 'C');
console.log(chars.length); // 3
console.log(chars); // ['A','B','C']

let even = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 10; i += 2) {
      yield i;
    }
  }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);

let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];
console.log(customers.find(c => c.credit > 100));


const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
];

const index = products.findIndex(product => product.price > 1000);

console.log(index);

let box = {
  height: 10,
  width: 20,
  color: 'Red'
};

let style = {
  color: 'Blue',
  borderStyle: 'solid'
};

let styleBox = Object.assign({}, box, style);

console.log(styleBox);

let amount = +0,
  volume = -0;
console.log(Object.is(amount, volume));


const title = 'Jack and Jill Went Up the Hill';

console.log(title.startsWith('Jack'));
console.log(title.endsWith('Hill'));
console.log(title.includes('Script', 5));