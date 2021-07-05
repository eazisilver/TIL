// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'jieun',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};
rabbit.jump();

json = JSON.stringify(rabbit); // jump 함수는 포함되지 않음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
// 2. JSON to Object
// parse(json)
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj);
// obj.jump(); 없음!
console.log(rabbit.birthDate.getDate());
// birthDate는 string이기 때문에 콜백을 이용해서 new Date(value) 해줘야함.
console.log(obj.birthDate.getDate());
