function change(){
temp = document.getElementById('input1').value;
document.getElementById('input1').value = document.getElementById('input2').value;
document.getElementById('input2').value = temp;
}
document.getElementById('button').addEventListener('click', change);