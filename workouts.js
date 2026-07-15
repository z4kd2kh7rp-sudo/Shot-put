const weeklyWorkouts = {
  monday: {
    title: "Lower Body Strength",
    exercises: [
      "Back Squat - 5×5",
      "Romanian Deadlift - 4×8",
      "Walking Lunges - 3×10 each leg",
      "Plank - 3×60 sec",
      "Stretch - 10 min"
    ]
  },

  tuesday: {
    title: "Upper Body Strength",
    exercises: [
      "Bench Press - 5×5",
      "Incline Dumbbell Press - 3×10",
      "Pull-ups or Lat Pulldowns - 3×8",
      "Shoulder Press - 3×10",
      "Face Pulls - 3×15"
    ]
  },

  wednesday: {
    title: "Shot Put Technique",
    exercises: [
      "10 Standing Throws",
      "15 Glide Drills",
      "10 Full Glides",
      "Medicine Ball Chest Pass - 3×10",
      "Hip Mobility - 10 min"
    ]
  },

  thursday: {
    title: "Explosive Power",
    exercises: [
      "Box Jumps - 5×5",
      "Hang Cleans - 5×3",
      "Push Press - 4×5",
      "Farmer Carries - 4×40 yd"
    ]
  },

  friday: {
    title: "Upper Body Power",
    exercises: [
      "Speed Bench - 8×3",
      "Bent-over Rows - 4×8",
      "Triceps Extensions - 3×12",
      "Band Pull-Aparts - 3×20"
    ]
  },

  saturday: {
    title: "Throwing Day",
    exercises: [
      "20 Full Throws",
      "10 South Africans",
      "Medicine Ball Slams - 3×15",
      "Mobility & Stretching"
    ]
  },

  sunday: {
    title: "Recovery",
    exercises: [
      "30-minute Walk",
      "Foam Rolling",
      "Full Body Stretch",
      "Recovery"
    ]
  }
};

function loadTodaysWorkout() {

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  const today = days[new Date().getDay()];
  const workout = weeklyWorkouts[today];

  document.getElementById("workoutTitle").textContent =
    workout.title;

  const list = document.getElementById("exerciseList");
  list.innerHTML = "";

  workout.exercises.forEach(exercise => {

    const li = document.createElement("li");

    li.textContent = exercise;

    list.appendChild(li);

  });

}

document.addEventListener("DOMContentLoaded", loadTodaysWorkout);
