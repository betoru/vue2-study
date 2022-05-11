<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr />
    <!-- App.vue 의 data : Todos를 TodoList 컴포넌트에 넘긴다. -->
    <TodoList @toggle-checkbox="appCheckbox" @click-delete="appDeleteTodo" />
    <Users />
  </div>
</template>
<script>
//자식컴포넌트 : TodoList
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";
import Users from "@/components/Users.vue";
export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    Users,
  },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    // addTodo(value) {
    //   this.todos.push({
    //     id: Math.random(),
    //     text: value,
    //     checked: false,
    //   });
    //   this.todoText = "";
    // },
    appCheckbox({ id, checked }) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    appDeleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index,1);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style></style>
