let obj = { name: "Duy" }

obj.address = "Hanoi"

//Ok

//Nên định nghĩa các object với các key cố định trước, không nên thêm key mới sau khi object đã được khởi tạo

let obj1: { name: string };
obj1 = { name: "Duy" }
//ok
obj1.address = "Hanoi" //Lỗi do obj1 chỉ có key name