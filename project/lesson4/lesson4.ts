const sum3 = (a: number, b: number) => {
  return a + b;
}

//no error
console.log("Check sum3:" + sum3(10,5));//15


//error
console.log("Check sum3:" + sum3(10,"5"));