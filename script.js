new Vue({
  el: '#app',
  data: {
    newTodoText: '',
    selectedDoctor: '',
    todosDoctor1: [],
    todosDoctor2: []
  },
  methods: {
    addTodo: function() {
      if (this.newTodoText.trim() === '') {
        return;
      }
      if (this.selectedDoctor === 'doctor1') {
        this.todosDoctor1.push({ text: this.newTodoText });
      } else if (this.selectedDoctor === 'doctor2') {
        this.todosDoctor2.push({ text: this.newTodoText });
      }
      this.newTodoText = '';
    },
    deleteTodo: function(doctor, index) {
      if (doctor === 'doctor1') {
        this.todosDoctor1.splice(index, 1);
      } else if (doctor === 'doctor2') {
        this.todosDoctor2.splice(index, 1);
      }
    }
  }
});