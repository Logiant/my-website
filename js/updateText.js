//var roles = ["engineer", "scientist", "postdoc", "researcher"];
//var roles_count = 0;

var topics = ["cyber-physical", "emergent", "bio-inspired", "large-scale", "robotic", "swarm"];
var topics_count = 0;

delay = 4500;

function changeRoleText() {
//    $("#role").fadeOut(1000, function() {
//        $(this).text(roles[roles_count]).fadeIn(500);
//    });
//    roles_count < 4 ? roles_count++ : roles_count = 0;
    setTimeout(changeTopicText, delay);
}


function changeTopicText() {
    $("#topic").fadeOut(1000, function() {
        $(this).text(topics[topics_count]).fadeIn(500);
    });
    topics_count < 6 ? topics_count++ : topics_count = 0;
    setTimeout(changeRoleText, delay);
}

setTimeout(changeRoleText(), delay);

