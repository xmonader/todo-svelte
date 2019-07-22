<script>
import {FILTER_ACTIVE, FILTER_ALL, FILTER_DONE, ENTER_KEY, ESCAPE_KEY} from '../consts.js'
import {todos} from '../store.js'
import TodoItem from './TodoItem.svelte'

let currentFilter = FILTER_ALL
$: filteredTodos = currentFilter === FILTER_ALL
                        ? $todos
                        : currentFilter === FILTER_ACTIVE
                            ? $todos.filter( (todo) => !todo.done)
                            : $todos.filter( (todo) => todo.done)  
  
function checkAllTodos(event){
    let newtodos = $todos
    newtodos.forEach(todo => {
        todo.done = event.target.checked
    });
    todos.update( oldtodos => newtodos)
}

function updateFilter(filter){
    console.log(`updating currentFilter to : ${filter}`)
    currentFilter = filter
}

</script>

<div id="todos-list">
    {#each filteredTodos as todo}
        <TodoItem todo={todo} />
    {/each}
</div>

<div class="extra-container">
    <label><input type="checkbox" on:change={(event) => checkAllTodos(event) }>Check all</label>
</div>

<div class="extra-container">
    <button on:click={() => updateFilter(FILTER_ALL)} class:active="{currentFilter===FILTER_ALL}" >All</button>
    <button on:click={() => updateFilter(FILTER_DONE)} class:active="{currentFilter===FILTER_DONE}" >Completed</button>
    <button on:click={() => updateFilter(FILTER_ACTIVE)} class:active="{currentFilter===FILTER_ACTIVE}" >Active</button>

</div>
