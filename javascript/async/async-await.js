// promise chaining 을 async,await으로 간편하게 사용할 수 있음
// syntatic sugar: 기존에 존재하고 있는 것을 감싸서 조금 더 간편하게 사용할 수 있는 것

// async & await
// promise를 사용한 깔끔한 스타일

// 1. async : promise를 감싸고 있는 것. promise로 반환!
async function fetchUser() {
  // do network request in 10 secs...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(2000);
  //   throw 'error';
  return '🍎';
}
async function getBanana() {
  await delay(1000);
  return '🍌';
}

function getBananaPromise() {
  return delay(2000).then(() => '🍌');
}

async function pickFruits() {
  // 1. promise 사용했을 때 (콜백지옥)
  //   return getApple().then((apple) => {
  //     return getBanana().then((banana) => `${apple} + ${banana}`);
  //   });

  // 2. 직렬
  //   const apple = await getApple();
  //   const banana = await getBanana();

  // 3. 병렬
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
// 3-1. Promise.all
function pickAllFruits() {
  // promise를 병렬적으로 다 받을 때까지 모아줌.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

// 3-2. Promise.race
function pickOnlyOne() {
  // param 배열에 전달된 promise중에서 가장 먼저 값을 전달받은 것을 리턴
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
