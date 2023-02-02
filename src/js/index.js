import {Todo} from './todo'
import {Project} from './project'
import './page'

let todo = new Todo('Todo', 'A trial todo', '25-01-2023', 'High', 'No notes')

console.log(todo)
console.log(todo.description)

const project = new Project('Default', "Orange")

console.log(project.title)
console.log(project.todos)
