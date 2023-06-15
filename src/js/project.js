export { Project };

class Project {
  constructor(title, colour, todos = []) {
    this.title = title;
    this.colour = colour;
    this.todos = todos;
  }
}
