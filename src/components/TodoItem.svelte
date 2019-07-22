<script>

import {FILTER_ACTIVE, FILTER_ALL, FILTER_DONE, ENTER_KEY, ESCAPE_KEY} from '../consts.js'
import {todos} from '../store.js'

let currentTodoTitle = ''
export let todo 

function deleteTodo(toRemoveTodo){
    console.log(`removing todo with id ${toRemoveTodo.id}`)
    let newtodolist = $todos.filter( (todo) => todo.id != toRemoveTodo.id )
    todos.update( oldtodolist => newtodolist)
}

function editTodo(todo){
    todo.editing = true
    currentTodoTitle = todo.title
}

function maybeDoneEdit(event, todo){
    
    if (event.key===ENTER_KEY){
        console.log(`updating todo title to ${currentTodoTitle}`)
        todo.title = currentTodoTitle
        todo.editing = false;
        currentTodoTitle =''
        console.log(JSON.stringify(todos))
    }
    updatedTodos = $todos

    for (const [i, item] of updatedTodos.entries()) {
        if (item.id == todo.id){
            updatedTodos[i] = todo
        }
    }
    todos.update(old => updatedTodos)

}
</script>

<style lang="scss">
	.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
  }
  .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
      color: black;
    }
  }
  .todo-item-left { // later
    display: flex;
    align-items: center;
  }
  .todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
  .todo-item-edit {
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc; //override defaults
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    &:focus {
      outline: none;
    }
  }
  .completed {
    text-decoration: line-through;
    color: grey;
  }
</style>

<div class="todo-item">
    <div class="todo-item-left">
        <input type="checkbox" bind:checked="{todo.done}"/>
    </div>
    {#if todo.editing}
        <input type="text" class="todo-input" bind:value="{currentTodoTitle}" on:keydown={(event) => maybeDoneEdit(event, todo)} />
    {:else}
        <div class="todo-item-title todo-item-label" class:completed={todo.done}  on:dblclick={() => editTodo(todo)}>
            {todo.title}
        </div>
    {/if}

    <div class="remove-item" on:click={() => deleteTodo(todo)} >
        &times;
    </div>
        
</div>

