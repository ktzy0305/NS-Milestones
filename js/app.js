// Variables
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Constants
const enlistment_date = new Date("Aug 11, 2020 00:00:00")
const ord_date = new Date("Aug 10, 2022 00:00:00")
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
    new Milestone("1️⃣ Month", new Date("Sep 11, 2020 00:00:00"), "timer-0003"),
    new Milestone("3rd Bookout 😲", new Date("Sep 12, 2020 17:00:00"), "timer-0004"),
    new Milestone("4th Bookout 🙃", new Date("Sep 17, 2020 16:00:00"), "timer-0005"),
    new Milestone("5th Bookout 🥴", new Date("Sep 25, 2020 19:00:00"), "timer-0006"),
    new Milestone("6th Bookout 😢", new Date("Oct 2, 2020 21:00:00"), "timer-0007"),
    new Milestone("7th Bookout 😷", new Date("Oct 9, 2020 19:00:00"), "timer-0008"),
    new Milestone("2️⃣ Months", new Date("Oct 11, 2020 00:00:00"), "timer-0009"),
    new Milestone("8th Bookout 🤔", new Date("Oct 17, 2020 12:00:00"), "timer-0010"),
    new Milestone("9th Bookout 😵", new Date("Oct 23, 2020 13:00:00"), "timer-0011"),
    new Milestone("End Of Field Camp 🏋️", new Date("Nov 2, 2020 20:00:00"), "timer-0012"),
    new Milestone("10th Bookout 🤭", new Date("Nov 6, 2020 15:00:00"), "timer-0013"),
    new Milestone("3️⃣ Months", new Date("Nov 11, 2020 00:00:00"), "timer-0014"),
    new Milestone("11th Bookout 🤠", new Date("Nov 12, 2020 12:00:00"), "timer-0015"),
    new Milestone("12th Bookout 😏", new Date("Nov 20, 2020 14:00:00"), "timer-0016"),
    new Milestone("13th Bookout 🤗", new Date("Nov 27, 2020 16:00:00"), "timer-0017"),
    new Milestone("BMT Passing Out Parade 💪", new Date("Dec 4, 2020 05:30:00"), "timer-0018"),
    new Milestone("14th Bookout 🚢", new Date("Dec 4, 2020 11:00:00"), "timer-0019"),
    new Milestone("4️⃣ Months", new Date("Dec 11, 2020 00:00:00"), "timer-0020"),
    new Milestone("15th Bookout 👋🏼", new Date("Dec 18, 2020 17:30:00"), "timer-0021"),
    new Milestone("16th Bookout 🎅🏽", new Date("Dec 24, 2020 12:30:00"), "timer-0022"),
    new Milestone("17th Bookout 🎆", new Date("Dec 31, 2020 11:00:00"), "timer-0023"),
    new Milestone("18th Bookout 😤", new Date("Jan 8, 2021 17:30:00"), "timer-0024"),
    new Milestone("5️⃣ Months", new Date("Jan 11, 2021 00:00:00"), "timer-0025"),
    new Milestone("19th Bookout 💳", new Date("Jan 15, 2021 18:30:00"), "timer-0026"),
    new Milestone("20th Bookout 🌊", new Date("Jan 22, 2021 18:00:00"), "timer-0027"),
    new Milestone("21st Bookout 🧭", new Date("Jan 29, 2021 18:00:00"), "timer-0028"),
    new Milestone("22nd Bookout 🤟🏼", new Date("Feb 5, 2021 18:00:00"), "timer-0029"),
    new Milestone("End Of FT 🙌🏻", new Date("Feb 5, 2021 18:00:00"), "timer-0030"),
    new Milestone("6️⃣ Months", new Date("Feb 11, 2021 00:00:00"), "timer-0031"),
    new Milestone("23rd Bookout 🧧", new Date("Feb 11, 2021 13:00:00"), "timer-0032"),
    new Milestone("24th Bookout 🛠️", new Date("Feb 19, 2021 18:30:00"), "timer-0033"),
    new Milestone("25th Bookout 💈", new Date("Feb 26, 2021 18:30:00"), "timer-0034"),
    new Milestone("26th Bookout 🏒", new Date("Mar 5, 2021 18:30:00"), "timer-0035"),
    new Milestone("7️⃣ Months", new Date("Mar 11, 2021 00:00:00"), "timer-0036"),
    new Milestone("27th Bookout 🎬", new Date("Mar 12, 2021 18:30:00"), "timer-0037"),
    new Milestone("28th Bookout 👕", new Date("Mar 19, 2021 18:30:00"), "timer-0038"),
    new Milestone("Operational Ready Date 🎉", new Date("Aug 10, 2022 18:00:00"), "timer-0100"),
]

// ORD Percentage
function NSCompletionPercentage(){
    var percentage_header = document.getElementById('completion-percentage');
    var percentage_bar = document.getElementById('percentage-bar');
    var now = new Date().getTime();
    var percentage_completed = (now - enlistment_date) / (ord_date - enlistment_date) * 100;
    percentage_bar.className = `c100 p${Math.floor(percentage_completed)} big green`;
    percentage_header.innerHTML = `${Math.round((percentage_completed + Number.EPSILON) * 100)/100}%`;
}

function DaysToORD(){
    var days_countdown = document.getElementById('days_to_ord');
    var now = new Date().getTime();
    var days_remaining = (ord_date - now) / (1000 * 60 * 60 * 24);
    days_countdown.innerHTML = `${Math.ceil(days_remaining)}`;
}

function NextMilestone(){
    var now = new Date().getTime();
    var mininum_distance = null;
    var next_milestone_index = 0;
    for(i = 0; i < milestones.length;  i++){
        var distance = milestones[i].date - now;
        if(distance > 0){
            if (mininum_distance == null){
                mininum_distance = distance;
                next_milestone_index = i;
            }
            else if(distance < mininum_distance){
                mininum_distance = distance;
                next_milestone_index = i;
            }
        }
    }
    var next_milestone_index = milestones[upcoming_milestone_index];
    return next_milestone_index;
}

function GetUpcomingMilestones(){
    var now = new Date().getTime();
    var upcoming_milestones = milestones.filter(milestone => milestone.date - now > 0);
    upcoming_milestones.sort(function(a, b){
        return a.date - b.date;
    });
    return upcoming_milestones;
}

function GetCompletedMilestones(){
    var now = new Date().getTime();
    var completed_milestones = milestones.filter(milestone => milestone.date - now < 0);
    completed_milestones.sort(function(a, b){
        return b.date - a.date;
    });
    return completed_milestones;
}

window.onload = ()=>{
    let upcoming_content = document.getElementById("upcoming_content");
    let content = document.getElementById("completed_content");
    var upcoming_milestones = GetUpcomingMilestones();
    var completed_milestones = GetCompletedMilestones();
    for(var i = 0; i < upcoming_milestones.length; i++){
        upcoming_content.innerHTML += upcoming_milestones[i].render();
        upcoming_milestones[i].startCountdown();
    }

    for(var i = 0; i < completed_milestones.length; i++){
        content.innerHTML += completed_milestones[i].render();
        completed_milestones[i].startCountdown();
    }
    NSCompletionPercentage();
    DaysToORD();
}