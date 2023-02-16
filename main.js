
function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
}
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/One-Piece.jpg'){
        myImage.setAttribute('src', 'images/p186423_b_h10_ad.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/One-Piece.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var myName = prompt('Введите свой никнейм.');
    localStorage.setItem('Имя', myName);
    myHeading.textContent = 'One Pice - это любимое мной аниме,' + myName;
}
if(!localStorage.getItem('Имя')){
    setUserName();
}else{
    var storedName = localStorage.getItem('Имя');
    myHeading.textContent = 'Добро пожаловать в мир аниме One Piece, ' + storedName;
}
myButton.onclik = function(){
    setUserName();
}