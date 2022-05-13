function checkOddEven(num) {
  if (typeof num === 'string') {
    throw new Error('n must be a number');
  }
  return num % 2 === 0 ? 'even' : 'odd';
}

function sum(a, b) {
  return a + b;
}

function countStr(a) {
  return a.length;
}

function weekend(a) {
  console.log(a);
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  for (let i = 0; i < days.length; i++) {
    if (a == days[i]) {
      a = i;
    }
  }
  console.log(a);
  if (a === 6 || a === 0) {
    return true;
  } else {
    return false;
  }
  //   return new Date().getDay() === 6 || new Date().getDay() === 0 ? true : false;
}

function leapYear(a) {
  const isLeap = new Date(a, 1, 29).getMonth() == 1;
  return isLeap;
}

module.exports = {
  checkOddEven,
  sum,
  countStr,
  weekend,
  leapYear,
};
