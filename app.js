var a = 5;
var b = 20;
var c= a+b;
console.log(c);
var a = 3;
var b = 5;
var c = 7;
var d = b- a*b;
alert(d);
var age = +prompt("Enter Your age","Age :");
if(age>=18){
    alert("your are Eligible"+" "+age);
}
if(age!=18 && age>15){
    alert("Waiting list",+" "+age);
}
else{
    alert("Sorry! you are not eligible");
}
var arr=  ["Basit","Ali","ghous"];
console.log(arr);

document.write(a);
for (a = 1; a<=10; a++)
{
    document.write(a);
}
var palindrome, check = "";
palindrome = prompt("Enter Word for palindrome");
for(var i = palindrome.length-1; i>=0; i--)
{
    for(var j = 0; j<=palindrome.length-1-i; j++)
    {
        check +=palindrome[i];
        if(check[i] != palindrome[i])
        {
            break;
        }
    }
    if(check === palindrome){
        alert("Palindrome is : "+" "+check);
    }
    else{
        alert("Check is not : "+ "palidrme "+check);
    }
}
text = "The New Yorker magazine doesn't allow the phrase World War II";
for ( var i = 0; i<text.length;i++)
{
    if(text.slice(i,i+12) ===" World War II")
    {
        text = text.slice(0,i)+"Second World War"+text.slice(i+12);
        console.log(text);
    }
}
for (var i = 0; i < text.length; i++) {
     if (text.slice(i, i + 12) === "World War II") {
     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
     }
     }
function add(a, b)
{
    alert(a+b);
}
add(5,18);  
function btn(){
    var newname = document.getElementById("name");
    alert(newname.value);
    console.log(newname.value)
    var one = newname.value;
    newname.value="";
}
