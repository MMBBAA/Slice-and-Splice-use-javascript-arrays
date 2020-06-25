function frankenSplice(arr1, arr2, n) {

let r1=[];
let r2=[];  

  r1=arr1.slice();
  r2=arr2.slice();

r2.splice(n, 0, ...r1);

  return r2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);