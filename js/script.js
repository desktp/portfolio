function addEvent(evnt, elem, func) {
  if (elem.addEventListener)  // W3C DOM
    elem.addEventListener(evnt,func,false);
  else if (elem.attachEvent) { // IE DOM
    elem.attachEvent("on"+evnt, func);
  }
  else { // No much to do
    elem[evnt] = func;
  }
}

function removeClass(elem, className){
  elem.className = elem.className.replace(className, "");
}

function addClass(elem, className){
  elem.className = elem.className + " " +  className;
}

function onclick(evt){
  if(this.href.substring(0,4) != 'http')
  {
    evt.preventDefault();
    ChangeActiveFrame(this.hash.substring(1));
  } 
}

function ChangeActiveFrame(activeDiv){
  var activeButton = activeDiv.substring(8);
  var buttonToChange = document.getElementById(activeButton);
  var otherButtons = document.getElementsByClassName('button');

  var otherDivs = document.getElementsByClassName('frame');

  for (var i = otherDivs.length - 1; i >= 0; i--) 
  {
    removeClass(otherDivs[i],"show");
  };
  
  for (var i =otherButtons.length - 1; i >= 0; i--)
  {
    otherButtons[i].style.backgroundImage = "url('img/buttons/"+otherButtons[i].id+"-default.gif')";
    document.getElementById(otherButtons[i].id + '-title').style.top = '100px';
  };

  if(activeButton != ""){
    buttonToChange.style.backgroundImage = "url('img/buttons/"+buttonToChange.id+"-active.gif')";

    addClass(document.getElementById(activeDiv), "show");
    document.getElementById(activeButton + '-title').style.top = '70px';
  }
}

var anchors = document.getElementsByTagName('a');

for(var i in anchors){
  if(!anchors[i]['href']) continue;
  addEvent("click", anchors[i], onclick);
}

