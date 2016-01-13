function submitMailTo( email ) {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var url = 'mailto:' + form.getAttribute("contact-addr") + '?subject=' + first + ' ' + last + ': ' + subject + '&body=' + message;

    var win = window.open(url, '_blank');
    win.focus();
}


var form = document.getElementById("contact-us");
form.addEventListener("submit", submitMailTo);
