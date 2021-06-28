/*----Typing Effect-----*/

//ES6 Classes
class TypeWriter{
    constructor(txtElement, cursorElement, words , wait=2000){
        this.txtElement=txtElement;
        this.cursorElement=cursorElement;
        this.words=words;
        this.wait=parseInt(wait,10);
        this.txt='';
        this.wordIndex=0;
        this.type();
        this.isDeleting=false;
    }

    type(){
        if(!(this.cursorElement.classList.contains('typing'))) {
            this.cursorElement.classList.add('typing');
        }
        //Current index of word
        const current=this.wordIndex % this.words.length;
        //Get full text of current word
        const fullTxt=this.words[current];

        //Check if deleting
        if(this.isDeleting){
            //Remove char
            this.txt=fullTxt.substring(0,this.txt.length-1);
        }
        else{
            //Add char
            this.txt=fullTxt.substring(0,this.txt.length+1)
        }
        
        //Insert txt into element
        this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`

        //Initial Type Speed
        let typeSpeed=200;

        if(this.isDeleting){
            typeSpeed/=2;
        }

        //If word is complete
        if(!this.isDeleting && this.txt===fullTxt){
            this.cursorElement.classList.remove('typing');
            //Make a pause at end
            typeSpeed=this.wait;
            //Set delete to true
            this.isDeleting=true;
        }
        else if(this.isDeleting && this.txt===''){
            this.cursorElement.classList.remove('typing');
            this.isDeleting=false;
            //Move to next word
            this.wordIndex++;
            //Pause a little bit before start typing
            typeSpeed=500;
        }
        setTimeout(()=>this.type(),typeSpeed);
    }

}


//Init on DOM Load
document.addEventListener('DOMContentLoaded',init);

//Init App
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words=JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');
    const cursorElement = document.querySelector('.cursor');

    //Init TypeWriter
    new TypeWriter(txtElement, cursorElement, words , wait);

}

/*-----------------------------------------------------------------------------------------------------------*/

/* Change Navbar upon scrolling*/

const  navbar = document.querySelector('.navbar');
const  navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = "#404c52";
        navbar.style.transition = "all .6s";
        navLink.forEach((item) => {
            item.style.color = "white";
            item.style.transition = "all .6s";
        }) 
    }
    else {
        navbar.style.background = "none";
        navLink.forEach((item) => {
            item.style.color = white;
        }) 
    }
})