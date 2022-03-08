
let timeOut;
function ShowTime () {
timeOut = setTimeout('TimeoutTrigger()' , 5000);
document.getElementById('ShowTime').innerHTML = 'Then timeout has started';

}