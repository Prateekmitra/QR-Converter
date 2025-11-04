const ev=document.getElementById('display')

function appendvalue(value){
  ev.value+=value}

function calculate(){
  ev.value=eval(ev.value)
}

function cleardisplay(){
  ev.value=''
}

function deletevalue(){
  ev.value=ev.value.slice(0,-1);
}