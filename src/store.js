import { writable } from 'svelte/store';

let todosList = [
    {
        id:1,
        title: "learn svelte",
        done: false,
    },
    {
        id:2,
        title: "create todoapp with svelte",
        done: false,
    },
    {
        id:3,
        title: "learn sapper",
        done: false,
    },

]
export const todos = writable(todosList)