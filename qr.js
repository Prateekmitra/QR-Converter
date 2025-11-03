const add=document.getElementById('new')
const bt=document.getElementById('bt')
const img = document.getElementById('qr-image');
 function qrcodegenerator(){
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+add.value;

    if (add.value.trim() === "") {
    alert("Please enter some text or URL!");
 }}


