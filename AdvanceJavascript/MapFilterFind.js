const numbers = [2,3,4,5,7];
 const output = [];
 
 for (let index = 0; index < numbers.length; index++) {
     const element = numbers[index];
     const result = element* element;
      output.push(result);  
 }
 numbers.map(function(element){
     const res = element*element;
     output.push(res)
 })
 console.log(output);


 const result = numbers.map(x=>x*x)
 console.log(result)
 const result2 = numbers.filter(x=>x)
 console.log(result2)
 const result3 = numbers.find(x=>x)
 console.log(result3);