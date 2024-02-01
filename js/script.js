function validateForm() {
    const fname = document.forms["message-form"]["firstname"].value;
    const lname = document.forms["message-form"]["lastname"].value;
    const phone = document.forms["message-form"]["Phonenumber"].value;

    if (fname == "" || lname == "" || phone == "") {
        if (fname == "") {
            document.getElementById("fname-error").innerHTML = "tidak boleh kosong";

        }
        
        if (lname == "") {
            document.getElementById("lname-error").innerHTML = "tidak boleh kosong";

        }
        
        if (phone == "") {
            document.getElementById("phone-error").innerHTML = "tidak boleh kosong";

        }
        return false;
    }
}

var slideindex = 1;
showDivs(slideindex);

function plusDivs(n) {
    showDivs((slideindex += n));
}

function showDivs(n) {
    var i;
    var imglist = document.getElementsByClassName("img-slideshow");
    if (n > imglist.length) slideindex = 1;
    else if (n < 1) slideindex = imglist.length;
    console.log(slideindex);
    
    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display ="none";
    }

    imglist[slideindex - 1].style.display = "block";
}

setInterval(() => {
plusDivs(1);
}, 2000)
 