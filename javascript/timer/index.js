class Timer {
    constructor (durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);
    };

    pause = () =>{
        clearInterval(this.interval);
        if(this.onComplete){
            this.onComplete();
        }
    }

    tick = () =>{
        if (this.timeRemaining <= 1){
            this.pause()
        }
    this.timeRemaining = this.timeRemaining - 0.05;
    if (this.onTick){
        this.onTick();
        }  
    };

    get timeRemaining () {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
};

const durationInput = document.querySelector("#duration-input");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer (durationInput, startButton, pauseButton, {
    onStart (totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter);
        
    },
    onComplete(){
        console.log("Timer completed");
    }
});


