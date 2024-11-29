let flag;
let id = localStorage.getItem("id");
flag = !id?0:1;
const logIn = document.getElementById('logIn');
logIn.textContent = !id?'Professor Login':'Dashboard';
logIn.setAttribute('href', !id?'login.html':'dashboard.html');

const getStarted = document.getElementById('getStarted');
console.log(getStarted);
getStarted.addEventListener('click', ()=>{
    console.log("hello");
    let id = localStorage.getItem("id");
    window.location.href = !flag?"login.html":"dashboard.html"

})

