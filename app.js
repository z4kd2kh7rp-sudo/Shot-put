// ==========================
// Shot Put Trainer App
// ==========================

// ---------- Load Saved PRs ----------
let bench = Number(localStorage.getItem("bench")) || 105;
let squat = Number(localStorage.getItem("squat")) || 245;
let shot = Number(localStorage.getItem("shot")) || 21;
let streak = Number(localStorage.getItem("streak")) || 0;

updateDashboard();

// ---------- Save PR Button ----------
document.getElementById("savePRs").addEventListener("click", () => {

    bench = Number(document.getElementById("benchInput").value) || bench;
    squat = Number(document.getElementById("squatInput").value) || squat;
    shot = Number(document.getElementById("shotInput").value) || shot;

    localStorage.setItem("bench", bench);
    localStorage.setItem("squat", squat);
    localStorage.setItem("shot", shot);

    updateDashboard();

    alert("Progress Saved!");
});

// ---------- Dashboard ----------
function updateDashboard(){

    document.getElementById("benchGoal").textContent =
        bench + " / 135 lb";

    document.getElementById("shotGoal").textContent =
        shot + " / 30 ft";

    document.getElementById("streak").textContent =
        streak + " 🔥";

    document.getElementById("benchProgress").value = bench;
    document.getElementById("squatProgress").value = squat;
    document.getElementById("shotProgress").value = shot;

    unlockBadges();

}

// ---------- Workout Complete ----------
document.getElementById("completeWorkout").addEventListener("click",()=>{

    streak++;

    localStorage.setItem("streak",streak);

    updateDashboard();

    alert("Workout Completed!");

});

// ---------- Badge Unlocks ----------
function unlockBadges(){

    if(streak>=1){

        document
        .getElementById("badgeWorkout")
        .classList.add("unlocked");

    }

    if(streak>=7){

        document
        .getElementById("badgeWeek")
        .classList.add("unlocked");

    }

    if(bench>=135){

        document
        .getElementById("badgeBench")
        .classList.add("unlocked");

    }

    if(shot>=30){

        document
        .getElementById("badgeShot")
        .classList.add("unlocked");

    }

}

// ---------- Rest Timer ----------
let timer;

function startTimer(seconds){

    clearInterval(timer);

    let remaining = seconds;

    update();

    timer = setInterval(()=>{

        remaining--;

        update();

        if(remaining<=0){

            clearInterval(timer);

            alert("Rest Time Over!");

        }

    },1000);

    function update(){

        const mins=Math.floor(remaining/60);
        const secs=remaining%60;

        document.getElementById("timerDisplay").textContent =
            String(mins).padStart(2,"0") +
            ":" +
            String(secs).padStart(2,"0");

    }

}

// ---------- Service Worker ----------
if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("service-worker.js");

});

}
