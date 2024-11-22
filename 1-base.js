console.log("Hii");
var names = "Kartik";
console.log(names);
//JS is case sensitive
Names = "Singh"
console.log(Names);

function add() {
    console.log("Function is working");
   
}
add();
//VAR 
var Name = "Priya"; //have global scope

function exFunction(){
    if(true){
        var x = 5;
    }
    // console.log(x);
}
exFunction();
// console.log(x);

//LET - block scope
{
    let hi = "Hello"; //local scope can only be called here nd not outside {}
    var hii = "Hellooo";
    console.log(hi)
    console.log(hii);

}
console.log(hii);
