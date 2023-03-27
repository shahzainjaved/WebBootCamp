function btn(){
    var newname = document.getElementById('name');
    newname.value = "ghous"
    para.innerHTML = "Hello this is example";
}
btn()

function bigImage(){
    var image = document.getElementById("bur");
    image.className = "big";
}
function smallImage(){
    var image = document.getElementById("bur");
    image.className = "small";
}
function zoom(){
    var image = document.getElementById("bur");
    image.className = "zoom";
}
function readMore(){
    var text  = "fsdnflkslfklsjfsadkdcnlksdlfjsldjkfls ldclsjdjf fjdslkjflsdjk dkjflksjd;fkj;ke jfl;kwefmopkfp jfopekmls ss mjkfskfjpo mflaskjdfl jkfpwjjf jmfapwjfpmn kjjwajjfm ";
    document.getElementById("link").style.display="none";
    document.getElementById("paragraph").innerHTML += text
}
function placeAList() {
    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById('link1').style.display = "none";
    document.getElementById("lorisList").innerHTML += listToPlace;
}
function showMore(){
    //removes the link
    document.getElementById('link2').style.display="none";
    //shows the #more
    document.getElementById('more').style.display = "block";
}
function imageOver(){
    var image = document.getElementById("bur");
    image.src = "logo\\burger2.jfif";
}

function imageOverAfter(){
    var image = document.getElementById("bur");
    image.src = "logo\\burger1.jfif";
}
var paratext = document.getElementsByTagName("p");
paratext[2].style.color = "red";