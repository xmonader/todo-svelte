
<style lang="scss">
  .container {
		max-width: 600px;
		margin: 0 auto;
	}
	.logo {
		display: block;
		margin: 20px auto;
		height: 75px;
	}

  .extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
    input {
      margin-right: 8px;
    }
  }
  button {
    font-size: 14px;
    background-color: white;
    appearance: none;
    &:hover {
      background: salmon;
    }
    &:focus {
      outline: none;
    }
  }
  .active {
    background: salmon;
  }
</style>



<script>
    import AddTodo from './components/AddTodo.svelte'
    import TodoList from './components/TodoList.svelte'
    import {todos} from './store.js'
    import {FILTER_ACTIVE, FILTER_ALL, FILTER_DONE, ENTER_KEY, ESCAPE_KEY} from './consts.js'

                             

</script>
<div class="container">
    <img src={'/img/logo.png'} alt="svelte logo" class="logo">
    <AddTodo />
    <TodoList />
</div>