var student = {id:20, roll:144369, name:"Habib", phone:1768280237};
var student2 = {id:20, roll:144369, name:"wahid", phone:176828};
console.log(student);
console.log(student2);
//mathode 1
var thoams = student2.name;
console.log(thoams);
//mathode 2
var mama = student["name"];
console.log(mama);
//mathode 3
var adventure = "phone";
var phone = student2[adventure];
console.log(phone);

//update containt
//mathod 1
student.name ="baga";
console.log(student);

//mathod 2
student2["name"] = "sm";
console.log(student2);

//mathosd 3 variable rekhe contant chang.
var kaka = "name";
student[kaka] = "manjo"
console.log(student)

//property add
student2.movi = "ironman3"
console.log(student2);
//propartir contant chang...
student2["movi"] ="horor movi"
console.log(student2);
//variale e man rekhe contant chang..
var lorem = "movi";
student2 [lorem] = "gost rider"
console.log(student2);

