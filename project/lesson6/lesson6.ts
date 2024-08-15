const count2 : number = 10; //OK

//count2 có kiểu dữ liệu số nên không thể gán giá trị kiểu dữ liệu khác
count2 = "Duy"; //Error

console.log(count1);


//Định nghĩa một kiểu dữ liệu tham chiếu như ví dụ dưới
let name2 : string[] = ["Duy", "Gau"];//ok
//arr chỉ bao gồm string
name2.push(10);// error