/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./js/project.js":
      /*!***********************!*\
  !*** ./js/project.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Project: () => /* binding */ Project,
          /* harmony export */
        });

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

        /***/
      },

    /***/ "./js/project_manager.js":
      /*!*******************************!*\
  !*** ./js/project_manager.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ projectManager: () =>
            /* binding */ projectManager,
          /* harmony export */
        });
        /* harmony import */ var _project_ui__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./project_ui */ "./js/project_ui.js");
        /* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todo_ui */ "./js/todo_ui.js");

        const projectManager = (function () {
          const projects = [
            {
              title: "Home",
              colour: "orange",
              todos: [
                {
                  title: "Hello World",
                  description: "This is a todo in the 'Home' project",
                  dueDate: "2023-05-13",
                  priority: "4",
                },
              ],
            },
            { title: "inbox", colour: "blue", todos: [] },
            { title: "random", colour: "yellow", todos: [] },
          ];
          let currentProject;

          function findProject(project) {
            if (typeof project === "number") {
              let index = project;
              return index;
            } else {
              const projects = document.querySelector("#projects");
              let index = Array.from(projects.children).indexOf(project);
              return index;
            }
          }

          function addProject(project) {
            projects.push(project);
            currentProject = project;
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.addProjectUI)(project);
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.updateProjectTitle)(
              project
            );
            (0, _todo_ui__WEBPACK_IMPORTED_MODULE_1__.addAllTodos)();
          }

          function editProject(project, title, colour) {
            project.title = title;
            project.colour = colour;
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.updateProject)(
              project
            );
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.updateProjectTitle)(
              project
            );
          }

          function deleteProject(project) {
            projects.splice(findProject(project), 1);
          }

          function setCurrentProject(project) {
            currentProject = projects[findProject(project)];
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.updateProjectTitle)(
              currentProject
            );
            (0, _todo_ui__WEBPACK_IMPORTED_MODULE_1__.addAllTodos)();
          }

          function getCurrentProject() {
            return currentProject;
          }

          return {
            projects,

            findProject,
            addProject,
            editProject,
            deleteProject,
            setCurrentProject,
            getCurrentProject,
          };
        })();

        /***/
      },

    /***/ "./js/project_modal.js":
      /*!*****************************!*\
  !*** ./js/project_modal.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ projectModal: () => /* binding */ projectModal,
          /* harmony export */
        });
        /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./project */ "./js/project.js");
        /* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./project_manager */ "./js/project_manager.js"
          );

        const colourArray = {
          red: "Red",
          orange: "Orange",
          yellow: "Yellow",
          green: "Green",
          blue: "Blue",
          rebeccapurple: "Purple",
          grey: "Grey",
        };

        function projectModal(project) {
          const modal = document.createElement("section");
          modal.classList.add("modal");
          modal.id = "project-modal";

          const form = document.createElement("form");

          const title = document.createElement("input");
          title.setAttribute("type", "text");
          title.setAttribute("name", "title");
          if (!project) {
            title.setAttribute("placeholder", "New Project Title");
          } else {
            title.setAttribute("value", `${project.title}`);
          }
          const titleDiv = document.createElement("div");
          titleDiv.appendChild(title);

          const colour = document.createElement("select");
          colour.setAttribute("name", "colour");
          colour.options[0] = new Option("-- Select an option --", "");
          colour.options[0].setAttribute("disabled", "disabled");
          for (const index in colourArray) {
            colour.options[colour.options.length] = new Option(
              colourArray[index],
              index
            );
          }
          if (project) {
            for (var i = 0; i < colour.options.length; i++) {
              if (colour.options[i].value == project.colour) {
                colour.options[i].selected = true;
              }
            }
          }
          const colourDiv = document.createElement("div");
          colourDiv.appendChild(colour);

          const submit = document.createElement("button");
          submit.setAttribute("type", "submit");
          submit.textContent = "Add Project";
          submit.addEventListener("click", (e) => {
            if (!project) {
              submitNewProject(e, modal);
            } else {
              submitEditedProject(e, project, modal);
            }
          });
          const submitDiv = document.createElement("div");
          submitDiv.appendChild(submit);

          form.append(titleDiv, colourDiv, submitDiv);
          modal.appendChild(form);

          return modal;
        }

        function submitNewProject(e, modal) {
          e.preventDefault();
          const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(
            document.querySelector('[name="title"]').value,
            document.querySelector('[name="colour"]').value
          );
          _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(
            newProject
          );
          modal.remove();
        }

        function submitEditedProject(e, project, modal) {
          e.preventDefault();
          _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.editProject(
            project,
            document.querySelector('[name="title"]').value,
            document.querySelector('[name="colour"]').value
          );
          modal.remove();
        }

        /***/
      },

    /***/ "./js/project_ui.js":
      /*!**************************!*\
  !*** ./js/project_ui.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addAllProjects: () =>
            /* binding */ addAllProjects,
          /* harmony export */ addProjectUI: () => /* binding */ addProjectUI,
          /* harmony export */ deleteProject: () => /* binding */ deleteProject,
          /* harmony export */ editProject: () => /* binding */ editProject,
          /* harmony export */ updateProject: () => /* binding */ updateProject,
          /* harmony export */ updateProjectTitle: () =>
            /* binding */ updateProjectTitle,
          /* harmony export */
        });
        /* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./project_manager */ "./js/project_manager.js"
          );
        /* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./project_modal */ "./js/project_modal.js");

        function addAllProjects() {
          for (const project of _project_manager__WEBPACK_IMPORTED_MODULE_0__
            .projectManager.projects) {
            addProjectUI(project);
          }
          _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.setCurrentProject(
            0
          );
        }

        function addProjectUI(newProject) {
          const projects = document.querySelector("#projects");
          const project = document.createElement("li");
          project.classList.add("project");

          const colour = document.createElement("p");
          colour.textContent = "•";
          colour.classList.add("project-colour");
          colour.setAttribute("style", `color: ${newProject.colour}`);

          const name = document.createElement("h3");
          name.textContent = `${newProject.title}`;
          name.classList.add("project-title");

          const nameSection = document.createElement("div");

          const editButton = editProject();
          const deleteButton = deleteProject();

          const buttonSection = document.createElement("div");

          project.addEventListener("click", (e) => {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.setCurrentProject(
              e.currentTarget
            );
          });

          nameSection.append(colour, name);
          buttonSection.append(editButton, deleteButton);
          project.append(nameSection, buttonSection);
          projects.appendChild(project);
          updateProjectTitle(project);
        }

        function editProject() {
          const button = document.createElement("button");
          button.classList.add("edit-project-button");
          button.textContent = "...";
          button.addEventListener("click", (e) => {
            document.body.appendChild(
              (0, _project_modal__WEBPACK_IMPORTED_MODULE_1__.projectModal)(
                _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager
                  .projects[
                  _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.findProject(
                    e.currentTarget
                  )
                ]
              )
            );
          });
          return button;
        }

        function updateProject(project) {
          const projects = document.getElementById("projects");
          const editedProjectTitle = Array.from(projects.children)
            .at(
              _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projects.indexOf(
                project
              )
            )
            .querySelector(".project-title");
          editedProjectTitle.textContent = `${project.title}`;
          const editedProjectColour = Array.from(projects.children)
            .at(
              _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projects.indexOf(
                project
              )
            )
            .querySelector(".project-colour");
          editedProjectColour.setAttribute("style", `color: ${project.colour}`);
        }

        function updateProjectTitle(project) {
          const projectTitle = document.getElementById("main-title").firstChild;
          if (project) {
            projectTitle.textContent = `${project.title}`;
          } else {
            projectTitle.textContent = "No Project Selected!";
          }
        }

        function deleteProject() {
          const button = document.createElement("button");
          button.classList.add("delete-project-button");
          button.textContent = "x";
          button.addEventListener("click", (e) => {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.deleteProject(
              e.currentTarget
            );
            button.parentElement.parentElement.remove();
          });
          return button;
        }

        /***/
      },

    /***/ "./js/todo.js":
      /*!********************!*\
  !*** ./js/todo.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Todo: () => /* binding */ Todo,
          /* harmony export */
        });

        class Todo {
          constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
          }

          get title() {
            return this._title;
          }

          set title(value) {
            this._title = value;
          }

          get description() {
            return this._description;
          }

          set description(value) {
            this._description = value;
          }

          get dueDate() {
            return this._dueDate;
          }

          set dueDate(value) {
            this._dueDate = value;
          }

          get priority() {
            return this._priority;
          }

          set priority(value) {
            this._priority = value;
          }
        }

        /***/
      },

    /***/ "./js/todo_manager.js":
      /*!****************************!*\
  !*** ./js/todo_manager.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ todoManager: () => /* binding */ todoManager,
          /* harmony export */
        });
        /* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./project_manager */ "./js/project_manager.js"
          );
        /* harmony import */ var _todo_ui__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todo_ui */ "./js/todo_ui.js");

        const todoManager = (function () {
          function findTodo(todo) {
            const todos = document.querySelector("#todos");
            const index = Array.from(todos.children).indexOf(todo);
            return index;
          }

          function addTodo(todo) {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager
              .getCurrentProject()
              .todos.push(todo);
            (0, _todo_ui__WEBPACK_IMPORTED_MODULE_1__.addTodoUI)(todo);
          }

          function editTodo(todo, title, description, date, priority) {
            todo.title = title;
            todo.description = description;
            todo.dueDate = date;
            todo.priority = priority;
            (0, _todo_ui__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(todo);
          }

          function deleteTodo(todo) {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager
              .getCurrentProject()
              .todos.splice(findTodo(todo), 1);
          }
          return { findTodo, addTodo, editTodo, deleteTodo };
        })();

        /***/
      },

    /***/ "./js/todo_modal.js":
      /*!**************************!*\
  !*** ./js/todo_modal.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ toDoModal: () => /* binding */ toDoModal,
          /* harmony export */
        });
        /* harmony import */ var _todo_manager__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo_manager */ "./js/todo_manager.js");
        /* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todo */ "./js/todo.js");

        const todoPriority = {
          1: "Priority 1",
          2: "Priorty 2",
          3: "Priority 3",
          4: "Priority 4",
        };

        function toDoModal(todo) {
          const modal = document.createElement("section");
          modal.classList.add("modal");
          modal.id = "todo-modal";

          const form = document.createElement("form");

          const title = document.createElement("input");
          title.setAttribute("type", "text");
          title.setAttribute("name", "title");
          if (!todo) {
            title.setAttribute("placeholder", "New Todo Title");
          } else {
            title.setAttribute("value", `${todo.title}`);
          }
          const titleDiv = document.createElement("div");
          titleDiv.appendChild(title);

          const description = document.createElement("input");
          description.setAttribute("type", "text");
          description.setAttribute("name", "description");
          if (!todo) {
            description.setAttribute("placeholder", "New Todo Description");
          } else {
            description.setAttribute("value", `${todo.description}`);
          }
          const descriptionDiv = document.createElement("div");
          descriptionDiv.appendChild(description);

          const date = document.createElement("input");
          date.setAttribute("type", "date");
          date.setAttribute("name", "date");
          if (todo) {
            date.setAttribute("value", `${todo.dueDate}`);
          }
          const dateDiv = document.createElement("div");
          dateDiv.appendChild(date);

          const priority = document.createElement("select");
          priority.setAttribute("name", "priority");
          for (const index in todoPriority) {
            priority.options[priority.options.length] = new Option(
              todoPriority[index],
              index
            );
          }
          if (!todo) {
            priority.options[3].selected = true;
          } else {
            for (var i = 0; i < priority.options.length; i++) {
              if (priority.options[i].value == todo.priority) {
                priority.options[i].selected = true;
              }
            }
          }
          const priorityDiv = document.createElement("div");
          priorityDiv.appendChild(priority);

          const submit = document.createElement("button");
          submit.setAttribute("type", "submit");
          submit.textContent = "Add Todo";
          const submitDiv = document.createElement("div");
          submitDiv.appendChild(submit);
          submit.addEventListener("click", (e) => {
            if (!todo) {
              submitNewTodo(e, modal);
            } else {
              submitEditedTodo(e, todo, modal);
            }
          });
          form.append(
            titleDiv,
            descriptionDiv,
            dateDiv,
            priorityDiv,
            submitDiv
          );
          modal.appendChild(form);
          return modal;
        }

        function submitNewTodo(e, modal) {
          e.preventDefault();
          const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(
            document.querySelector('[name="title"]').value,
            document.querySelector('[name="description"]').value,
            document.querySelector('[name="date"]').value,
            document.querySelector('[name="priority"]').value
          );
          _todo_manager__WEBPACK_IMPORTED_MODULE_0__.todoManager.addTodo(
            newTodo
          );
          modal.remove();
        }

        function submitEditedTodo(e, todo, modal) {
          e.preventDefault();
          _todo_manager__WEBPACK_IMPORTED_MODULE_0__.todoManager.editTodo(
            todo,
            document.querySelector('[name="title"]').value,
            document.querySelector('[name="description"]').value,
            document.querySelector('[name="date"]').value,
            document.querySelector('[name="priority"]').value
          );
          modal.remove();
        }

        /***/
      },

    /***/ "./js/todo_ui.js":
      /*!***********************!*\
  !*** ./js/todo_ui.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addAllTodos: () => /* binding */ addAllTodos,
          /* harmony export */ addTodoUI: () => /* binding */ addTodoUI,
          /* harmony export */ deleteTodo: () => /* binding */ deleteTodo,
          /* harmony export */ editTodo: () => /* binding */ editTodo,
          /* harmony export */ updateTodo: () => /* binding */ updateTodo,
          /* harmony export */
        });
        /* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./project_manager */ "./js/project_manager.js"
          );
        /* harmony import */ var _todo_manager__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./todo_manager */ "./js/todo_manager.js");
        /* harmony import */ var _todo_modal__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./todo_modal */ "./js/todo_modal.js");

        function addAllTodos() {
          const todos = document.querySelector("#todos");
          todos.replaceChildren();
          for (const todo of _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject()
            .todos) {
            addTodoUI(todo);
          }
        }

        function addTodoUI(newTodo) {
          const todos = document.querySelector("#todos");
          const todo = document.createElement("li");
          todo.classList.add("todo");

          const title = document.createElement("h3");
          title.classList.add("todo-title");
          title.textContent = `${newTodo.title}`;

          const description = document.createElement("p");
          description.classList.add("todo-description");
          description.textContent = `${newTodo.description}`;

          const dueDate = document.createElement("p");
          dueDate.classList.add("todo-dueDate");
          dueDate.textContent = `${newTodo.dueDate}`;

          const priority = document.createElement("p");
          priority.classList.add("todo-priority");
          priority.textContent = `${newTodo.priority}`;

          const done = document.createElement("input");
          done.type = "checkbox";
          done.name = "done";
          done.value = true;
          done.addEventListener("click", (e) => {
            congratulations();
            setTimeout(() => {
              _todo_manager__WEBPACK_IMPORTED_MODULE_1__.todoManager.deleteTodo(
                e.target.parentElement
              );
              done.parentElement.remove();
            }, 1500);
            setTimeout(() => {
              const congratulationsModal =
                document.querySelector(".success-popup");
              congratulationsModal.remove();
            }, 3000);
          });

          const editButton = editTodo();
          const deleteButton = deleteTodo();

          todo.append(
            done,
            title,
            description,
            dueDate,
            priority,
            editButton,
            deleteButton
          );
          todos.appendChild(todo);
        }

        function editTodo() {
          const button = document.createElement("button");
          button.classList.add("edit-todo-button");
          button.textContent = "...";
          button.addEventListener("click", (e) => {
            document.body.appendChild(
              (0, _todo_modal__WEBPACK_IMPORTED_MODULE_2__.toDoModal)(
                _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject()
                  .todos[
                  _todo_manager__WEBPACK_IMPORTED_MODULE_1__.todoManager.findTodo(
                    e.target.parentElement
                  )
                ]
              )
            );
          });
          return button;
        }

        function updateTodo(todo) {
          const todos = document.querySelector("#todos");
          const editedTodo = Array.from(todos.children).at(
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager
              .getCurrentProject()
              .todos.indexOf(todo)
          );
          editedTodo.querySelector(".todo-title").textContent = `${todo.title}`;
          editedTodo.querySelector(
            ".todo-description"
          ).textContent = `${todo.description}`;
          editedTodo.querySelector(
            ".todo-dueDate"
          ).textContent = `${todo.dueDate}`;
          editedTodo.querySelector(
            ".todo-priority"
          ).textContent = `${todo.priority}`;
        }

        function deleteTodo() {
          const button = document.createElement("button");
          button.classList.add("delete-todo-button");
          button.textContent = "x";
          button.addEventListener("click", (e) => {
            _todo_manager__WEBPACK_IMPORTED_MODULE_1__.todoManager.deleteTodo(
              e.target.parentElement
            );
            button.parentElement.remove();
          });
          return button;
        }

        function congratulations() {
          const main = document.querySelector("main");
          const successPopup = document.createElement("div");
          const closePopup = document.createElement("div");
          const button = document.createElement("button");
          const popupContent = document.createElement("div");
          const text = document.createElement("p");

          successPopup.classList.add("success-popup");
          text.textContent = "Congrats! 🎉";
          button.textContent = "x";

          button.addEventListener("click", () => {
            successPopup.remove();
          });

          closePopup.appendChild(button);
          popupContent.appendChild(text);
          successPopup.append(closePopup, popupContent);
          main.append(successPopup);
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!********************!*\
  !*** ./js/main.js ***!
  \********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ footer: () => /* binding */ footer,
      /* harmony export */ main: () => /* binding */ main,
      /* harmony export */
    });
    /* harmony import */ var _todo_manager__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./todo_manager */ "./js/todo_manager.js");
    /* harmony import */ var _todo_modal__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./todo_modal */ "./js/todo_modal.js");

    function main() {
      const title = document.createElement("div");
      title.id = "main-title";
      const titleText = document.createElement("h2");
      titleText.textContent = "lol";

      const button = document.createElement("button");
      button.id = "add-todo-button";
      button.setAttribute("type", "button");
      button.textContent = "Add a new todo";
      button.addEventListener("click", () => {
        _todo_manager__WEBPACK_IMPORTED_MODULE_0__.todoManager.findTodo();
        document.body.appendChild(
          (0, _todo_modal__WEBPACK_IMPORTED_MODULE_1__.toDoModal)()
        );
      });

      const todos = document.createElement("ul");
      todos.id = "todos";

      const main = document.createElement("main");
      title.append(titleText, button);
      main.append(title, todos);

      return main;
    }

    function footer() {
      const footer = document.createElement("footer");
      footer.textContent = "Hello there";

      return footer;
    }
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM3SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ0o7QUFDakI7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQW9CO0FBQ3hCLDhCQUE4QixzREFBUztBQUN2QyxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0X21vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfdWkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9kby5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9kb19tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX3VpLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgUHJvamVjdCB9O1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGNvbG91ciwgdG9kb3MgPSBbXSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91cjtcbiAgfVxuXG4gIHNldCBjb2xvdXIodmFsdWUpIHtcbiAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkUHJvamVjdFVJLCB1cGRhdGVQcm9qZWN0LCB1cGRhdGVQcm9qZWN0VGl0bGUgfSBmcm9tIFwiLi9wcm9qZWN0X3VpXCI7XG5pbXBvcnQgeyBhZGRBbGxUb2RvcyB9IGZyb20gXCIuL3RvZG9fdWlcIjtcbmV4cG9ydCB7IHByb2plY3RNYW5hZ2VyIH07XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgICAgY29sb3VyOiBcIm9yYW5nZVwiLFxuICAgICAgdG9kb3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIkhlbGxvIFdvcmxkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHRvZG8gaW4gdGhlICdIb21lJyBwcm9qZWN0XCIsXG4gICAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTA1LTEzXCIsXG4gICAgICAgICAgcHJpb3JpdHk6IFwiNFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHsgdGl0bGU6IFwiaW5ib3hcIiwgY29sb3VyOiBcImJsdWVcIiwgdG9kb3M6IFtdIH0sXG4gICAgeyB0aXRsZTogXCJyYW5kb21cIiwgY29sb3VyOiBcInllbGxvd1wiLCB0b2RvczogW10gfSxcbiAgXTtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuXG4gIGZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBpZiAodHlwZW9mIHByb2plY3QgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGxldCBpbmRleCA9IHByb2plY3Q7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgICAgIGxldCBpbmRleCA9IEFycmF5LmZyb20ocHJvamVjdHMuY2hpbGRyZW4pLmluZGV4T2YocHJvamVjdCk7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RcbiAgICBhZGRQcm9qZWN0VUkocHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xuICAgIGFkZEFsbFRvZG9zKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIHRpdGxlLCBjb2xvdXIpIHtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdC5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdXBkYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZmluZFByb2plY3QocHJvamVjdCksIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZmluZFByb2plY3QocHJvamVjdCldO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkQWxsVG9kb3MoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHMsXG5cbiAgICBmaW5kUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgc2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5leHBvcnQgeyBwcm9qZWN0TW9kYWwgfTtcblxuY29uc3QgY29sb3VyQXJyYXkgPSB7XG4gIHJlZDogXCJSZWRcIixcbiAgb3JhbmdlOiBcIk9yYW5nZVwiLFxuICB5ZWxsb3c6IFwiWWVsbG93XCIsXG4gIGdyZWVuOiBcIkdyZWVuXCIsXG4gIGJsdWU6IFwiQmx1ZVwiLFxuICByZWJlY2NhcHVycGxlOiBcIlB1cnBsZVwiLFxuICBncmV5OiBcIkdyZXlcIixcbn07XG5cbmZ1bmN0aW9uIHByb2plY3RNb2RhbChwcm9qZWN0KSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuaWQgPSBcInByb2plY3QtbW9kYWxcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gIGlmICghcHJvamVjdCkge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFByb2plY3QgVGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7cHJvamVjdC50aXRsZX1gKTtcbiAgfVxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBjb2xvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb2xvdXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbG91clwiKTtcbiAgY29sb3VyLm9wdGlvbnNbMF0gPSBuZXcgT3B0aW9uKFwiLS0gU2VsZWN0IGFuIG9wdGlvbiAtLVwiLCBcIlwiKTtcbiAgY29sb3VyLm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgZm9yIChjb25zdCBpbmRleCBpbiBjb2xvdXJBcnJheSkge1xuICAgIGNvbG91ci5vcHRpb25zW2NvbG91ci5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgICAgY29sb3VyQXJyYXlbaW5kZXhdLFxuICAgICAgaW5kZXhcbiAgICApO1xuICB9XG4gIGlmIChwcm9qZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvdXIub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvbG91ci5vcHRpb25zW2ldLnZhbHVlID09IHByb2plY3QuY29sb3VyKSB7XG4gICAgICAgIGNvbG91ci5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgY29sb3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sb3VyRGl2LmFwcGVuZENoaWxkKGNvbG91cik7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgc3VibWl0TmV3UHJvamVjdChlLCBtb2RhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Ym1pdEVkaXRlZFByb2plY3QoZSwgcHJvamVjdCwgbW9kYWwpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBjb2xvdXJEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gc3VibWl0TmV3UHJvamVjdChlLCBtb2RhbCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb2xvdXJcIl0nKS52YWx1ZVxuICApO1xuICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdGVkUHJvamVjdChlLCBwcm9qZWN0LCBtb2RhbCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2plY3RNYW5hZ2VyLmVkaXRQcm9qZWN0KFxuICAgIHByb2plY3QsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29sb3VyXCJdJykudmFsdWVcbiAgKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuaW1wb3J0IHsgcHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vcHJvamVjdF9tb2RhbFwiO1xuZXhwb3J0IHtcbiAgYWRkQWxsUHJvamVjdHMsXG4gIGFkZFByb2plY3RVSSxcbiAgZWRpdFByb2plY3QsXG4gIHVwZGF0ZVByb2plY3QsXG4gIHVwZGF0ZVByb2plY3RUaXRsZSxcbiAgZGVsZXRlUHJvamVjdCxcbn07XG5cbmZ1bmN0aW9uIGFkZEFsbFByb2plY3RzKCkge1xuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdE1hbmFnZXIucHJvamVjdHMpIHtcbiAgICBhZGRQcm9qZWN0VUkocHJvamVjdCk7XG4gIH1cbiAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QoMCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RVSShuZXdQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICBjb25zdCBjb2xvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29sb3VyLnRleHRDb250ZW50ID0gJ+KAoidcbiAgY29sb3VyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29sb3VyJylcbiAgY29sb3VyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBjb2xvcjogJHtuZXdQcm9qZWN0LmNvbG91cn1gKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gYCR7bmV3UHJvamVjdC50aXRsZX1gO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuXG4gIGNvbnN0IG5hbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZWRpdFByb2plY3QoKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZGVsZXRlUHJvamVjdCgpO1xuXG4gIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfSk7XG5cbiAgbmFtZVNlY3Rpb24uYXBwZW5kKGNvbG91ciwgbmFtZSlcbiAgYnV0dG9uU2VjdGlvbi5hcHBlbmQoZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKVxuICBwcm9qZWN0LmFwcGVuZChuYW1lU2VjdGlvbiwgYnV0dG9uU2VjdGlvbik7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLi4uXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgcHJvamVjdE1vZGFsKFxuICAgICAgICBwcm9qZWN0TWFuYWdlci5wcm9qZWN0c1tcbiAgICAgICAgICBwcm9qZWN0TWFuYWdlci5maW5kUHJvamVjdChlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgIF1cbiAgICAgIClcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgY29uc3QgZWRpdGVkUHJvamVjdFRpdGxlID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbilcbiAgICAuYXQocHJvamVjdE1hbmFnZXIucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSlcbiAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICBlZGl0ZWRQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIGNvbnN0IGVkaXRlZFByb2plY3RDb2xvdXIgPSBBcnJheS5mcm9tKHByb2plY3RzLmNoaWxkcmVuKVxuICAuYXQocHJvamVjdE1hbmFnZXIucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSlcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb2xvdXJcIik7XG4gIGVkaXRlZFByb2plY3RDb2xvdXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGNvbG9yOiAke3Byb2plY3QuY29sb3VyfWApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tdGl0bGVcIikuZmlyc3RDaGlsZDtcbiAgaWYgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJObyBQcm9qZWN0IFNlbGVjdGVkIVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cbiIsImV4cG9ydCB7IFRvZG8gfTtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7IGFkZFRvZG9VSSwgdXBkYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9fdWlcIjtcbmV4cG9ydCB7IHRvZG9NYW5hZ2VyIH07XG5cbmNvbnN0IHRvZG9NYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZmluZFRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20odG9kb3MuY2hpbGRyZW4pLmluZGV4T2YodG9kbyk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIGFkZFRvZG9VSSh0b2RvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUb2RvKHRvZG8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0b2RvLnRpdGxlID0gdGl0bGU7XG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRvZG8uZHVlRGF0ZSA9IGRhdGU7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHVwZGF0ZVRvZG8odG9kbyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zLnNwbGljZShmaW5kVG9kbyh0b2RvKSwgMSk7XG4gIH1cbiAgcmV0dXJuIHsgZmluZFRvZG8sIGFkZFRvZG8sIGVkaXRUb2RvLCBkZWxldGVUb2RvIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgdG9kb01hbmFnZXIgfSBmcm9tIFwiLi90b2RvX21hbmFnZXJcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5leHBvcnQgeyB0b0RvTW9kYWwgfTtcblxuY29uc3QgdG9kb1ByaW9yaXR5ID0ge1xuICAxOiBcIlByaW9yaXR5IDFcIixcbiAgMjogXCJQcmlvcnR5IDJcIixcbiAgMzogXCJQcmlvcml0eSAzXCIsXG4gIDQ6IFwiUHJpb3JpdHkgNFwiLFxufTtcblxuZnVuY3Rpb24gdG9Eb01vZGFsKHRvZG8pIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbC5pZCA9IFwidG9kby1tb2RhbFwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgaWYgKCF0b2RvKSB7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVG9kbyBUaXRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RvLnRpdGxlfWApO1xuICB9XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBpZiAoIXRvZG8pIHtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUb2RvIERlc2NyaXB0aW9uXCIpO1xuICB9IGVsc2Uge1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RvZG8uZGVzY3JpcHRpb259YCk7XG4gIH1cbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgaWYgKHRvZG8pIHtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RvZG8uZHVlRGF0ZX1gKTtcbiAgfVxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgZm9yIChjb25zdCBpbmRleCBpbiB0b2RvUHJpb3JpdHkpIHtcbiAgICBwcmlvcml0eS5vcHRpb25zW3ByaW9yaXR5Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgICB0b2RvUHJpb3JpdHlbaW5kZXhdLFxuICAgICAgaW5kZXhcbiAgICApO1xuICB9XG4gIGlmICghdG9kbykge1xuICAgIHByaW9yaXR5Lm9wdGlvbnNbM10uc2VsZWN0ZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdHkub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByaW9yaXR5Lm9wdGlvbnNbaV0udmFsdWUgPT0gdG9kby5wcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eS5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIFRvZG9cIjtcbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIXRvZG8pIHtcbiAgICAgIHN1Ym1pdE5ld1RvZG8oZSwgbW9kYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJtaXRFZGl0ZWRUb2RvKGUsIHRvZG8sIG1vZGFsKTtcbiAgICB9XG4gIH0pO1xuICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgZGVzY3JpcHRpb25EaXYsIGRhdGVEaXYsIHByaW9yaXR5RGl2LCBzdWJtaXREaXYpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBzdWJtaXROZXdUb2RvKGUsIG1vZGFsKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICk7XG4gIHRvZG9NYW5hZ2VyLmFkZFRvZG8obmV3VG9kbyk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0ZWRUb2RvKGUsIHRvZG8sIG1vZGFsKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb01hbmFnZXIuZWRpdFRvZG8oXG4gICAgdG9kbyxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGF0ZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl0nKS52YWx1ZVxuICApO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5pbXBvcnQgeyB0b2RvTWFuYWdlciB9IGZyb20gXCIuL3RvZG9fbWFuYWdlclwiO1xuaW1wb3J0IHsgdG9Eb01vZGFsIH0gZnJvbSBcIi4vdG9kb19tb2RhbFwiO1xuZXhwb3J0IHsgYWRkQWxsVG9kb3MsIGFkZFRvZG9VSSwgZWRpdFRvZG8sIHVwZGF0ZVRvZG8sIGRlbGV0ZVRvZG8gfTtcblxuZnVuY3Rpb24gYWRkQWxsVG9kb3MoKSB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgdG9kb3MucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zKSB7XG4gICAgYWRkVG9kb1VJKHRvZG8pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9VSShuZXdUb2RvKSB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gYCR7bmV3VG9kby50aXRsZX1gO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke25ld1RvZG8uZGVzY3JpcHRpb259YDtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke25ld1RvZG8uZHVlRGF0ZX1gO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByaW9yaXR5XCIpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGAke25ld1RvZG8ucHJpb3JpdHl9YDtcblxuICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkb25lLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGRvbmUubmFtZSA9IFwiZG9uZVwiO1xuICBkb25lLnZhbHVlID0gdHJ1ZTtcbiAgZG9uZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25ncmF0dWxhdGlvbnMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICBkb25lLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSwgMTUwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjb25ncmF0dWxhdGlvbnNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VjY2Vzcy1wb3B1cFwiKTtcbiAgICAgIGNvbmdyYXR1bGF0aW9uc01vZGFsLnJlbW92ZSgpO1xuICAgIH0sIDMwMDApO1xuICB9KTtcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZWRpdFRvZG8oKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZGVsZXRlVG9kbygpO1xuXG4gIHRvZG8uYXBwZW5kKFxuICAgIGRvbmUsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBlZGl0QnV0dG9uLFxuICAgIGRlbGV0ZUJ1dHRvblxuICApO1xuICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10b2RvLWJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCIuLi5cIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4gICAgICB0b0RvTW9kYWwoXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3NbXG4gICAgICAgICAgdG9kb01hbmFnZXIuZmluZFRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgICAgXVxuICAgICAgKVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RvKHRvZG8pIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICBjb25zdCBlZGl0ZWRUb2RvID0gQXJyYXkuZnJvbSh0b2Rvcy5jaGlsZHJlbikuYXQoXG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcy5pbmRleE9mKHRvZG8pXG4gICk7XG4gIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICBlZGl0ZWRUb2RvLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIudG9kby1kZXNjcmlwdGlvblwiXG4gICkudGV4dENvbnRlbnQgPSBgJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWR1ZURhdGVcIikudGV4dENvbnRlbnQgPSBgJHt0b2RvLmR1ZURhdGV9YDtcbiAgZWRpdGVkVG9kby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvZG8tYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjb25ncmF0dWxhdGlvbnMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3Qgc3VjY2Vzc1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2xvc2VQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBzdWNjZXNzUG9wdXAuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtcG9wdXBcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIkNvbmdyYXRzISDwn46JXCI7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN1Y2Nlc3NQb3B1cC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY2xvc2VQb3B1cC5hcHBlbmRDaGlsZChidXR0b24pO1xuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHN1Y2Nlc3NQb3B1cC5hcHBlbmQoY2xvc2VQb3B1cCwgcG9wdXBDb250ZW50KTtcbiAgbWFpbi5hcHBlbmQoc3VjY2Vzc1BvcHVwKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb01hbmFnZXIgfSBmcm9tIFwiLi90b2RvX21hbmFnZXJcIjtcbmltcG9ydCB7IHRvRG9Nb2RhbCB9IGZyb20gXCIuL3RvZG9fbW9kYWxcIjtcbmV4cG9ydCB7IG1haW4sIGZvb3RlciB9O1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlkID0gXCJtYWluLXRpdGxlXCI7XG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJsb2xcIjtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uaWQgPSBcImFkZC10b2RvLWJ1dHRvblwiO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgdG9kb1wiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2RvTWFuYWdlci5maW5kVG9kbygpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9Eb01vZGFsKCkpO1xuICB9KTtcblxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdG9kb3MuaWQgPSBcInRvZG9zXCI7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICB0aXRsZS5hcHBlbmQodGl0bGVUZXh0LCBidXR0b24pO1xuICBtYWluLmFwcGVuZCh0aXRsZSwgdG9kb3MpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiSGVsbG8gdGhlcmVcIjtcblxuICByZXR1cm4gZm9vdGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
