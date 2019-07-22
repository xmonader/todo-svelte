<script>
import {createEventDispatcher} from 'svelte'
import {todos} from '../store.js'
import {FILTER_ACTIVE, FILTER_ALL, FILTER_DONE, ENTER_KEY, ESCAPE_KEY} from '../consts.js'

const dispatch = createEventDispatcher()

export let newTodoText = ''



function addTodo(event) {
    console.log(event + event.key)
    if (event.key === ENTER_KEY) {
        console.log(`wishing to add ${newTodoText}`);
        let newTodoId = $todos? $todos[$todos.length -1 ].id + 1 : 1
        todos.update( (todolist) => [...todolist, {id:newTodoId, title:newTodoText, done:false}] ) 
        newTodoText= ''      

    }else if (event.key === ESCAPE_KEY) {
        console.log(`ok cancelling adding ${newTodoText} and resetting it`)
        newTodoText= ''      
    
    }
}
</script>
<style lang="scss">
	.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
  }
</style>
<input type="text" class="todo-input" placeholder="What needs to be done" bind:value={newTodoText} on:keydown={(event) => addTodo(event)} >
