const days=document.getElementById("days");
const hours=document.getElementById("hours");
const mins=document.getElementById("mins");
const secs=document.getElementById("secs");

const formatTime=(time)=>{
    return time<10? `0${time}`: time;
}

const updateCountdown=(deadline)=>{
    const currentTime=new Date();      //gets current time
    const timeDifference=deadline-currentTime;  // in miliseconds

    // calculate days,hours,mins,secs from timeDifference
    let calSecs=Math.floor(timeDifference/1000)%60;
    let calMin=Math.floor(timeDifference/1000/60)%60;
    let calHours=Math.floor(timeDifference/1000/60/60)%24;
    const calDays=Math.floor(timeDifference/1000/60/60/24);

    days.textContent=formatTime(calDays);
    mins.textContent=formatTime(calMin);
    hours.textContent=formatTime(calHours);
    secs.textContent=formatTime(calSecs);

    
}
const countDown=(targetDate)=>{
    setInterval(()=>updateCountdown(targetDate),1000);
}

const targetDate=new Date("October 8 2023 12:00");   //target date
countDown(targetDate);