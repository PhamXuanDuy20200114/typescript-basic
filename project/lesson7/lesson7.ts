let count: number = 10;//ok

count = "Duy"; //Lỗi vì count có kiểu dữ liệu là số

console.log(count);

let arr1 = ["Duy", "Gau"]; //=> arr chỉ chứa cả string
arr1.push(10); //=> Lỗi vì arr chỉ chứa string

let arr2 = ["Duy", 10]; //=> arr2 chứa cả string và number
arr2.push(1); //=> OK vì arr2 chứa cả string và number