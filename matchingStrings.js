//SOLVED

function matchingStrings(strings, queries) {
  const result = [];

  for (let query of queries) {
    if (!strings.includes(query)) {
      result.push(0);
    } else {
      let match = 0;
      for (let string of strings) {
        if (query === string) {
          match++;
        }
      }
      result.push(match);
    }
  }
  return result;
}

const strings1 = ["aba", "baba", "aba", "xzxb"];
const queries1 = ["aba", "xzxb", "ab"];

matchingStrings(strings1, queries1);

// input stdin:
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

//output
//2, 1, 0
