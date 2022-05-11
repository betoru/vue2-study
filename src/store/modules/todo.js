export default {
namespaced: true,
 //vuex 이전에 data와 쓰임새가 비슷한놈
 state:{
    todos:[
        {id:1, text:'buy a car', checked:false},
        {id:2, text:'play game', checked:false},
      ],
},
//state의 data를 바꿔주는 동기형
mutations:{
    ADD_TODO(state, value){
        state.todos.push({
            id: Math.random(),
            text: value,
            checked: false,  
        });
    },
    DELETE_TODO(state, id){
        state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    TOGGLE_TODO(state,{ id, checked }){
        const index = state.todos.findIndex((todo) => { 
            return todo.id === id;
          });
          state.todos[index].checked = checked;
    },
},
//비동기로 서버에 데이터베이스가 업데이트 후 콜백으로 mutaion을 호출하고 state 데이터를 변경 like a methods
//commit을 해준다는 개념은 mutation으로 올린다는 얘기
actions:{
    addTodo({commit},value){
        commit('ADD_TODO',value)
    },
    deleteTodo({commit},todoId){
        commit('DELETE_TODO',todoId);
    },
    toggleTodo({commit},payload){
        commit('TOGGLE_TODO',payload);

    }
},
//computed와 비슷
getters:{
    numberOfCompletedTodo: state => {
        return state.todos.filter((todo) => todo.checked).length;
    }
}   
}