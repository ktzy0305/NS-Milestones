import { formatDate } from "./dateformatter.js"

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

export { Milestone };