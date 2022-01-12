// api url
const api_url =
    "https://api.github.com/users/samruddhideode/starred";
//--------------------------------------------------------------------------------------------------------
var prj_body = []

var images = ["images/projects/python.png",
    "images/projects/college.png",
    "images/projects/bakeforchange.png",
    "images/projects/yoga.jpg",
    "images/projects/thriftr.jpg",
    "images/projects/bitcoin.jpg",
];

var i;
// Defining async function for fetching api data
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();

    data.forEach(element => {
        addCard();
    });
    console.log(data);
    for (let d in data) {

        console.log(d, ' ', data[d].name, data[d].html_url, data[d].description);
        setText(data[d].name, data[d].description, d);
        setAttributes(data[d].html_url, d);
    }
}
//-----------------------------------------------PROJECTS--------------------------------------------

// Calling that async function
getapi(api_url);

//add a card for each project
function addCard() {
    let add_card = document.getElementsByClassName("container1")[1].getElementsByClassName("row")[0];
    add_card.innerHTML += '<div class="col-sm-4">' +
        '<div class="card" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">' +
        '<div class="card-body text-center">' +
        '<img src="" alt="project-img" class="projImg "></img>' +
        '<h5 class="card-title " > </h5>' +
        '<h5 class="body " > </h5>' +
        '<button type="button" class="btn btn-primary" onclick="" >Github</button>' +
        '</div>' +
        '</div>' +
        ' </div>';
}

function setText(projectName, description, number) {
    //set the title and text for each card
    let title = document.getElementsByClassName("container1")[1].getElementsByClassName("card")[number].getElementsByClassName("card-title")[0];
    title.innerHTML = projectName;
    let body = document.getElementsByClassName("container1")[1].getElementsByClassName("card")[number].getElementsByClassName("body")[0];
    body.innerHTML = description;
}

function setAttributes(link, number) {
    //to set the onclick attribute
    let button = document.getElementsByClassName("container1")[1].getElementsByClassName("btn")[number];
    link = "location.href='" + link + "'";
    button.setAttribute("onclick", link);
    
    //set image attribute 
    var img = document.getElementsByClassName("projImg")[number];
    img.src = images[number];
    console.log(img);
}
//-------------------------Achievements----------------------------------------
var achievements = [
    "Scholarships",
    "Girls Wanna Code",
    "Code For Good"
]
var about = [
    "Lokshahir AnnaBhau Sathe Scholarship (Rs.25,000) for excellent performance in the HSC Examination (2019) <br> Maulana Abdul Kalam Azad Scholarship (Rs.15,000) for excellent performance in SSC Examination (2017)",
    "I was selected for the Flipkart Girls Wanna Code '21 cohort. These selections were done on the basis of an online coding test with 3 questions to be solved in 90 minutes. Around 6000 girls from colleges all over India undertook this test and I was amongst the top 200 who were selected. For the next 4 months the selected students were offered help with the placement preparation (online coding practice and interview preparation) by some of the best SDEs at flipkart. ",
    "Code For Good is a 24 hr hackathon arranged by JP Morgan Chase where I collaberated with 6 more students from various parts of the country to come up with an innovative solution to help an NGO. I was one of the 60 winners from over 8000+ initial participants. During the 24 hrs I have gained many new skills, learnt more about the working of the firm and built my professional network while making a difference for an non-profit organization. As a winner of the hackathon I recieved a latest I-pad."
]
var images1 = [
    "images/achievements/scholarship.jpg",
    "images/achievements/flipkart.png",
    "images/achievements/jpmc.jpg"
]

// add a card for each achievement
for (i = 0; i < achievements.length; i++) {
    let add_card = document.getElementsByClassName("container4")[0].getElementsByClassName("row")[0];
    add_card.innerHTML +=
        '<div class="col-sm-4">' +
        '<div class="card" data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">' +
        '<div class="card-body text-center">' +
        '<img src="" alt="ach-img" class="achImg "></img>' +
        '<h5 class="card-title " > </h5>' +
        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="" > Read More!</button>' +
        '</div>' +
        '</div>' +
        '</div>';

}


for (i = 0; i < achievements.length; i++) {
    //set the title and text for each card
    let title = document.getElementsByClassName("container4")[0].getElementsByClassName("card")[i].getElementsByClassName("card-title")[0];
    title.innerHTML = achievements[i];
}

for (i = 0; i < achievements.length; i++) {
    //to set the read more modal for each project
    let button = document.getElementsByClassName("container4")[0].getElementsByClassName("btn")[i];
    let card_no = "func_card(" + i.toString() + ")";
    button.setAttribute("onclick", card_no);

    //set image attribute
    document.getElementsByClassName("achImg")[i].src = images1[i];
}

function func_card(number) {
    //get modal for each card on click
    let modal_class = document.getElementsByClassName("modal-body")[0];
    modal_class.innerHTML = about[number];
    let modal_title = document.getElementsByClassName("modal-title")[0];
    modal_title.innerHTML = achievements[number];
    console.log(modal_class, modal_title);
}

