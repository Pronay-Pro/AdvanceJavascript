const student = [
    {age:32, name:"Deepjol"},
    {age:31, name:"Deepjol"},
    {age:34, name:"Deepjol"},
    {age:35, name:"Deepjol"},
];
const Name =[];
// for (let index = 0; index < student.length; index++) {
//     const element = student[index];
//     Name.push(element.name);
    
// }
// console.log(Name)

// student.map(function(index){
//     const output = index
//     Name.push(output.name)
// })
// console.log(Name)

const stu = student.map(Element=>Element.age)
console.log(stu)