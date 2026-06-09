function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "AM";

    if(hours >= 12){
        ampm = "PM";
    }

    if(hours > 12){
        hours = hours - 12;
    }

    if(hours === 0){
        hours = 12;
    }

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;

    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString('en-US', options);
}

updateClock();

setInterval(updateClock, 1000);