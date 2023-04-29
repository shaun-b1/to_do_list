export { Project };

class Project {
  constructor(title, colour, todos = []) {
    this.title = title;
    this.colour = colour;
    this.todos = todos;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get colour() {
    return this._colour;
  }

  set colour(value) {
    this._colour = value;
  }
}
