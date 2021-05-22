import { HelpLink } from '../classes/helplink.js'

var resources = [
    new HelpLink("National Service Resources", "https://national-service.now.sh/", "../assets/icons/SAR21.svg"),
    new HelpLink("University Disruption", "https://www.reddit.com/r/singapore/comments/adi1on/heads_up_for_nsfs_trying_to_disrupt_ns_to_enter/", "../assets/icons/reddit.png"),
    new HelpLink("Confirm Enrolment (NUS)", "http://www.nus.edu.sg/oam/apply-to-nus/returning-national-servicemen/confirm-your-rns-reserved-course", "../assets/icons/NUS.png")
];

window.onload = ()=>{
    let resource_content = document.getElementById("resource_content");
    resources.forEach(resource => {
        resource_content.innerHTML += resource.render();
    });
}