function openSlideMenu(){
  document.getElementById('menu').style.width='250px';
  document.getElementById('content').style.marginRight='250px';


  document.getElementById('cross').setAttribute("class","fas fa-times");


  document.getElementById('crossf').setAttribute("onclick","closeSlideMenu()");
  document.getElementById('fix').classList.remove("slide");
  document.getElementById('fix').classList.add("pos");

}
function closeSlideMenu(){
  document.getElementById('fix').classList.remove("pos");
  document.getElementById('fix').classList.add("slide");
  document.getElementById('menu').style.width='0px';
  document.getElementById('content').style.marginRight='0px';
  document.getElementById('cross').setAttribute("class","fas fa-bars")
  document.getElementById('crossf').setAttribute("onclick","openSlideMenu()");
}


const splash=document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
  setTimeout(()=>{
    splash.classList.add('display-none');
  },2000);
})

function abtstyle(){
  var el=document.getElementById('abt')
  var ael=document.getElementById('about')
  el.classList.remove("abtp");
  ael.style.animation='none';
  void el.offsetWidth;
  el.classList.add("abtp");
  ael.style.animation=null;
}


