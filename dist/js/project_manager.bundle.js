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
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__(
    "./js/project_manager.js"
  );
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvamVjdF9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvamVjdF91aS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG9fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX21vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG9fdWkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFByb2plY3QgfTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjb2xvdXIsIHRvZG9zID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvdXI7XG4gIH1cblxuICBzZXQgY29sb3VyKHZhbHVlKSB7XG4gICAgdGhpcy5fY29sb3VyID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFByb2plY3RVSSwgdXBkYXRlUHJvamVjdCwgdXBkYXRlUHJvamVjdFRpdGxlIH0gZnJvbSBcIi4vcHJvamVjdF91aVwiO1xuaW1wb3J0IHsgYWRkQWxsVG9kb3MgfSBmcm9tIFwiLi90b2RvX3VpXCI7XG5leHBvcnQgeyBwcm9qZWN0TWFuYWdlciB9O1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHsgdGl0bGU6IFwiSG9tZVwiLCBjb2xvdXI6IFwib3JhbmdlXCIsIHRvZG9zOiBbeyB0aXRsZTogXCJIZWxsbyBXb3JsZFwiLCBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdG9kbyBpbiB0aGUgJ0hvbWUnIHByb2plY3RcIiwgZHVlRGF0ZTogXCIyMDIzLTA1LTEzXCIsIHByaW9yaXR5OiAnNCcgfV0gfSxcbiAgICB7IHRpdGxlOiBcImluYm94XCIsIGNvbG91cjogXCJibHVlXCIsIHRvZG9zOiBbXSB9LFxuICAgIHsgdGl0bGU6IFwicmFuZG9tXCIsIGNvbG91cjogXCJ5ZWxsb3dcIiwgdG9kb3M6IFtdIH0sXG4gIF07XG4gIGxldCBjdXJyZW50UHJvamVjdDtcblxuICBmdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9qZWN0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICBsZXQgaW5kZXggPSBwcm9qZWN0XG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICAgICAgbGV0IGluZGV4ID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbikuaW5kZXhPZihwcm9qZWN0KVxuICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgYWRkUHJvamVjdFVJKHByb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIHRpdGxlLCBjb2xvdXIpIHtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdC5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdXBkYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZmluZFByb2plY3QocHJvamVjdCksIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbZmluZFByb2plY3QocHJvamVjdCldO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkQWxsVG9kb3MoKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcblxuICAgIGZpbmRQcm9qZWN0LFxuICAgIGFkZFByb2plY3QsXG4gICAgZWRpdFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBzZXRDdXJyZW50UHJvamVjdCxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmV4cG9ydCB7IHByb2plY3RNb2RhbCB9O1xuXG5jb25zdCBjb2xvdXJBcnJheSA9IHtcbiAgcmVkOiBcIlJlZFwiLFxuICBvcmFuZ2U6IFwiT3JhbmdlXCIsXG4gIHllbGxvdzogXCJZZWxsb3dcIixcbiAgZ3JlZW46IFwiR3JlZW5cIixcbiAgYmx1ZTogXCJCbHVlXCIsXG4gIHJlYmVjY2FwdXJwbGU6IFwiUHVycGxlXCIsXG4gIGdyZXk6IFwiR3JleVwiLFxufTtcblxuZnVuY3Rpb24gcHJvamVjdE1vZGFsKHByb2plY3QpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbC5pZCA9IFwicHJvamVjdC1tb2RhbFwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgUHJvamVjdCBUaXRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtwcm9qZWN0LnRpdGxlfWApO1xuICB9XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGNvbG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbG91ci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29sb3VyXCIpO1xuICBjb2xvdXIub3B0aW9uc1swXSA9IG5ldyBPcHRpb24oXCItLSBTZWxlY3QgYW4gb3B0aW9uIC0tXCIsIFwiXCIpO1xuICBjb2xvdXIub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICBmb3IgKGNvbnN0IGluZGV4IGluIGNvbG91ckFycmF5KSB7XG4gICAgY29sb3VyLm9wdGlvbnNbY29sb3VyLm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgICBjb2xvdXJBcnJheVtpbmRleF0sXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cbiAgaWYgKHByb2plY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG91ci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY29sb3VyLm9wdGlvbnNbaV0udmFsdWUgPT0gcHJvamVjdC5jb2xvdXIpIHtcbiAgICAgICAgY29sb3VyLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBjb2xvdXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2xvdXJEaXYuYXBwZW5kQ2hpbGQoY29sb3VyKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICBzdWJtaXROZXdQcm9qZWN0KGUsIG1vZGFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VibWl0RWRpdGVkUHJvamVjdChlLCBwcm9qZWN0LCBtb2RhbCk7XG4gICAgfVxuICB9KTtcbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGNvbG91ckRpdiwgc3VibWl0RGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBzdWJtaXROZXdQcm9qZWN0KGUsIG1vZGFsKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbG91clwiXScpLnZhbHVlXG4gICk7XG4gIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0ZWRQcm9qZWN0KGUsIHByb2plY3QsIG1vZGFsKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcHJvamVjdE1hbmFnZXIuZWRpdFByb2plY3QoXG4gICAgcHJvamVjdCxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb2xvdXJcIl0nKS52YWx1ZVxuICApO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5pbXBvcnQgeyBwcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9wcm9qZWN0X21vZGFsXCI7XG5leHBvcnQge1xuICBhZGRBbGxQcm9qZWN0cyxcbiAgYWRkUHJvamVjdFVJLFxuICBlZGl0UHJvamVjdCxcbiAgdXBkYXRlUHJvamVjdCxcbiAgdXBkYXRlUHJvamVjdFRpdGxlLFxuICBkZWxldGVQcm9qZWN0LFxufTtcblxuZnVuY3Rpb24gYWRkQWxsUHJvamVjdHMoKSB7XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0TWFuYWdlci5wcm9qZWN0cykge1xuICAgIGFkZFByb2plY3RVSShwcm9qZWN0KTtcbiAgfVxuICBwcm9qZWN0TWFuYWdlci5zZXRDdXJyZW50UHJvamVjdCgwKVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VUkobmV3UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGAke25ld1Byb2plY3QudGl0bGV9YDtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZDogJHtuZXdQcm9qZWN0LmNvbG91cn1gKTtcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZWRpdFByb2plY3QoKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZGVsZXRlUHJvamVjdCgpO1xuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLnNldEN1cnJlbnRQcm9qZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICB9KTtcblxuICBwcm9qZWN0LmFwcGVuZChuYW1lLCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3QtYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIi4uLlwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChcbiAgICAgIHByb2plY3RNb2RhbChcbiAgICAgICAgcHJvamVjdE1hbmFnZXIucHJvamVjdHNbXG4gICAgICAgICAgcHJvamVjdE1hbmFnZXIuZmluZFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgICAgXVxuICAgICAgKVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICBjb25zdCBlZGl0ZWRQcm9qZWN0ID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbilcbiAgICAuYXQocHJvamVjdE1hbmFnZXIucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSlcbiAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICBlZGl0ZWRQcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICBlZGl0ZWRQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kOiAke3Byb2plY3QuY29sb3VyfWApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tdGl0bGVcIikuZmlyc3RDaGlsZDtcbiAgaWYgKHByb2plY3QpIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJObyBQcm9qZWN0IFNlbGVjdGVkIVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLmRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuIiwiZXhwb3J0IHsgVG9kbyB9O1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuaW1wb3J0IHsgYWRkVG9kb1VJLCB1cGRhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb191aVwiO1xuZXhwb3J0IHsgdG9kb01hbmFnZXIgfTtcblxuY29uc3QgdG9kb01hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBmaW5kVG9kbyh0b2RvKSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbSh0b2Rvcy5jaGlsZHJlbikuaW5kZXhPZih0b2RvKTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUb2RvKHRvZG8pIHtcbiAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zLnB1c2godG9kbyk7XG4gICAgYWRkVG9kb1VJKHRvZG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRvZG8odG9kbywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRvZG8udGl0bGUgPSB0aXRsZTtcbiAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdG9kby5kdWVEYXRlID0gZGF0ZTtcbiAgICB0b2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdXBkYXRlVG9kbyh0b2RvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbykge1xuICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3Muc3BsaWNlKGZpbmRUb2RvKHRvZG8pLCAxKTtcbiAgfVxuICByZXR1cm4geyBmaW5kVG9kbywgYWRkVG9kbywgZWRpdFRvZG8sIGRlbGV0ZVRvZG8gfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyB0b2RvTWFuYWdlciB9IGZyb20gXCIuL3RvZG9fbWFuYWdlclwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcbmV4cG9ydCB7IHRvRG9Nb2RhbCB9O1xuXG5jb25zdCB0b2RvUHJpb3JpdHkgPSB7XG4gIDE6IFwiUHJpb3JpdHkgMVwiLFxuICAyOiBcIlByaW9ydHkgMlwiLFxuICAzOiBcIlByaW9yaXR5IDNcIixcbiAgNDogXCJQcmlvcml0eSA0XCIsXG59O1xuXG5mdW5jdGlvbiB0b0RvTW9kYWwodG9kbykge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmlkID0gXCJ0b2RvLW1vZGFsXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICBpZiAoIXRvZG8pIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUb2RvIFRpdGxlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RvZG8udGl0bGV9YCk7XG4gIH1cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGlmICghdG9kbykge1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFRvZG8gRGVzY3JpcHRpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kby5kZXNjcmlwdGlvbn1gKTtcbiAgfVxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBkYXRlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXRlXCIpO1xuICBpZiAodG9kbykge1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kby5kdWVEYXRlfWApO1xuICB9XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBmb3IgKGNvbnN0IGluZGV4IGluIHRvZG9Qcmlvcml0eSkge1xuICAgIHByaW9yaXR5Lm9wdGlvbnNbcHJpb3JpdHkub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICAgIHRvZG9Qcmlvcml0eVtpbmRleF0sXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cbiAgaWYgKCF0b2RvKSB7XG4gICAgcHJpb3JpdHkub3B0aW9uc1szXS5zZWxlY3RlZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmlvcml0eS5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJpb3JpdHkub3B0aW9uc1tpXS52YWx1ZSA9PSB0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXR5Lm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgVG9kb1wiO1xuICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghdG9kbykge1xuICAgICAgc3VibWl0TmV3VG9kbyhlLCBtb2RhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Ym1pdEVkaXRlZFRvZG8oZSwgdG9kbywgbW9kYWwpO1xuICAgIH1cbiAgfSk7XG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgZGF0ZURpdiwgcHJpb3JpdHlEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1RvZG8oZSwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdJykudmFsdWVcbiAgKTtcbiAgdG9kb01hbmFnZXIuYWRkVG9kbyhuZXdUb2RvKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZFRvZG8oZSwgdG9kbywgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvTWFuYWdlci5lZGl0VG9kbyhcbiAgICB0b2RvLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb19tYW5hZ2VyXCI7XG5pbXBvcnQgeyB0b0RvTW9kYWwgfSBmcm9tIFwiLi90b2RvX21vZGFsXCI7XG5leHBvcnQgeyBhZGRBbGxUb2RvcywgYWRkVG9kb1VJLCBlZGl0VG9kbywgdXBkYXRlVG9kbywgZGVsZXRlVG9kbyB9O1xuXG5mdW5jdGlvbiBhZGRBbGxUb2RvcygpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3NcIilcbiAgICB0b2Rvcy5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zKSB7XG4gICAgICAgIGFkZFRvZG9VSSh0b2RvKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9kb1VJKG5ld1RvZG8pIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLnRpdGxlfWA7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5kZXNjcmlwdGlvbn1gO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWVEYXRlXCIpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5kdWVEYXRlfWA7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gIHByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7bmV3VG9kby5wcmlvcml0eX1gO1xuXG4gIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRvbmUudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgZG9uZS5uYW1lID0gXCJkb25lXCI7XG4gIGRvbmUudmFsdWUgPSB0cnVlO1xuICBkb25lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbmdyYXR1bGF0aW9ucygpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgZG9uZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0sIDE1MDApXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjb25ncmF0dWxhdGlvbnNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLXBvcHVwJylcbiAgICAgIGNvbmdyYXR1bGF0aW9uc01vZGFsLnJlbW92ZSgpXG4gICAgfSwgMzAwMClcbiAgfSlcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZWRpdFRvZG8oKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZGVsZXRlVG9kbygpO1xuXG4gIHRvZG8uYXBwZW5kKFxuICAgIGRvbmUsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBlZGl0QnV0dG9uLFxuICAgIGRlbGV0ZUJ1dHRvblxuICApO1xuICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10b2RvLWJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCIuLi5cIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoXG4gICAgICB0b0RvTW9kYWwoXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3NbXG4gICAgICAgICAgdG9kb01hbmFnZXIuZmluZFRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgICAgXVxuICAgICAgKVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUb2RvKHRvZG8pIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuICBjb25zdCBlZGl0ZWRUb2RvID0gQXJyYXkuZnJvbSh0b2Rvcy5jaGlsZHJlbikuYXQoXG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcy5pbmRleE9mKHRvZG8pXG4gICk7XG4gIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXRpdGxlXCIpLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICBlZGl0ZWRUb2RvLnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIudG9kby1kZXNjcmlwdGlvblwiXG4gICkudGV4dENvbnRlbnQgPSBgJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLWR1ZURhdGVcIikudGV4dENvbnRlbnQgPSBgJHt0b2RvLmR1ZURhdGV9YDtcbiAgZWRpdGVkVG9kby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSBgJHt0b2RvLnByaW9yaXR5fWA7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvZG8tYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8oZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gIH0pO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjb25ncmF0dWxhdGlvbnMoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgY29uc3Qgc3VjY2Vzc1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBjbG9zZVBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjb25zdCBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gIHN1Y2Nlc3NQb3B1cC5jbGFzc0xpc3QuYWRkKFwic3VjY2Vzcy1wb3B1cFwiKVxuICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb25ncmF0cyEg8J+OiVwiXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiXG4gIFxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzdWNjZXNzUG9wdXAucmVtb3ZlKClcbiAgfSlcblxuICBjbG9zZVBvcHVwLmFwcGVuZENoaWxkKGJ1dHRvbilcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHRleHQpXG4gIHN1Y2Nlc3NQb3B1cC5hcHBlbmQoY2xvc2VQb3B1cCwgcG9wdXBDb250ZW50KVxuICBtYWluLmFwcGVuZChzdWNjZXNzUG9wdXApXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL3Byb2plY3RfbWFuYWdlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==