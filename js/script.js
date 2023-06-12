const {createApp} = Vue;

let id = 0

createApp({
  data() {
    return {
      tasks: [
        {
          text: 'Fare la spesa',
          done: false
        },
        {
          text: 'Chiamare la doc',
          done: true
        },
        {
          text: 'Pagare le bollette',
          done: false
        },
        {
          text: 'Pulire casa',
          done: true
        },
        {
          text: 'Fare un backup',
          done: true
        },
        {
          text: 'Fare il pieno alla macchina',
          done: false
        },
      ]
    }
  },
  methods:{
    changeTaskStatus(index){
      this.tasks[index].done = !this.tasks[index].done; //al click gli assegno il suo opposto
    },
    deleteTask(index){
      this.tasks.splice(index,1)
    }
  }
}).mount('#app')