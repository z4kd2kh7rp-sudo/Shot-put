// ==========================
// Goals System
// ==========================

const goals = {

workouts:0,

throws:0,

strength:0

};


function loadGoals(){

let saved =
localStorage.getItem("goals");

if(saved){

return JSON.parse(saved);

}

return goals;

}



function saveGoals(data){

localStorage.setItem(
"goals",
JSON.stringify(data)
);

}



function addWorkout(){

let data=loadGoals();

data.workouts++;

saveGoals(data);

checkAchievements();

}



function checkAchievements(){

let data=loadGoals();

let streak =
Number(localStorage.getItem("streak")) || 0;


if(data.workouts>=5){

localStorage.setItem(
"weekBadge",
"true"
);

}


if(streak>=30){

localStorage.setItem(
"eliteBadge",
"true"
);

}


}
