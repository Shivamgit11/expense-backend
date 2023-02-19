//search in dictionary

var obj = {
  a: "india",
  101: "USA",
  231: "Pakistan",
  arg: "Argentina",
  c: "Bhutan",
  X: "Srilanka",
  D: "India",
  34: "Australia",
};

let keys = ["a", "101", "231", "arg", "c", "x", "d", "34"];
let values = [
  "india",
  "USA",
  "Pakistan",
  "Argentina",
  "Bhutan",
  "Srilanka",
  "India",
  "Australia",
];

function searchcountry(cntry) {
  for (let i = 0; i < values.length; i++) {
    if (cntry == values[i]) {
      console.log(keys[i]);
      break;
    }
  }
}

searchcountry("india");
searchcountry("Pakistan");
searchcountry("nepal");

//intersection in disctionary

// {
//     "a" => "green",
//     "red",
//     "blue"
//     }

//     {
//     "b" => "green",
//     "yellow",
//     "red"
//     }
let akey = ["a", "0", "0"];
let avlaue = ["green", "red", "blue"];
let bkey = ["b", "0", "0"];
let bvalue = ["green", "yellow", "red"];
let c = [];
for (let i = 0; i < avlaue.length; i++) {
  for (let j = 0; j < bvalue.length; j++) {
    if (avlaue[i] == bvalue[j]) {
      console.log(akey[i]);
    }
  }
}

//Sum list of values with same key

let A = [
  { a: 5, b: 10, c: 90 },
  { a: 45, b: 78 },
  { a: 90, c: 10, d: 34 },
];

console.log(A);
