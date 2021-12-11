/* Theme Change Code */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function validate() {
    var fname = document.getElementById("FName").value;
    var lname = document.getElementById("LName").value;
    var password = document.getElementById("Password").value;
    var cpassword = document.getElementById("CPassword").value;
    var username = document.getElementById("Username").value;
    var Age = document.getElementById("Age").value;

    if (!(/^[A-Z]+[a-z]*$/.test(fname))) {
        alert("First Letter Capital And Only Alphabet");
    }

    if (!(/^[A-Z]+[a-z]*$/.test(lname))) {
        alert("First Letter Capital And Only Alphabet");
    }


    if (!(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/.test(password))) {
        alert("Password must be at least 6 characters long, must start with an alphabet, must have at least 1 digit and 1 uppercase.");
    }
    else if (password != cpassword) {
        alert("Confirm Password Not Match");
    }

    if (!(/[a-z]{6,}/.test(username))) {
        alert("Username must start with an alphabet, must have at least 6 characters.");
    }

    var ageNumeric = +Age;

    if (ageNumeric < 18 || ageNumeric > 60) {
        alert("Age must be in between 18 to 60 years old");
    }

    var radios = document.getElementsByTagName('input');
    var value = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
        }
    }

    if (value == "") {
        alert("Select Education Status");
    }
}
