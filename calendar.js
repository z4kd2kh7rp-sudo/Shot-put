// ==========================
// Workout Calendar System
// ==========================

const calendar = document.createElement("section");

calendar.innerHTML = `
<h2>📅 Training Calendar</h2>

<div id="calendarBox"></div>

`;

document.querySelector("main").appendChild(calendar);


function createCalendar(){

    const box = document.getElementById("calendarBox");

    const today = new Date();

    const workouts = [
        "Recovery",
        "Lower Body Strength",
        "Upper Body Strength",
        "Shot Put Technique",
        "Explosive Power",
        "Upper Power",
        "Throwing Day"
    ];


    box.innerHTML="";


    for(let i=0;i<30;i++){

        let date = new Date();

        date.setDate(today.getDate()+i);


        let day = date.getDay();

        let workout = workouts[day];


        let card=document.createElement("div");

        card.className="card";


        card.innerHTML=`

        <h3>
        ${date.toLocaleDateString()}
        </h3>

        <p>${workout}</p>

        <button onclick="completeCalendarWorkout(${i})">
        Complete
        </button>

        `;


        box.appendChild(card);

    }

}


function completeCalendarWorkout(day){

    localStorage.setItem(
        "calendar-"+day,
        "completed"
    );


    alert("Workout logged 🔥");

}


createCalendar();
