$(function () {
    $('.material-tooltip-main').tooltip({
      template: `<div class="tooltip md-tooltip">
                    <div class="tooltip-arrow md-arrow"></div>
                    <div class="tooltip-inner md-inner" style="font-size:24px!important"></div>
                </div>`
    });
})

$(function () {
$('[data-toggle="tooltip"]').tooltip()
})

var ctxR1 = document.getElementById("radarChart1").getContext('2d');
var myRadarChart1 = new Chart(ctxR1, {
    type: 'radar',
    data: {
        labels: ["Python", "Angular", "Ionic", "JavaScript", "Jquery", "SQL", "MongoDB", "Tableau", "HTML", "CSS"],
        datasets: [{
            // label: "My First dataset",
            data: [70, 72, 68, 82, 85, 65, 70,60,72,75],
            backgroundColor: [
                // 'rgba(105, 0, 132, .2)',
                'rgb(255, 0, 0,.2)'
            ],
            borderColor: [
                // 'rgba(200, 99, 132, .7)',
                'rgb(255, 0, 0, .7)'
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        legend: { display: false },
        responsive: true,
            scale: {
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 100
                }
            }
        }
});

var ctxR2 = document.getElementById("radarChart2").getContext('2d');
var myRadarChart2 = new Chart(ctxR2, {
    type: 'radar',
    data: {
        labels: ["Data Analysis", "Data Visualization", "Programming", "Debugging", "Modeling", "Machine Learning"],
        datasets: [{
            // label: "My First dataset",
            data: [70, 54, 68, 63, 68, 70],
            backgroundColor: [
                // 'rgba(105, 0, 132, .2)',
                'rgb(255, 83, 73,.2 )'
            ],
            borderColor: [
                'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        legend: { display: false },
        responsive: true,
            scale: {
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 100
                }
            }
        }
});


var ctxR3 = document.getElementById("radarChart3").getContext('2d');
var myRadarChart3 = new Chart(ctxR3, {
    type: 'radar',
    data: {
        labels: ["Adobe XD", "Adobe Ps", "Adobe Illustrator", "MS PowerPoint", "MS Word"],
        datasets: [{
            // label: "My First dataset",
            data: [80, 62, 64, 80, 75],
            backgroundColor: [
                'rgba(240, 94, 35, .2)',
            ],
            borderColor: [
                'rgba(240, 94, 35, .7)',
            ],
            borderWidth: 2
        },
        ]
    },
    options: {
        legend: { display: false },
        responsive: true,
            scale: {
                ticks: {
                    beginAtZero:true,
                    suggestedMax: 100
                }
            }
        }
});


