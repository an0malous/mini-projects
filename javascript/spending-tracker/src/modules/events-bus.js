const eventsBus = {
    events: {},
    subscribe(eventName, handler){
  
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(handler)
    },
    unsubscribe(eventName, handler){
      if(this.events[eventName]) {
        for(let i = 0; i < this.events[eventName].length; i++){
          if(this.events[eventName][i] === handler){
            this.events[eventName].splice(i, 1);
              return
            }
          };
        }
      },
    publish(eventName, data){
      if(this.events[eventName]){
          this.events[eventName].map(eventFn=>eventFn(data));
      }
    }
  };
  
  export default eventsBus;