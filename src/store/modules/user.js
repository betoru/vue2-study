import axios from "axios";

export default {
    namespaced : true,
    state:{
        //해당하는 컴포넌트의 computed에서 호출한다.
        users:[]
    },
    mutations:{
        //mutation은 컴포넌트 호출이 아닌 action에서 비동기로 받은 데이터를 mutation에 넘긴다.
        SET_USERS(state, users){
            console.log("mu")
            state.users = users
       }
    },
    actions:{
        //이 액션은 해당하는 컴포넌트의 method에서 호출
        getUsers({commit}){
            console.log('action');
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
                commit('SET_USERS',res.data);
            });
        },
    }
}