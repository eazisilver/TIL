// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(fruits.join()); //apple,banana,orange
  console.log(fruits.join('|')); // apple|banana|orange
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(fruits.split(','));
  console.log(fruits.split(',', 2)); // 리턴 받을 배열 수
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse()); //본 배열도 정렬됨.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.slice(2, 5)); // 배열에서 원하는 부분만 return
  //array.splice(0, 2); // 본 배열에서 1,2를 삭제
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  console.log(students.find((student) => student.score === 90));
}

// Q6. make an array of enrolled students
{
  console.log(students.filter((student) => student.enrolled === true));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map()
  //:배열안에 들어있는 모든 요소들을 전달해준 callback함수로 호출하면서 callback함수에서 return되어진 값들로 대체함.
  console.log(students.map((student) => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
  // some()
  // :배열의 요소중에서 callback함수가 return이 turn인게 있는지 없는지 ture/false로 반환
  const result = students.some((student) => student.score < 50);

  // every()
  // :배열에 들어있는 모든 요소들이 조건을 충족하면 true, 아니면 false
  // 모든 배열의 조건이 만족되야할 때 쓸 것
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result);
}

// Q9. compute students' average score
{
  let temp = 0;
  students.forEach((student) => (temp += student.score));
  console.log(temp / students.length);

  // answer
  const result = students.reduce(function (prev, curr) {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // 함수형 프로그래밍
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  console.log(
    students
      .map((student) => student.score)
      .sort((a, b) => b - a) // desc
      .sort((a, b) => a - b) // asc
      .join()
  );
}
