const questions = [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks Text Mark Language",
"Hyper Tool Multi Language"
],
answer:0
},

{
question:"What does CSS stand for?",
options:[
"Creative Style Sheet",
"Cascading Style Sheets",
"Computer Style Sheet",
"Colorful Style Sheet"
],
answer:1
},

{
question:"What does JS stand for?",
options:[
"Java Source",
"JavaScript",
"Just Script",
"JSON Script"
],
answer:1
},

{
question:"Which tag is used for the largest heading?",
options:[
"<h6>",
"<h1>",
"<head>",
"<heading>"
],
answer:1
},

{
question:"Which HTML tag creates a hyperlink?",
options:[
"<a>",
"<link>",
"<href>",
"<url>"
],
answer:0
},

{
question:"Which CSS property changes text color?",
options:[
"text-color",
"font-color",
"color",
"background-color"
],
answer:2
},

{
question:"Which CSS property controls text size?",
options:[
"text-size",
"font-size",
"size",
"text-style"
],
answer:1
},

{
question:"Inside which HTML tag do we write JavaScript?",
options:[
"<js>",
"<javascript>",
"<script>",
"<code>"
],
answer:2
},

{
question:"Which symbol is used for single-line comments in JavaScript?",
options:[
"//",
"##",
"<!-- -->",
"**"
],
answer:0
},

{
question:"Which keyword declares a variable in JavaScript?",
options:[
"int",
"variable",
"let",
"string"
],
answer:2
},

{
question:"Which method prints to the browser console?",
options:[
"display()",
"console.log()",
"show()",
"print()"
],
answer:1
},

{
question:"What does DOM stand for?",
options:[
"Document Object Model",
"Data Object Model",
"Digital Object Management",
"Document Oriented Method"
],
answer:0
},

{
question:"Which function selects an element by ID?",
options:[
"querySelector()",
"getElementById()",
"selectById()",
"findElement()"
],
answer:1
},

{
question:"Which storage keeps data after refresh?",
options:[
"sessionStorage",
"localStorage",
"cacheStorage",
"memoryStorage"
],
answer:1
},

{
question:"Which company developed JavaScript?",
options:[
"Google",
"Microsoft",
"Netscape",
"Apple"
],
answer:2
},

{
question:"Which HTML tag inserts an image?",
options:[
"<image>",
"<img>",
"<pic>",
"<src>"
],
answer:1
},

{
question:"Which operator is used for strict equality?",
options:[
"=",
"==",
"===",
"!=="
],
answer:2
},

{
question:"Which CSS property changes background color?",
options:[
"bg-color",
"background-color",
"color",
"background"
],
answer:1
},

{
question:"What does API stand for?",
options:[
"Application Programming Interface",
"Application Process Integration",
"Advanced Program Interface",
"Applied Programming Internet"
],
answer:0
},

{
question:"Which HTML tag creates a line break?",
options:[
"<lb>",
"<break>",
"<br>",
"<line>"
],
answer:2
},

{
question:"Which method converts JSON text to an object?",
options:[
"JSON.parse()",
"JSON.stringify()",
"JSON.object()",
"JSON.convert()"
],
answer:0
},

{
question:"Which keyword creates a constant variable?",
options:[
"let",
"var",
"const",
"fixed"
],
answer:2
},

{
question:"Which CSS property adds space inside an element?",
options:[
"margin",
"padding",
"spacing",
"border"
],
answer:1
},

{
question:"Which loop repeats while a condition is true?",
options:[
"for",
"foreach",
"while",
"repeat"
],
answer:2
},

{
question:"Which JavaScript event occurs when a button is clicked?",
options:[
"onchange",
"onhover",
"onclick",
"onfocus"
],
answer:2
}

];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");

function loadQuestion() {

    question.innerText =
    `Question ${currentQuestion + 1}/${questions.length}

${questions[currentQuestion].question}`;

    options.innerHTML = "";

    questions[currentQuestion].options.forEach((option,index)=>{

        const btn = document.createElement("button");

        btn.innerText = option;

        btn.onclick = ()=>{

            const allButtons =
            options.querySelectorAll("button");

            allButtons.forEach(button=>{
                button.disabled = true;
            });

            if(index === questions[currentQuestion].answer){

                btn.style.backgroundColor = "green";
                btn.style.color = "white";

                score++;

            }else{

                btn.style.backgroundColor = "red";
                btn.style.color = "white";

                allButtons[
                    questions[currentQuestion].answer
                ].style.backgroundColor = "green";

                allButtons[
                    questions[currentQuestion].answer
                ].style.color = "white";
            }

            localStorage.setItem("score",score);
        };

        options.appendChild(btn);

    });
}

function nextQuestion(){

    if(currentQuestion < questions.length - 1){

        currentQuestion++;

        loadQuestion();
    }
}

function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();
    }
}

document.getElementById("submitBtn").onclick = function(){

    localStorage.setItem("score",score);

    window.location.href = "result.html";
};

loadQuestion();