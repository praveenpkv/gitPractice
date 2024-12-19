const isEven = function (number) {
  return (number & 1) === 0;
}

const isOdd = function (number) {
  return (number & 1) === 1;
}

const sortOddEven = function (array) {
  return array.sort(function(x, y) {
	if(isOdd(x) && isEven(y)) return -1;
	if(isEven(x) && isOdd(y)) return 1;
	return x - y;
})
}

//  +++++++++++++   SECOND +++++++++

const sortArrayWRTFirstElement = function (array) {
  return array.sort(function(x, y) {
  return x[0] - y[0];
})
}

// ++++++++++++++ THIRD ++++++++++++

const sortArrayWithInnerArray = function (array) {
  return array.sort(function(x, y) {
	x.sort(function (x, y) { return x - y});
	y.sort(function (x, y) { return x - y});
  return x[0] - y[0];
})
}

// //  ++++++++++++ Fourth ++++++++

// const array = [[1], [8, 6, 7], [2, 3, 5, 1]];

// const sorting = function (element) {
//   return element.sort(function (x, y) {return x - y;})
// }

// array.map(sorting);


// //  +++++++++++  sort string with length

// const string = ["praveen", "ku", "verma", "shivam"];

// string.sort(function (x, y) {
// if(x.includes("r")) return -1;
// if(y.includes("r")) return -1;
//             return x.length - y.length;
// })


// if(x.includes("r")) return -1;
// if(y.includes("r")) return -1;








// nst string = ["praveen", "shiv ji", "ku", "verma", "shivam"];

// string.sort(function (x, y) {
//             if(x.includes("r")) return -1;
// })
// [ "verma", "praveen", "shiv ji", "ku", "shivam" ]

console.log(sortOddEven([34,59,20,12,8,1,97]));
console.log(sortArrayWRTFirstElement([[1,2],[0,8],[9,10]]));
console.log(sortArrayWithInnerArray([[1], [8, 6, 7], [2, 3, 5, 1]]));