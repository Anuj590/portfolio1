var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbw4tQEXcHFwMENHQgRnSdt6Z9PMeRRXXq6tTkNwBdbPSa2-aaWtNiCOUKTh7NzEAB9GSQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully";
            setTimeout(function(){
                msg.innerHTML = "";
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


var show_active = document.getElementById('show_active');
var show_if = document.getElementById('show_if');

var i = 0;
show_active.addEventListener('click', ()=>{
    if(i%2==0){
        show_if.style.display='grid';
        show_active.innerText = 'Show Less'
    }if(i%2!=0){
        show_if.style.display='none';
        show_active.innerText = 'Show More'
    }
    i++;
    console.log(i);
})