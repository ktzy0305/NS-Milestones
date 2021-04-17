import { milestones } from "./data.js"

// Constants
const enlistment_date = new Date("Aug 11, 2020 00:00:00")
const ord_date = new Date("Aug 10, 2022 00:00:00")

// ORD Percentage
function NSCompletionPercentage(){
    var percentage_header = document.getElementById('completion-percentage');
    var percentage_bar = document.getElementById('percentage-bar');
    var now = new Date().getTime();
    var percentage_completed = (now - enlistment_date) / (ord_date - enlistment_date) * 100;
    percentage_bar.className = `c100 p${Math.floor(percentage_completed)} big green`;
    percentage_header.innerHTML = `${Math.round((percentage_completed + Number.EPSILON) * 100)/100}%`;
}

// Shows number of days completed
function DaysCompleted(){
    var days_completed_counter = document.getElementById('days_completed');
    var now = new Date().getTime();
    var days_completed = (now - enlistment_date) / (1000 * 60 * 60 * 24);
    days_completed_counter.innerHTML = `${Math.ceil(days_completed)}`
}

// Shows number of days to ORD
function DaysToORD(){
    var days_to_ord_counter = document.getElementById('days_to_ord');
    var now = new Date().getTime();
    var days_remaining = (ord_date - now) / (1000 * 60 * 60 * 24);
    days_to_ord_counter.innerHTML = `${Math.ceil(days_remaining)}`;
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
    // let content = document.getElementById("completed_content");
    var upcoming_milestones = GetUpcomingMilestones();
    // var completed_milestones = GetCompletedMilestones();

    for(var i = 0; i < upcoming_milestones.length; i++){
        upcoming_content.innerHTML += upcoming_milestones[i].render();
        upcoming_milestones[i].startCountdown();
    }

    // for(var i = 0; i < completed_milestones.length; i++){
    //     content.innerHTML += completed_milestones[i].render();
    //     completed_milestones[i].startCountdown();
    // }
    NSCompletionPercentage();
    DaysCompleted();
    DaysToORD();
}

export { GetCompletedMilestones };