let img = document.querySelector('img');
img.onclick = function() {
    alert('别戳我，我怕疼。');
}

let myHeading = document.querySelector('h1');
setUserName();
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    myHeading.innerHTML = '小haohao的web之旅';
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '欢迎' + myName+'来到我的网站';
  }
}