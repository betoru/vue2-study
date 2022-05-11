<template>
  <div>
    UserList
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    console.log("create");
    //메서드에 선언된 action을 호출할 수 있음.
    this.getUsers();
  },
  //store.state를 통해 데이터를 바인딩 할거니까 computed가 필요해
  computed: {
    //...vuex-store("모듈",["메서드명"])
    ...mapState("user", ["users"]),
    //...mapState("모듈", {
    //    users: state =>
    //})
    // ...mapState("user", {
    //   users: (state) => state.users,
    // }),
    // users() {
    //   return this.$store.state.users;
    // },
  },
  methods: {
    // ...mapActions(["getUsers"]),
    //...mapActions("모듈", [메서드명])
    ...mapActions("user", ["getUsers"]),
    // getUsers() {
    //   console.log("method");
    //   this.$store.dispatch("getUsers");
    // },
  },
};
</script>

<style></style>
