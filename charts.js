// ==========================
// Progress Charts
// ==========================

const chartSection = document.createElement("section");

chartSection.innerHTML = `
<h2>📈 Progress History</h2>

<canvas id="benchChart"></canvas>

<br>

<canvas id="shotChart"></canvas>
`;

document.querySelector("main").appendChild(chartSection);


let history = JSON.parse(
    localStorage.getItem("progressHistory")
) || [];


function recordProgress(){

    history.push({

        date: new Date().toLocaleDateString(),

        bench:
        Number(localStorage.getItem("bench")) || 105,

        shot:
        Number(localStorage.getItem("shot")) || 21

    });


    localStorage.setItem(
        "progressHistory",
        JSON.stringify(history)
    );

}


function makeCharts(){

    if(history.length < 1) return;


    new Chart(
        document.getElementById("benchChart"),
        {
            type:"line",

            data:{
                labels:
                history.map(x=>x.date),

                datasets:[{

                    label:"Bench Press (lb)",

                    data:
                    history.map(x=>x.bench)

                }]
            }
        }
    );


    new Chart(
        document.getElementById("shotChart"),
        {
            type:"line",

            data:{
                labels:
                history.map(x=>x.date),

                datasets:[{

                    label:"Shot Put (ft)",

                    data:
                    history.map(x=>x.shot)

                }]
            }
        }
    );

}


recordProgress();

makeCharts();
