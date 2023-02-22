import '../css/style.css'
import '../css/reset.css'
import {Todo} from './todo'
import {Project} from './project'

const myTodo = new Todo("Finish project", "Complete project deliverables", "2023-02-28", "High", "Ask team lead for feedback");

console.log(myTodo)
console.log(myTodo.description)

const project = new Project('Default', "Orange")

console.log(project.title)
console.log(project.todos)
