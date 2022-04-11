
let hourArm = document.getElementById('hr')
let minuteArm = document.getElementById('mn')
let secondArm = document.getElementById('sc')

setTimeout(function(){
    console.log('timeout');
}, 5000)

setInterval(function(){
    //console.log('interval');
    let myDate = new Date()

    let second = myDate.getSeconds() * 360 / 60
    let minute = myDate.getMinutes() * 360 / 60 + second / 60
    let hour = myDate.getHours() * 360 / 12 + minute / 12

    secondArm.style.transform = 'rotate(' + second + 'deg)' 
    minuteArm.style.transform = 'rotate(' + minute + 'deg)' 
    hourArm.style.transform = 'rotate(' + hour + 'deg)' 

}, 1000)
