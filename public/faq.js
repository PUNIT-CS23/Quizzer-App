
const data = {
    title:"Do you have a question?",
    subtitle:"Our FAQs may have the answer.",
    faq:[
        {
            "q":"How Quiz will be benificial?",
            "a":"This Quiz will help you to practice multiple questions. You can judge your preparation by giving quiz."
        },
        {
            "q":"Quiz contains which type of questions?",
            "a":"Questions are from your weekly assignments and Previous year papers."
        },
        {
            "q":"How to signup ?",
            "a":"Go to login and signup page , create account in > signup section by > entering unique Username and password > Click on Pay > After Payment of 29 rupees > Go lo login page and Do login."
        },
        {
            "q":"Contact Us?",
            "a":"You can contact us using Gmail : business.project.data@gmail.com "
        },
        // {
            // "q":"Lorem ipsum dolor sit amet?",
            // "a":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt viverra lorem, at volutpat risus pellentesque vitae. Quisque suscipit elit a elit posuere, vitae faucibus nisl finibus. Vivamus congue pellentesque felis, sed pretium nunc. Aliquam porttitor tortor nec facilisis congue. Nunc dignissim et felis non auctor. Duis mi justo, pharetra."
        // }
    ],
   cta:{
        label:"Discover More",
        url:"/Quiz/about"
    },
    icons:
        {
            faq:'<svg id="faq_icon"   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><ellipse  cx="33" cy="47.81" rx="3.67" ry="3.45"/><path  d="M33,14.74A10.79,10.79,0,0,0,22,25.27a2.75,2.75,0,0,0,5.5,0,5.52,5.52,0,0,1,11,0A5.39,5.39,0,0,1,33,30.53a2.69,2.69,0,0,0-2.75,2.63v6.59a2.75,2.75,0,0,0,5.5,0V35.46A10.64,10.64,0,0,0,44,25.27,10.79,10.79,0,0,0,33,14.74Z"/></svg>',
            close:'<svg id="close_icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path  d="M33,65.94A32.94,32.94,0,1,1,66,33,33,33,0,0,1,33,65.94Zm0-62.3A29.53,29.53,0,0,0,3.37,33a29.63,29.63,0,0,0,59.26,0A29.53,29.53,0,0,0,33,3.64Z"/><path  d="M21,46.55a1.54,1.54,0,0,1-1.09-2.63l24-24a1.54,1.54,0,1,1,2.18,2.18l-24,24A1.53,1.53,0,0,1,21,46.55Z"/><path  d="M44.75,46.3a1.52,1.52,0,0,1-1.08-.45L20.16,22.33a1.54,1.54,0,1,1,2.17-2.18L45.84,43.67a1.54,1.54,0,0,1-1.09,2.63Z"/></svg>'
        }
}
var baloon_container;
var baloon;
document.addEventListener("DOMContentLoaded", function() {
    append_chat();
    baloon_container = document.querySelector('.baloon_container');
    baloon = document.querySelector('.baloon_container .baloon');

    setTimeout(()=>{
        baloon_container.classList.add('show');
    },200)

    open_close__handler(baloon,baloon_container);
    
    questions_open_close__handler();
   
});

function questions_open_close__handler() {
    const questions = document.querySelectorAll('.qa');

    questions.forEach((question)=>{
        question.addEventListener('click',e=>{
            accordion(question)
           
        });
        question.addEventListener('keydown',e=>{
            if((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)){
                accordion(question)
            }
          
        })
    })
}

function  open_close__handler(baloon,baloon_container){
    baloon.addEventListener('click',e=>{
        baloon_container.classList.toggle('close');
        close_on_scroll__handler(!baloon_container.classList.value.includes('close'));
    });

    baloon.addEventListener('keydown',e=>{
        if((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)){
            baloon_container.classList.toggle('close');
            close_on_scroll__handler(!baloon_container.classList.value.includes('close'));
        }
    });
}

function close_on_scroll(){
    baloon_container.classList.add('close')
    window.removeEventListener("scroll",close_on_scroll,false)
}

function close_on_scroll__handler(is_open){
    if (is_open){
        window.addEventListener('scroll',close_on_scroll,false)
    }else{
        window.removeEventListener("scroll",close_on_scroll,false)
    }
}

function accordion(question){
    if(question.classList.contains('close')){
        question.classList.remove('close')
        var height = question.querySelector('.a > div').offsetHeight;
        question.querySelector(".a").style.height=`${height + 15}px`;
    }else{
        question.classList.add('close')
        question.querySelector(".a").style.height = 0;
    }
}

function append_chat(){
    var faqs="";
    data.faq.forEach((faq)=>{
        faqs+=
       `<div class="qa  bb close" tabindex="0" >
            <div class="q"><h3>${faq.q}</h3></div>
            <div class="a" style="height: 0px;">
                <div>
                ${faq.a}
                </div> 
            </div>
        </div>
        `
    });
    var body = document.querySelector('body');
    var div = document.createElement('div');
    div.className = "baloon_container close";
    div.innerHTML = ` 
        <div tabindex="0" class="baloon ">
            ${data.icons.faq}
            ${data.icons.close}  
        </div>
        <div class="faq_container">
            <div class="faq_title">
                <h3>${data.title}</h3>
                <p>${data.subtitle}</p>
            </div>
            <div class="faq_scroll">
                ${faqs}
                <a href="${data.cta.url}" class="cta" aria-label="${data.cta.label}">${data.cta.label}</a>
            </div>
        </div>`;
    
    body.appendChild(div);
}



