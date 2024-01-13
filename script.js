/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((employee)=>{
        if(employee.profession=="developer"){
            console.log(employee);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
        if(employee.profession=="developer"){
            console.log(employee);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newdata={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newdata);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
   arr.filter((employee)=>{
        if(employee.profession!=="admin"){
            console.log(employee);
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let anotherarr=[
        { id: 4, name: "rohit", age: "17", profession: "teacher" },
        { id: 5, name: "anuj", age: "21", profession: "student" },
        { id: 6, name: "ayush", age: "15", profession: "student" },
    ]
    let narr=arr.concat(anotherarr);
    arr=narr;
    console.log(arr);
  }