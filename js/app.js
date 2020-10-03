var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const zeroPad = (num, places) => String(num).padStart(places, '0');

function formatDate(date){
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}:${zeroPad(date.getSeconds(), 2)}`;
}

class Milestone{
    constructor(event_name, date, timer_id){
        this.event_name = event_name;
        this.date = date;
        this.timer_id = timer_id;
    }

    render(){
        return `<div class="col-4 col-md-6 col-xs-12">
                    <div class="card">
                        <div class="card-content pb-3">
                            <h3 class="card-title">${this.event_name}</h3>
                            <p>Date: ${formatDate(this.date)}</p>
                            <div class="countdown-timer" id="${this.timer_id}">
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    startCountdown(){
        var countdown = setInterval(()=>{
            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = this.date - now;
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            document.getElementById(this.timer_id).innerHTML = days + " days<br> " + hours + " hours "
            + minutes + " minutes " + seconds + " seconds";
                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById(this.timer_id).innerHTML = "<b>COMPLETED</b>";
            }
        }, 1000);
    }
}

var milestones = [
    new Milestone("1st Bookout 😍", new Date("Aug 28, 2020 09:00:00"), "timer-0001"),
    new Milestone("2nd Bookout 🔥", new Date("Sep 5, 2020 15:00:00"), "timer-0002"),
    new Milestone("1 Month In NS 1️⃣", new Date("Sep 11, 2020 00:00:00"), "timer-0003"),
    new Milestone("3rd Bookout 😲", new Date("Sep 12, 2020 17:00:00"), "timer-0004"),
    new Milestone("4th Bookout 🙃", new Date("Sep 17, 2020 16:00:00"), "timer-0005"),
    new Milestone("5th Bookout 🥴", new Date("Sep 25, 2020 19:00:00"), "timer-0006"),
    new Milestone("6th Bookout 😢", new Date("Oct 2, 2020 21:00:00"), "timer-0007"),
    new Milestone("7th Bookout 😷", new Date("Oct 9, 2020 21:00:00"), "timer-0008"),
    new Milestone("2 Months In NS 2️⃣", new Date("Oct 11, 2020 00:00:00"), "timer-0009"),
    new Milestone("Last Day in Tekong ✨", new Date("Dec 4, 2020 00:00:00"), "timer-0010"),
    new Milestone("BMT Passing Out Parade 💪", new Date("Dec 5, 2020 12:00:00"), "timer-0011"),
    new Milestone("Operational Ready Date 🎉", new Date("Aug 10, 2022 18:00:00"), "timer-0012"),
]

/*
var ring = document.getElementsByTagName('path')[0];
// var range = document.getElementsByTagName('input')[0];
var text = document.getElementsByTagName('text')[0];
var toRadians = Math.PI / 180;
var r = 100;

function draw() {
  // Update the wheel giving to it a value in degrees,
  // getted from the percentage of the input value
  // a.k.a. (value * 360) / 100
  //   var degrees = range.value * 3.5999;
  var degrees = 30 * 3.5999; //Hardcoded
  // Convert the degrees value to radians
  var rad = degrees * toRadians;
  // Determine X and cut to 2 decimals
  var x = (Math.sin(rad) * r).toFixed(2);
  // Determine Y and cut to 2 decimals
  var y = -(Math.cos(rad) * r).toFixed(2);
  // The another half ring. Same as (deg > 180) ? 1 : 0
  var lenghty = Number(degrees > 180);
  // Moveto + Arcto
  var descriptions = ['M', 0, 0, 'v', -r, 'A', r, r, 1, lenghty, 1, x, y, 'z'];
  // Apply changes to the path
  ring.setAttribute('d', descriptions.join(' '));
  // Update the numeric display
  text.textContent = range.value;
}

// Translate the center axis to a half of total size
ring.setAttribute('transform', 'translate(' + r + ', ' + r + ')');
// Bind the change event to the input
range.addEventListener('input', draw);
// Force to init the first time;

*/

window.onload = ()=>{
    let content = document.getElementById("content");
    for(var i = 0; i < milestones.length; i++){
        content.innerHTML += milestones[i].render();
        milestones[i].startCountdown();
    }
}