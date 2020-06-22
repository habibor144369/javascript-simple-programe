var student1 = {id:144369, Roll:141, phone:17834438, name:"Habib Rahaman"};
var student2 = {id:145635, Roll:121, phone:176820237, name:"Ariyatul Safa"};
console.log(student1);
console.log(student2); 
//spacific property do chack methode 1...
var numebr = student1.phone;
console.log(numebr); 
//methode 2
var mama = student2["name"];
console.log(mama);

//methode 3..
var tata = "name";
var malta = student1[tata];
console.log(malta);
//change the properties velu...ruls-1 non variable set..
student1.phone = 777777;
console.log(student1);
//ruls -1 variable set..
var thomas = student2.phone;
student2.phone = 222222;
console.log(thomas);
//method 3..
student2["name"] = "jannatul safa";
console.log(student2);
// method 2 variable set..
var mohammod = student2["name"] = "jannatul";
console.log(mohammod);
// this is immortent method..varial set and full object show seyestem
var cousun = "name";
student2[cousun] = "jiniyatul safa";
console.log(student2)
// nwe property add ..
// methode 1
student1.movi = "colorful";
console.log(student1)
//methode 2
student2["movi"] = "distance";
console.log(student2);
//methode 3
var montaha = "historry"
student2[montaha] = "distance to be here";
console.log(student2);
