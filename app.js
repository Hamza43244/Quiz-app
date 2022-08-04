var questionsArray = [
    {
    question:"Full form of ram is?",
    answer:"random access memory",
    options: [
        "random access memory",
        "random actual memory",
        "right access memory",
        "none of the above",
    ]
},
{
    question:"Full form of CPU is?",
    answer:"central processing unit",
    options: [
        "central program unit",
        "central processing unit",
        "control panel unit",
        "none of the above",
    ]
},
{
    question:"Full form of E-Mail is?",
    answer:"electronic mail",
    options: [
        "electric mail",
        "easy mail",
        "electronic mail",
        "none of the above"
    ]
},
{
    question:"Full form of SEO is?",
    answer:"none of the above",
    options: [
        "save engine optimization",
        "secure engine optimization",
        "secret engine optimization",
        "none of the above"
    ]
},
];


function showQuestion(e){
    var questiuonElement = document.getElementById("questiuonElement");
    questiuonElement.innerHTML = questionsArray[e].question

    var optionElement = document.getElementsByClassName("optionElement p-2")

    for(var i = 0; i < questionsArray.length; i++){
        optionElement[i].innerHTML = questionsArray[e].options[i]
    }
}
var questionCount = 0
var socre = 0;
function nextQuestion(e){

    var nextBtn =document.getElementById("nextBtn")
    questionCount++;
    validate(questionCount)
    removeActiveClass()
    showQuestion(questionCount)
   
}

function putActiveClass(e){
    removeActiveClass()
    e.classList.add("active")
}

function removeActiveClass(){
var active = document.getElementsByClassName("active")
for(var i = 0 ; i < active.length;i++){
    active[i].classList.remove("active") 
}
}

function validate(){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML == questionsArray[e].answer ){
    socre +=10;
    }
     
}

