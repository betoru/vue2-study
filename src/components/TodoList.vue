<template>
  <div>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="todoListCheckbox"
    />
  </div>
</template>

<script>
//TodoList 의 자식 컴포넌트 Todo 를 import 한다.
import Todo from "@/components/Todo.vue";
export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    //value 이부분은 뭐지 표현은 상관없음
    todoListCheckbox(vals) {
      this.$emit("toggle-checkbox", vals);
    },
    //todoId 이부분은 뭐지 => 인자값을 받은 그냥 파라미터임
    // todoListDeleteTodo(todoId) {
    //   this.$emit("click-delete", todoId);
    // },
  },
};
</script>

<style></style>
