
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/FireFox.png')
    {
        this.setAttribute('src', "images/chorme.png");
    }else{
        this.setAttribute('src', "images/FireFox.png");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if(!myName && myName === null) {
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla好棒！' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla好棒！' + storedName;
}

myButton.onclick = function() {
    setUserName();
}