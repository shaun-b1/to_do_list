/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./js/aside.js":
      /*!*********************!*\
  !*** ./js/aside.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addAllProjects: () =>
            /* binding */ addAllProjects,
          /* harmony export */ addProjectToAside: () =>
            /* binding */ addProjectToAside,
          /* harmony export */ aside: () => /* binding */ aside,
          /* harmony export */ updateProject: () => /* binding */ updateProject,
          /* harmony export */
        });
        /* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./project_modal */ "./js/project_modal.js");
        /* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./project_manager */ "./js/project_manager.js"
          );
        /* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./main */ "./js/main.js");

        function aside() {
          const title = document.createElement("div");
          title.id = "aside-title";
          const titleText = document.createElement("h2");
          titleText.textContent = "Projects";

          const button = document.createElement("button");
          button.id = "add-project-button";
          button.setAttribute("type", "button");
          button.textContent = "Add a new project";
          button.addEventListener("click", () =>
            document.body.appendChild(
              (0, _project_modal__WEBPACK_IMPORTED_MODULE_0__.projectModal)()
            )
          );

          const projects = document.createElement("ul");
          projects.id = "projects";

          const aside = document.createElement("aside");
          title.append(titleText, button);
          aside.append(title, projects);

          return aside;
        }

        function addAllProjects() {
          for (const project in _project_manager__WEBPACK_IMPORTED_MODULE_1__
            .projectManager.projects) {
            addProjectToAside(project);
          }
        }

        function addProjectToAside(newProject) {
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
            _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.setCurrentProject(
              e.target.parentElement
            );
          });

          project.append(name, editButton, deleteButton);
          projects.appendChild(project);
          (0, _main__WEBPACK_IMPORTED_MODULE_2__.updateProjectTitle)(project);
        }

        function updateProject(project) {
          const projects = document.getElementById("projects");
          const editedProject = Array.from(projects.children)
            .at(
              _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projects.indexOf(
                project
              )
            )
            .querySelector(".project-title");
          editedProject.textContent = `${project.title}`;
          editedProject.setAttribute("style", `background: ${project.colour}`);
        }

        function editProject() {
          const button = document.createElement("button");
          button.classList.add("edit-project-button");
          button.textContent = "...";
          button.addEventListener("click", (e) => {
            document.body.appendChild(
              (0, _project_modal__WEBPACK_IMPORTED_MODULE_0__.projectModal)(
                _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager
                  .projects[
                  _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.findProject(
                    e.target.parentElement
                  )
                ]
              )
            );
          });
          return button;
        }

        function deleteProject() {
          const button = document.createElement("button");
          button.classList.add("delete-project-button");
          button.textContent = "x";
          button.addEventListener("click", (e) => {
            _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.deleteProject(
              e.target.parentNode
            );
            button.parentElement.remove();
          });
          return button;
        }

        /***/
      },

    /***/ "./js/main.js":
      /*!********************!*\
  !*** ./js/main.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ addTodoToMain: () => /* binding */ addTodoToMain,
          /* harmony export */ footer: () => /* binding */ footer,
          /* harmony export */ main: () => /* binding */ main,
          /* harmony export */ updateProjectTitle: () =>
            /* binding */ updateProjectTitle,
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
            _todo_manager__WEBPACK_IMPORTED_MODULE_1__.todoManager.findTodo();
            document.body.appendChild(
              (0, _todo_modal__WEBPACK_IMPORTED_MODULE_2__.toDoModal)()
            );
          });

          const todos = document.createElement("ul");
          todos.id = "todos";

          const main = document.createElement("main");
          title.append(titleText, button);
          main.append(title, todos);

          return main;
        }

        function addTodoToMain(newTodo) {
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

        function updateProjectTitle(project) {
          const projectTitle = document.getElementById("main-title").firstChild;
          if (project) {
            projectTitle.textContent = `${project.title}`;
          } else {
            projectTitle.textContent = "No Project Selected!";
          }
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

        function footer() {
          const footer = document.createElement("footer");
          footer.textContent = "Hello there";

          return footer;
        }

        /***/
      },

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
        /* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./aside */ "./js/aside.js");
        /* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./main */ "./js/main.js");

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
            (0, _aside__WEBPACK_IMPORTED_MODULE_0__.addProjectToAside)(project);
            (0, _main__WEBPACK_IMPORTED_MODULE_1__.updateProjectTitle)(project);
          }

          function editProject(project, title, colour) {
            project.title = title;
            project.colour = colour;
            (0, _aside__WEBPACK_IMPORTED_MODULE_0__.updateProject)(project);
            (0, _main__WEBPACK_IMPORTED_MODULE_1__.updateProjectTitle)(project);
          }

          function deleteProject(project) {
            projects.splice(findProject(project), 1);
          }

          function setCurrentProject(project) {
            currentProject = projects[findProject(project)];
            (0, _main__WEBPACK_IMPORTED_MODULE_1__.updateProjectTitle)(
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
        /* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./main */ "./js/main.js");

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
            (0, _main__WEBPACK_IMPORTED_MODULE_1__.addTodoToMain)(todo);
          }

          function editTodo(todo, title, description, date, priority) {
            todo.title = title;
            todo.description = description;
            todo.dueDate = date;
            todo.priority = priority;
            (0, _main__WEBPACK_IMPORTED_MODULE_1__.updateTodo)(todo);
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
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__(
    "./js/todo_manager.js"
  );
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2FzaWRlLmpzIiwid2VicGFjazovLy8uL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0X21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvamVjdF9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG9fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX21vZGFsLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9wcm9qZWN0X21vZGFsXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdFRpdGxlIH0gZnJvbSBcIi4vbWFpblwiO1xuZXhwb3J0IHsgYXNpZGUsIGFkZEFsbFByb2plY3RzLCBhZGRQcm9qZWN0VG9Bc2lkZSwgdXBkYXRlUHJvamVjdCB9O1xuXG5mdW5jdGlvbiBhc2lkZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pZCA9IFwiYXNpZGUtdGl0bGVcIjtcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdC1idXR0b25cIjtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHByb2plY3RcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsKCkpXG4gICk7XG5cbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RzLmlkID0gXCJwcm9qZWN0c1wiO1xuXG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICB0aXRsZS5hcHBlbmQodGl0bGVUZXh0LCBidXR0b24pO1xuICBhc2lkZS5hcHBlbmQodGl0bGUsIHByb2plY3RzKTtcblxuICByZXR1cm4gYXNpZGU7XG59XG5cbmZ1bmN0aW9uIGFkZEFsbFByb2plY3RzKCkge1xuICBmb3IgKGNvbnN0IHByb2plY3QgaW4gcHJvamVjdE1hbmFnZXIucHJvamVjdHMpIHtcbiAgICBhZGRQcm9qZWN0VG9Bc2lkZShwcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Bc2lkZShuZXdQcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gYCR7bmV3UHJvamVjdC50aXRsZX1gO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlXCIpO1xuICBuYW1lLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kOiAke25ld1Byb2plY3QuY29sb3VyfWApO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBlZGl0UHJvamVjdCgpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkZWxldGVQcm9qZWN0KCk7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gIH0pO1xuXG4gIHByb2plY3QuYXBwZW5kKG5hbWUsIGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IGVkaXRlZFByb2plY3QgPSBBcnJheS5mcm9tKHByb2plY3RzLmNoaWxkcmVuKVxuICAgIC5hdChwcm9qZWN0TWFuYWdlci5wcm9qZWN0cy5pbmRleE9mKHByb2plY3QpKVxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gIGVkaXRlZFByb2plY3QudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIGVkaXRlZFByb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQ6ICR7cHJvamVjdC5jb2xvdXJ9YCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLi4uXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgcHJvamVjdE1vZGFsKFxuICAgICAgICBwcm9qZWN0TWFuYWdlci5wcm9qZWN0c1tcbiAgICAgICAgICBwcm9qZWN0TWFuYWdlci5maW5kUHJvamVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50KVxuICAgICAgICBdXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb19tYW5hZ2VyXCI7XG5pbXBvcnQgeyB0b0RvTW9kYWwgfSBmcm9tIFwiLi90b2RvX21vZGFsXCI7XG5leHBvcnQgeyBtYWluLCBhZGRUb2RvVG9NYWluLCB1cGRhdGVQcm9qZWN0VGl0bGUsIHVwZGF0ZVRvZG8sIGZvb3RlciB9O1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlkID0gXCJtYWluLXRpdGxlXCI7XG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gXCJsb2xcIjtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uaWQgPSBcImFkZC10b2RvLWJ1dHRvblwiO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgdG9kb1wiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2RvTWFuYWdlci5maW5kVG9kbygpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9Eb01vZGFsKCkpO1xuICB9KTtcblxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdG9kb3MuaWQgPSBcInRvZG9zXCI7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICB0aXRsZS5hcHBlbmQodGl0bGVUZXh0LCBidXR0b24pO1xuICBtYWluLmFwcGVuZCh0aXRsZSwgdG9kb3MpO1xuXG4gIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9NYWluKG5ld1RvZG8pIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLnRpdGxlfWA7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5kZXNjcmlwdGlvbn1gO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWVEYXRlXCIpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5kdWVEYXRlfWA7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5wcmlvcml0eX1gO1xuXG4gIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRvbmUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgZG9uZS5uYW1lID0gXCJkb25lXCI7XG4gIGRvbmUudmFsdWUgPSB0cnVlO1xuXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBlZGl0VG9kbygpO1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkZWxldGVUb2RvKCk7XG5cbiAgdG9kby5hcHBlbmQoXG4gICAgZG9uZSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGVkaXRCdXR0b24sXG4gICAgZGVsZXRlQnV0dG9uXG4gICk7XG4gIHRvZG9zLmFwcGVuZENoaWxkKHRvZG8pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tdGl0bGVcIikuZmlyc3RDaGlsZDtcbiAgaWYgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJObyBQcm9qZWN0IFNlbGVjdGVkIVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtdG9kby1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLi4uXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvRG9Nb2RhbChwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zW3RvZG9NYW5hZ2VyLmZpbmRUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpXSkpXG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10b2RvLWJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kbyh0b2RvKSB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgY29uc3QgZWRpdGVkVG9kbyA9IEFycmF5LmZyb20odG9kb3MuY2hpbGRyZW4pLmF0KHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3MuaW5kZXhPZih0b2RvKSk7XG4gIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICBlZGl0ZWRUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IGAke3RvZG8uZGVzY3JpcHRpb259YDtcbiAgZWRpdGVkVG9kby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZHVlRGF0ZVwiKS50ZXh0Q29udGVudCA9IGAke3RvZG8uZHVlRGF0ZX1gO1xuICBlZGl0ZWRUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1wcmlvcml0eVwiKS50ZXh0Q29udGVudCA9IGAke3RvZG8ucHJpb3JpdHl9YDtcbn1cblxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkhlbGxvIHRoZXJlXCI7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbiIsImV4cG9ydCB7IFByb2plY3QgfTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjb2xvdXIsIHRvZG9zID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvdXI7XG4gIH1cblxuICBzZXQgY29sb3VyKHZhbHVlKSB7XG4gICAgdGhpcy5fY29sb3VyID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFByb2plY3RUb0FzaWRlLCB1cGRhdGVQcm9qZWN0IH0gZnJvbSBcIi4vYXNpZGVcIjtcbmltcG9ydCB7IHVwZGF0ZVByb2plY3RUaXRsZSB9IGZyb20gXCIuL21haW5cIjtcbmV4cG9ydCB7IHByb2plY3RNYW5hZ2VyIH07XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXG4gICAgeyB0aXRsZTogXCJIb21lXCIsIGNvbG91cjogXCJvcmFuZ2VcIiwgdG9kb3M6IFtdIH0sXG4gICAgeyB0aXRsZTogXCJpbmJveFwiLCBjb2xvdXI6IFwiYmx1ZVwiLCB0b2RvczogW10gfSxcbiAgICB7IHRpdGxlOiBcInJhbmRvbVwiLCBjb2xvdXI6IFwieWVsbG93XCIsIHRvZG9zOiBbXSB9LFxuICBdO1xuICBsZXQgY3VycmVudFByb2plY3Q7XG5cbiAgZnVuY3Rpb24gZmluZFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20ocHJvamVjdHMuY2hpbGRyZW4pLmluZGV4T2YocHJvamVjdCk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgYWRkUHJvamVjdFRvQXNpZGUocHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCwgdGl0bGUsIGNvbG91cikge1xuICAgIHByb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgICBwcm9qZWN0LmNvbG91ciA9IGNvbG91cjtcbiAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnNwbGljZShmaW5kUHJvamVjdChwcm9qZWN0KSwgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tmaW5kUHJvamVjdChwcm9qZWN0KV07XG4gICAgdXBkYXRlUHJvamVjdFRpdGxlKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHMsXG4gICAgZmluZFByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuZXhwb3J0IHsgcHJvamVjdE1vZGFsIH07XG5cbmNvbnN0IGNvbG91ckFycmF5ID0ge1xuICByZWQ6IFwiUmVkXCIsXG4gIG9yYW5nZTogXCJPcmFuZ2VcIixcbiAgeWVsbG93OiBcIlllbGxvd1wiLFxuICBncmVlbjogXCJHcmVlblwiLFxuICBibHVlOiBcIkJsdWVcIixcbiAgcmViZWNjYXB1cnBsZTogXCJQdXJwbGVcIixcbiAgZ3JleTogXCJHcmV5XCIsXG59O1xuXG5mdW5jdGlvbiBwcm9qZWN0TW9kYWwocHJvamVjdCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmlkID0gXCJwcm9qZWN0LW1vZGFsXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICBpZiAoIXByb2plY3QpIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBQcm9qZWN0IFRpdGxlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3Byb2plY3QudGl0bGV9YCk7XG4gIH1cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb2xvdXJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdID0gbmV3IE9wdGlvbihcIi0tIFNlbGVjdCBhbiBvcHRpb24gLS1cIiwgXCJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gIGZvciAoY29uc3QgaW5kZXggaW4gY29sb3VyQXJyYXkpIHtcbiAgICBjb2xvdXIub3B0aW9uc1tjb2xvdXIub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICAgIGNvbG91ckFycmF5W2luZGV4XSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfVxuICBpZiAocHJvamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sb3VyLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb2xvdXIub3B0aW9uc1tpXS52YWx1ZSA9PSBwcm9qZWN0LmNvbG91cikge1xuICAgICAgICBjb2xvdXIub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvbG91ckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbG91ckRpdi5hcHBlbmRDaGlsZChjb2xvdXIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgIHN1Ym1pdE5ld1Byb2plY3QoZSwgbW9kYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJtaXRFZGl0ZWRQcm9qZWN0KGUsIHByb2plY3QsIG1vZGFsKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgY29sb3VyRGl2LCBzdWJtaXREaXYpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1Byb2plY3QoZSwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29sb3VyXCJdJykudmFsdWVcbiAgKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZFByb2plY3QoZSwgcHJvamVjdCwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdChcbiAgICBwcm9qZWN0LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbG91clwiXScpLnZhbHVlXG4gICk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuIiwiZXhwb3J0IHsgVG9kbyB9O1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kb25lID0gZmFsc2U7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuaW1wb3J0IHsgYWRkVG9kb1RvTWFpbiwgdXBkYXRlVG9kbyB9IGZyb20gXCIuL21haW5cIjtcbmV4cG9ydCB7IHRvZG9NYW5hZ2VyIH07XG5cbmNvbnN0IHRvZG9NYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZmluZFRvZG8odG9kbykge1xuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20odG9kb3MuY2hpbGRyZW4pLmluZGV4T2YodG9kbyk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIGFkZFRvZG9Ub01haW4odG9kbyk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbyh0b2RvLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdG9kby50aXRsZSA9IHRpdGxlXG4gICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdG9kby5kdWVEYXRlID0gZGF0ZVxuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHVwZGF0ZVRvZG8odG9kbylcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbykge1xuICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3Muc3BsaWNlKGZpbmRUb2RvKHRvZG8pLCAxKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNvbXBsZXRlVG9kbygpIHtcblxuICAvLyB9XG4gIHJldHVybiB7IGZpbmRUb2RvLCBhZGRUb2RvLCBlZGl0VG9kbywgZGVsZXRlVG9kbyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb19tYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuZXhwb3J0IHsgdG9Eb01vZGFsIH07XG5cbmNvbnN0IHRvZG9Qcmlvcml0eSA9IHtcbiAgMTogJ1ByaW9yaXR5IDEnLFxuICAyOiAnUHJpb3J0eSAyJyxcbiAgMzogJ1ByaW9yaXR5IDMnLFxuICA0OiAnUHJpb3JpdHkgNCdcbn1cblxuZnVuY3Rpb24gdG9Eb01vZGFsKHRvZG8pIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbC5pZCA9IFwidG9kby1tb2RhbFwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgaWYgKCF0b2RvKSB7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVG9kbyBUaXRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RvLnRpdGxlfWApXG4gIH1cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGlmICghdG9kbykge1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFRvZG8gRGVzY3JpcHRpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kby5kZXNjcmlwdGlvbn1gKVxuICB9XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gIGlmICh0b2RvKSB7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RvLmR1ZURhdGV9YClcbiAgfVxuICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZURpdi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgZm9yIChjb25zdCBpbmRleCBpbiB0b2RvUHJpb3JpdHkpIHtcbiAgICBwcmlvcml0eS5vcHRpb25zW3ByaW9yaXR5Lm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgICB0b2RvUHJpb3JpdHlbaW5kZXhdLFxuICAgICAgaW5kZXhcbiAgICApXG4gIH1cbiAgaWYgKCF0b2RvKSB7XG4gICAgcHJpb3JpdHkub3B0aW9uc1szXS5zZWxlY3RlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcmlvcml0eS5vcHRpb25zW2ldLnZhbHVlID09IHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHkub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCI7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCF0b2RvKSB7XG4gICAgICBzdWJtaXROZXdUb2RvKGUsIG1vZGFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VibWl0RWRpdGVkVG9kbyhlLCB0b2RvLCBtb2RhbClcbiAgICB9XG4gIH0pXG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgZGF0ZURpdiwgcHJpb3JpdHlEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1RvZG8oZSwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdJykudmFsdWVcbiAgKTtcbiAgdG9kb01hbmFnZXIuYWRkVG9kbyhuZXdUb2RvKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZFRvZG8oZSwgdG9kbywgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIHRvZG9NYW5hZ2VyLmVkaXRUb2RvKFxuICAgIHRvZG8sIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gIClcbiAgbW9kYWwucmVtb3ZlKClcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy90b2RvX21hbmFnZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
