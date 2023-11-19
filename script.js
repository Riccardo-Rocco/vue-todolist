
const app = Vue.createApp({
    data() {
      return {
        todos: [
          { text: 'Fare la spesa', done: false },
          { text: 'Studiare Vue', done: true }
        ],
        newTodo: ''
      };
    },
    methods: {
      removeTodo(index) {
        this.todos.splice(index, 1);
      },
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo, done: false });
          this.newTodo = '';
        }
      },
      toggleDone(index) {
        this.todos[index].done = !this.todos[index].done;
      }
    }
  });
  
  const vm = app.mount('#app');
  