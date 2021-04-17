import { GetCompletedMilestones } from "../app.js"

window.onload = ()=>{
    let completed_content = document.getElementById("completed_content");
    var completed_milestones = GetCompletedMilestones();

    for(var i = 0; i < completed_milestones.length; i++){
        completed_content.innerHTML += completed_milestones[i].render();
        completed_milestones[i].startCountdown();
    }
};