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

        const projectManager = (function () {
          const projects = [
            { title: "Home", colour: "orange", todos: [] },
            { title: "inbox", colour: "blue", todos: [] },
            { title: "random", colour: "yellow", todos: [] },
          ];
          let currentProject;

          function findProject(project) {
            const projects = document.querySelector("#projects");
            const index = Array.from(projects.children).indexOf(project);
            return index;
          }

          function addProject(project) {
            projects.push(project);
            currentProject = project;
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.addProjectUI)(project);
            (0, _project_ui__WEBPACK_IMPORTED_MODULE_0__.updateProjectTitle)(
              project
            );
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
          for (const project in _project_manager__WEBPACK_IMPORTED_MODULE_0__
            .projectManager.projects) {
            addProjectUI(project);
          }
        }

        function addProjectUI(newProject) {
          const projects = document.querySelector("#projects");
          const project = document.createElement("li");
          project.classList.add("project");

          const name = document.createElement("h3");
          name.textContent = `${newProject.title}`;
          name.classList.add("project-title");
          name.setAttribute("style", `background: ${newProject.colour}`);

          const editButton = editProject();
          const deleteButton = deleteProject();
          project.addEventListener("click", (e) => {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.setCurrentProject(
              e.target.parentElement
            );
          });

          project.append(name, editButton, deleteButton);
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
                    e.target.parentElement
                  )
                ]
              )
            );
          });
          return button;
        }

        function updateProject(project) {
          const projects = document.getElementById("projects");
          const editedProject = Array.from(projects.children)
            .at(
              _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.projects.indexOf(
                project
              )
            )
            .querySelector(".project-title");
          editedProject.textContent = `${project.title}`;
          editedProject.setAttribute("style", `background: ${project.colour}`);
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
              e.target.parentNode
            );
            button.parentElement.remove();
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
            this.done = false;
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

          // function completeTodo() {

          // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLElBQUksK0RBQW9CO0FBQ3hCLDhCQUE4QixzREFBUztBQUN2QyxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0X21vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfdWkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9kby5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9kb19tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX3VpLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgUHJvamVjdCB9O1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGNvbG91ciwgdG9kb3MgPSBbXSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91cjtcbiAgfVxuXG4gIHNldCBjb2xvdXIodmFsdWUpIHtcbiAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkUHJvamVjdFVJLCB1cGRhdGVQcm9qZWN0LCB1cGRhdGVQcm9qZWN0VGl0bGUgfSBmcm9tIFwiLi9wcm9qZWN0X3VpXCI7XG5leHBvcnQgeyBwcm9qZWN0TWFuYWdlciB9O1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHsgdGl0bGU6IFwiSG9tZVwiLCBjb2xvdXI6IFwib3JhbmdlXCIsIHRvZG9zOiBbXSB9LFxuICAgIHsgdGl0bGU6IFwiaW5ib3hcIiwgY29sb3VyOiBcImJsdWVcIiwgdG9kb3M6IFtdIH0sXG4gICAgeyB0aXRsZTogXCJyYW5kb21cIiwgY29sb3VyOiBcInllbGxvd1wiLCB0b2RvczogW10gfSxcbiAgXTtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuXG4gIGZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKHByb2plY3RzLmNoaWxkcmVuKS5pbmRleE9mKHByb2plY3QpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIGFkZFByb2plY3RVSShwcm9qZWN0KTtcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCB0aXRsZSwgY29sb3VyKSB7XG4gICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIHByb2plY3QuY29sb3VyID0gY29sb3VyO1xuICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGZpbmRQcm9qZWN0KHByb2plY3QpLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ZpbmRQcm9qZWN0KHByb2plY3QpXTtcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGUoY3VycmVudFByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcbiAgICBmaW5kUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgc2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5leHBvcnQgeyBwcm9qZWN0TW9kYWwgfTtcblxuY29uc3QgY29sb3VyQXJyYXkgPSB7XG4gIHJlZDogXCJSZWRcIixcbiAgb3JhbmdlOiBcIk9yYW5nZVwiLFxuICB5ZWxsb3c6IFwiWWVsbG93XCIsXG4gIGdyZWVuOiBcIkdyZWVuXCIsXG4gIGJsdWU6IFwiQmx1ZVwiLFxuICByZWJlY2NhcHVycGxlOiBcIlB1cnBsZVwiLFxuICBncmV5OiBcIkdyZXlcIixcbn07XG5cbmZ1bmN0aW9uIHByb2plY3RNb2RhbChwcm9qZWN0KSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuaWQgPSBcInByb2plY3QtbW9kYWxcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gIGlmICghcHJvamVjdCkge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFByb2plY3QgVGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7cHJvamVjdC50aXRsZX1gKTtcbiAgfVxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBjb2xvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb2xvdXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbG91clwiKTtcbiAgY29sb3VyLm9wdGlvbnNbMF0gPSBuZXcgT3B0aW9uKFwiLS0gU2VsZWN0IGFuIG9wdGlvbiAtLVwiLCBcIlwiKTtcbiAgY29sb3VyLm9wdGlvbnNbMF0uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgZm9yIChjb25zdCBpbmRleCBpbiBjb2xvdXJBcnJheSkge1xuICAgIGNvbG91ci5vcHRpb25zW2NvbG91ci5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgICAgY29sb3VyQXJyYXlbaW5kZXhdLFxuICAgICAgaW5kZXhcbiAgICApO1xuICB9XG4gIGlmIChwcm9qZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvdXIub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNvbG91ci5vcHRpb25zW2ldLnZhbHVlID09IHByb2plY3QuY29sb3VyKSB7XG4gICAgICAgIGNvbG91ci5vcHRpb25zW2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgY29sb3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sb3VyRGl2LmFwcGVuZENoaWxkKGNvbG91cik7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgc3VibWl0TmV3UHJvamVjdChlLCBtb2RhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Ym1pdEVkaXRlZFByb2plY3QoZSwgcHJvamVjdCwgbW9kYWwpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBjb2xvdXJEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gc3VibWl0TmV3UHJvamVjdChlLCBtb2RhbCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb2xvdXJcIl0nKS52YWx1ZVxuICApO1xuICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdGVkUHJvamVjdChlLCBwcm9qZWN0LCBtb2RhbCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2plY3RNYW5hZ2VyLmVkaXRQcm9qZWN0KFxuICAgIHByb2plY3QsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29sb3VyXCJdJykudmFsdWVcbiAgKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuaW1wb3J0IHsgcHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vcHJvamVjdF9tb2RhbFwiO1xuZXhwb3J0IHsgYWRkQWxsUHJvamVjdHMsIGFkZFByb2plY3RVSSwgZWRpdFByb2plY3QsIHVwZGF0ZVByb2plY3QsIHVwZGF0ZVByb2plY3RUaXRsZSwgZGVsZXRlUHJvamVjdH1cblxuZnVuY3Rpb24gYWRkQWxsUHJvamVjdHMoKSB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IGluIHByb2plY3RNYW5hZ2VyLnByb2plY3RzKSB7XG4gICAgICAgIGFkZFByb2plY3RVSShwcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RVSShuZXdQcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGAke25ld1Byb2plY3QudGl0bGV9YDtcbiAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQ6ICR7bmV3UHJvamVjdC5jb2xvdXJ9YCk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZWRpdFByb2plY3QoKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkZWxldGVQcm9qZWN0KCk7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0LmFwcGVuZChuYW1lLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1idXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCIuLi5cIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHByb2plY3RNb2RhbChcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLnByb2plY3RzW1xuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZmluZFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbiAgICBjb25zdCBlZGl0ZWRQcm9qZWN0ID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbilcbiAgICAgICAgLmF0KHByb2plY3RNYW5hZ2VyLnByb2plY3RzLmluZGV4T2YocHJvamVjdCkpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgZWRpdGVkUHJvamVjdC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICBlZGl0ZWRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kOiAke3Byb2plY3QuY29sb3VyfWApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10aXRsZVwiKS5maXJzdENoaWxkO1xuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIk5vIFByb2plY3QgU2VsZWN0ZWQhXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xufSIsImV4cG9ydCB7IFRvZG8gfTtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7IGFkZFRvZG9VSSwgdXBkYXRlVG9kbyB9IGZyb20gXCIuL3RvZG9fdWlcIjtcbmV4cG9ydCB7IHRvZG9NYW5hZ2VyIH07XG5cbmNvbnN0IHRvZG9NYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZmluZFRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20odG9kb3MuY2hpbGRyZW4pLmluZGV4T2YodG9kbyk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIGFkZFRvZG9VSSh0b2RvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUb2RvKHRvZG8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0b2RvLnRpdGxlID0gdGl0bGU7XG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRvZG8uZHVlRGF0ZSA9IGRhdGU7XG4gICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHVwZGF0ZVRvZG8odG9kbyk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zLnNwbGljZShmaW5kVG9kbyh0b2RvKSwgMSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjb21wbGV0ZVRvZG8oKSB7XG5cbiAgLy8gfVxuICByZXR1cm4geyBmaW5kVG9kbywgYWRkVG9kbywgZWRpdFRvZG8sIGRlbGV0ZVRvZG8gfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyB0b2RvTWFuYWdlciB9IGZyb20gXCIuL3RvZG9fbWFuYWdlclwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmV4cG9ydCB7IHRvRG9Nb2RhbCB9O1xuXG5jb25zdCB0b2RvUHJpb3JpdHkgPSB7XG4gIDE6IFwiUHJpb3JpdHkgMVwiLFxuICAyOiBcIlByaW9ydHkgMlwiLFxuICAzOiBcIlByaW9yaXR5IDNcIixcbiAgNDogXCJQcmlvcml0eSA0XCIsXG59O1xuXG5mdW5jdGlvbiB0b0RvTW9kYWwodG9kbykge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmlkID0gXCJ0b2RvLW1vZGFsXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICBpZiAoIXRvZG8pIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUb2RvIFRpdGxlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RvZG8udGl0bGV9YCk7XG4gIH1cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGlmICghdG9kbykge1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFRvZG8gRGVzY3JpcHRpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kby5kZXNjcmlwdGlvbn1gKTtcbiAgfVxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlXCIpO1xuICBpZiAodG9kbykge1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kby5kdWVEYXRlfWApO1xuICB9XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBmb3IgKGNvbnN0IGluZGV4IGluIHRvZG9Qcmlvcml0eSkge1xuICAgIHByaW9yaXR5Lm9wdGlvbnNbcHJpb3JpdHkub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICAgIHRvZG9Qcmlvcml0eVtpbmRleF0sXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cbiAgaWYgKCF0b2RvKSB7XG4gICAgcHJpb3JpdHkub3B0aW9uc1szXS5zZWxlY3RlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmlvcml0eS5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJpb3JpdHkub3B0aW9uc1tpXS52YWx1ZSA9PSB0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXR5Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgVG9kb1wiO1xuICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghdG9kbykge1xuICAgICAgc3VibWl0TmV3VG9kbyhlLCBtb2RhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Ym1pdEVkaXRlZFRvZG8oZSwgdG9kbywgbW9kYWwpO1xuICAgIH1cbiAgfSk7XG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgZGF0ZURpdiwgcHJpb3JpdHlEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1RvZG8oZSwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdJykudmFsdWVcbiAgKTtcbiAgdG9kb01hbmFnZXIuYWRkVG9kbyhuZXdUb2RvKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZFRvZG8oZSwgdG9kbywgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvTWFuYWdlci5lZGl0VG9kbyhcbiAgICB0b2RvLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb19tYW5hZ2VyXCI7XG5pbXBvcnQgeyB0b0RvTW9kYWwgfSBmcm9tIFwiLi90b2RvX21vZGFsXCI7XG5leHBvcnQge2FkZFRvZG9VSSwgZWRpdFRvZG8sIHVwZGF0ZVRvZG8sIGRlbGV0ZVRvZG99XG5cbmZ1bmN0aW9uIGFkZFRvZG9VSShuZXdUb2RvKSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLnRpdGxlfWA7XG4gIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLmRlc2NyaXB0aW9ufWA7XG4gIFxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZURhdGVcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke25ld1RvZG8uZHVlRGF0ZX1gO1xuICBcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5wcmlvcml0eX1gO1xuICBcbiAgICBjb25zdCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRvbmUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBkb25lLm5hbWUgPSBcImRvbmVcIjtcbiAgICBkb25lLnZhbHVlID0gdHJ1ZTtcbiAgXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVkaXRUb2RvKCk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZGVsZXRlVG9kbygpO1xuICBcbiAgICB0b2RvLmFwcGVuZChcbiAgICAgIGRvbmUsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgZWRpdEJ1dHRvbixcbiAgICAgIGRlbGV0ZUJ1dHRvblxuICAgICk7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kbyk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbygpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10b2RvLWJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIi4uLlwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRvRG9Nb2RhbChcbiAgICAgICAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zW1xuICAgICAgICAgICAgdG9kb01hbmFnZXIuZmluZFRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgICBjb25zdCBlZGl0ZWRUb2RvID0gQXJyYXkuZnJvbSh0b2Rvcy5jaGlsZHJlbikuYXQoXG4gICAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zLmluZGV4T2YodG9kbylcbiAgICApO1xuICAgIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICAgIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnRvZG8tZGVzY3JpcHRpb25cIlxuICAgICkudGV4dENvbnRlbnQgPSBgJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gICAgZWRpdGVkVG9kby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS50ZXh0Q29udGVudCA9IGAke3RvZG8uZHVlRGF0ZX1gO1xuICAgIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXByaW9yaXR5XCIpLnRleHRDb250ZW50ID0gYCR7dG9kby5wcmlvcml0eX1gO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvZG8tYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b2RvTWFuYWdlciB9IGZyb20gXCIuL3RvZG9fbWFuYWdlclwiO1xuaW1wb3J0IHsgdG9Eb01vZGFsIH0gZnJvbSBcIi4vdG9kb19tb2RhbFwiO1xuZXhwb3J0IHsgbWFpbiwgZm9vdGVyIH07XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaWQgPSBcIm1haW4tdGl0bGVcIjtcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBcImxvbFwiO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pZCA9IFwiYWRkLXRvZG8tYnV0dG9uXCI7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyB0b2RvXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZG9NYW5hZ2VyLmZpbmRUb2RvKCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b0RvTW9kYWwoKSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b2Rvcy5pZCA9IFwidG9kb3NcIjtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIHRpdGxlLmFwcGVuZCh0aXRsZVRleHQsIGJ1dHRvbik7XG4gIG1haW4uYXBwZW5kKHRpdGxlLCB0b2Rvcyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJIZWxsbyB0aGVyZVwiO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
