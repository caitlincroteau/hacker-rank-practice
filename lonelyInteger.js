//SOLVED

function lonelyinteger(a) {
  a.sort();
  let cur = a[0];
  let next = a[1];

  if (cur !== next) {
    return cur;
  }

  if (a[a.length - 1] !== a[a.length - 2]) {
    return a[a.length - 1];
  }

  for (let i = 2; i < a.length - 1; i += 2) {
    cur = a[i];
    next = a[i + 1];
    if (cur !== next) {
      return cur;
    }
  }
}

const a1 = [1, 1, 2, 3, 4, 3, 2, 1];
//sorted a = [1, 1, 2, 2, 3, 3, 4];
//result = 4

const a2 = [5, 5, 7, 8, 9, 6, 6, 7, 9];
//sorted a = [5, 5, 6, 6, 7, 7, 8, 9, 9];
//result = 8d

console.log(lonelyinteger(a1));
console.log(lonelyinteger(a2));
