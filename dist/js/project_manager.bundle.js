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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzdIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvamVjdF9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcHJvamVjdF91aS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG9fbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90b2RvX21vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG9fdWkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFByb2plY3QgfTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjb2xvdXIsIHRvZG9zID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvdXI7XG4gIH1cblxuICBzZXQgY29sb3VyKHZhbHVlKSB7XG4gICAgdGhpcy5fY29sb3VyID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFByb2plY3RVSSwgdXBkYXRlUHJvamVjdCwgdXBkYXRlUHJvamVjdFRpdGxlIH0gZnJvbSBcIi4vcHJvamVjdF91aVwiO1xuaW1wb3J0IHsgYWRkQWxsVG9kb3MgfSBmcm9tIFwiLi90b2RvX3VpXCI7XG5leHBvcnQgeyBwcm9qZWN0TWFuYWdlciB9O1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgIGNvbG91cjogXCJvcmFuZ2VcIixcbiAgICAgIHRvZG9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJIZWxsbyBXb3JsZFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB0b2RvIGluIHRoZSAnSG9tZScgcHJvamVjdFwiLFxuICAgICAgICAgIGR1ZURhdGU6IFwiMjAyMy0wNS0xM1wiLFxuICAgICAgICAgIHByaW9yaXR5OiBcIjRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7IHRpdGxlOiBcImluYm94XCIsIGNvbG91cjogXCJibHVlXCIsIHRvZG9zOiBbXSB9LFxuICAgIHsgdGl0bGU6IFwicmFuZG9tXCIsIGNvbG91cjogXCJ5ZWxsb3dcIiwgdG9kb3M6IFtdIH0sXG4gIF07XG4gIGxldCBjdXJyZW50UHJvamVjdDtcblxuICBmdW5jdGlvbiBmaW5kUHJvamVjdChwcm9qZWN0KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9qZWN0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICBsZXQgaW5kZXggPSBwcm9qZWN0O1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gICAgICBsZXQgaW5kZXggPSBBcnJheS5mcm9tKHByb2plY3RzLmNoaWxkcmVuKS5pbmRleE9mKHByb2plY3QpO1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0XG4gICAgYWRkUHJvamVjdFVJKHByb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KTtcbiAgICBhZGRBbGxUb2RvcygpXG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0LCB0aXRsZSwgY29sb3VyKSB7XG4gICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIHByb2plY3QuY29sb3VyID0gY29sb3VyO1xuICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGZpbmRQcm9qZWN0KHByb2plY3QpLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ZpbmRQcm9qZWN0KHByb2plY3QpXTtcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGUoY3VycmVudFByb2plY3QpO1xuICAgIGFkZEFsbFRvZG9zKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb2plY3RzLFxuXG4gICAgZmluZFByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHNldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuZXhwb3J0IHsgcHJvamVjdE1vZGFsIH07XG5cbmNvbnN0IGNvbG91ckFycmF5ID0ge1xuICByZWQ6IFwiUmVkXCIsXG4gIG9yYW5nZTogXCJPcmFuZ2VcIixcbiAgeWVsbG93OiBcIlllbGxvd1wiLFxuICBncmVlbjogXCJHcmVlblwiLFxuICBibHVlOiBcIkJsdWVcIixcbiAgcmViZWNjYXB1cnBsZTogXCJQdXJwbGVcIixcbiAgZ3JleTogXCJHcmV5XCIsXG59O1xuXG5mdW5jdGlvbiBwcm9qZWN0TW9kYWwocHJvamVjdCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmlkID0gXCJwcm9qZWN0LW1vZGFsXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICBpZiAoIXByb2plY3QpIHtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBQcm9qZWN0IFRpdGxlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3Byb2plY3QudGl0bGV9YCk7XG4gIH1cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb2xvdXJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdID0gbmV3IE9wdGlvbihcIi0tIFNlbGVjdCBhbiBvcHRpb24gLS1cIiwgXCJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gIGZvciAoY29uc3QgaW5kZXggaW4gY29sb3VyQXJyYXkpIHtcbiAgICBjb2xvdXIub3B0aW9uc1tjb2xvdXIub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICAgIGNvbG91ckFycmF5W2luZGV4XSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfVxuICBpZiAocHJvamVjdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sb3VyLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb2xvdXIub3B0aW9uc1tpXS52YWx1ZSA9PSBwcm9qZWN0LmNvbG91cikge1xuICAgICAgICBjb2xvdXIub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvbG91ckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbG91ckRpdi5hcHBlbmRDaGlsZChjb2xvdXIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgIHN1Ym1pdE5ld1Byb2plY3QoZSwgbW9kYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJtaXRFZGl0ZWRQcm9qZWN0KGUsIHByb2plY3QsIG1vZGFsKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgY29sb3VyRGl2LCBzdWJtaXREaXYpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1Byb2plY3QoZSwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29sb3VyXCJdJykudmFsdWVcbiAgKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZFByb2plY3QoZSwgcHJvamVjdCwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdChcbiAgICBwcm9qZWN0LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbG91clwiXScpLnZhbHVlXG4gICk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7IHByb2plY3RNb2RhbCB9IGZyb20gXCIuL3Byb2plY3RfbW9kYWxcIjtcbmV4cG9ydCB7XG4gIGFkZEFsbFByb2plY3RzLFxuICBhZGRQcm9qZWN0VUksXG4gIGVkaXRQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0VGl0bGUsXG4gIGRlbGV0ZVByb2plY3QsXG59O1xuXG5mdW5jdGlvbiBhZGRBbGxQcm9qZWN0cygpIHtcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RNYW5hZ2VyLnByb2plY3RzKSB7XG4gICAgYWRkUHJvamVjdFVJKHByb2plY3QpO1xuICB9XG4gIHByb2plY3RNYW5hZ2VyLnNldEN1cnJlbnRQcm9qZWN0KDApO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VUkobmV3UHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvbG91ci50ZXh0Q29udGVudCA9ICfigKInXG4gIGNvbG91ci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbG91cicpXG4gIGNvbG91ci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgY29sb3I6ICR7bmV3UHJvamVjdC5jb2xvdXJ9YCk7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IGAke25ld1Byb2plY3QudGl0bGV9YDtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcblxuICBjb25zdCBuYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGVkaXRQcm9qZWN0KCk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRlbGV0ZVByb2plY3QoKTtcblxuICBjb25zdCBidXR0b25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHByb2plY3RNYW5hZ2VyLnNldEN1cnJlbnRQcm9qZWN0KGUuY3VycmVudFRhcmdldCk7XG4gIH0pO1xuXG4gIG5hbWVTZWN0aW9uLmFwcGVuZChjb2xvdXIsIG5hbWUpXG4gIGJ1dHRvblNlY3Rpb24uYXBwZW5kKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbilcbiAgcHJvamVjdC5hcHBlbmQobmFtZVNlY3Rpb24sIGJ1dHRvblNlY3Rpb24pO1xuICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3QtYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIi4uLlwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChcbiAgICAgIHByb2plY3RNb2RhbChcbiAgICAgICAgcHJvamVjdE1hbmFnZXIucHJvamVjdHNbXG4gICAgICAgICAgcHJvamVjdE1hbmFnZXIuZmluZFByb2plY3QoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICBdXG4gICAgICApXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gIGNvbnN0IGVkaXRlZFByb2plY3RUaXRsZSA9IEFycmF5LmZyb20ocHJvamVjdHMuY2hpbGRyZW4pXG4gICAgLmF0KHByb2plY3RNYW5hZ2VyLnByb2plY3RzLmluZGV4T2YocHJvamVjdCkpXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgZWRpdGVkUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICBjb25zdCBlZGl0ZWRQcm9qZWN0Q29sb3VyID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbilcbiAgLmF0KHByb2plY3RNYW5hZ2VyLnByb2plY3RzLmluZGV4T2YocHJvamVjdCkpXG4gIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29sb3VyXCIpO1xuICBlZGl0ZWRQcm9qZWN0Q29sb3VyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBjb2xvcjogJHtwcm9qZWN0LmNvbG91cn1gKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLXRpdGxlXCIpLmZpcnN0Q2hpbGQ7XG4gIGlmIChwcm9qZWN0KSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiTm8gUHJvamVjdCBTZWxlY3RlZCFcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KGUuY3VycmVudFRhcmdldCk7XG4gICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59XG4iLCJleHBvcnQgeyBUb2RvIH07XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5pbXBvcnQgeyBhZGRUb2RvVUksIHVwZGF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvX3VpXCI7XG5leHBvcnQgeyB0b2RvTWFuYWdlciB9O1xuXG5jb25zdCB0b2RvTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGZpbmRUb2RvKHRvZG8pIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3NcIik7XG4gICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKHRvZG9zLmNoaWxkcmVuKS5pbmRleE9mKHRvZG8pO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRvZG8odG9kbykge1xuICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3MucHVzaCh0b2RvKTtcbiAgICBhZGRUb2RvVUkodG9kbyk7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbyh0b2RvLCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdG9kby50aXRsZSA9IHRpdGxlO1xuICAgIHRvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0b2RvLmR1ZURhdGUgPSBkYXRlO1xuICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB1cGRhdGVUb2RvKHRvZG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvKSB7XG4gICAgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcy5zcGxpY2UoZmluZFRvZG8odG9kbyksIDEpO1xuICB9XG4gIHJldHVybiB7IGZpbmRUb2RvLCBhZGRUb2RvLCBlZGl0VG9kbywgZGVsZXRlVG9kbyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb19tYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuZXhwb3J0IHsgdG9Eb01vZGFsIH07XG5cbmNvbnN0IHRvZG9Qcmlvcml0eSA9IHtcbiAgMTogXCJQcmlvcml0eSAxXCIsXG4gIDI6IFwiUHJpb3J0eSAyXCIsXG4gIDM6IFwiUHJpb3JpdHkgM1wiLFxuICA0OiBcIlByaW9yaXR5IDRcIixcbn07XG5cbmZ1bmN0aW9uIHRvRG9Nb2RhbCh0b2RvKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuaWQgPSBcInRvZG8tbW9kYWxcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gIGlmICghdG9kbykge1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFRvZG8gVGl0bGVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kby50aXRsZX1gKTtcbiAgfVxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgaWYgKCF0b2RvKSB7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVG9kbyBEZXNjcmlwdGlvblwiKTtcbiAgfSBlbHNlIHtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RvLmRlc2NyaXB0aW9ufWApO1xuICB9XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRhdGVcIik7XG4gIGlmICh0b2RvKSB7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RvLmR1ZURhdGV9YCk7XG4gIH1cbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gIGZvciAoY29uc3QgaW5kZXggaW4gdG9kb1ByaW9yaXR5KSB7XG4gICAgcHJpb3JpdHkub3B0aW9uc1twcmlvcml0eS5vcHRpb25zLmxlbmd0aF0gPSBuZXcgT3B0aW9uKFxuICAgICAgdG9kb1ByaW9yaXR5W2luZGV4XSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfVxuICBpZiAoIXRvZG8pIHtcbiAgICBwcmlvcml0eS5vcHRpb25zWzNdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcmlvcml0eS5vcHRpb25zW2ldLnZhbHVlID09IHRvZG8ucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHkub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBUb2RvXCI7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCF0b2RvKSB7XG4gICAgICBzdWJtaXROZXdUb2RvKGUsIG1vZGFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VibWl0RWRpdGVkVG9kbyhlLCB0b2RvLCBtb2RhbCk7XG4gICAgfVxuICB9KTtcbiAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBkYXRlRGl2LCBwcmlvcml0eURpdiwgc3VibWl0RGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gc3VibWl0TmV3VG9kbyhlLCBtb2RhbCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGF0ZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicHJpb3JpdHlcIl0nKS52YWx1ZVxuICApO1xuICB0b2RvTWFuYWdlci5hZGRUb2RvKG5ld1RvZG8pO1xuICBtb2RhbC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdGVkVG9kbyhlLCB0b2RvLCBtb2RhbCkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9NYW5hZ2VyLmVkaXRUb2RvKFxuICAgIHRvZG8sXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRhdGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInByaW9yaXR5XCJdJykudmFsdWVcbiAgKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RfbWFuYWdlclwiO1xuaW1wb3J0IHsgdG9kb01hbmFnZXIgfSBmcm9tIFwiLi90b2RvX21hbmFnZXJcIjtcbmltcG9ydCB7IHRvRG9Nb2RhbCB9IGZyb20gXCIuL3RvZG9fbW9kYWxcIjtcbmV4cG9ydCB7IGFkZEFsbFRvZG9zLCBhZGRUb2RvVUksIGVkaXRUb2RvLCB1cGRhdGVUb2RvLCBkZWxldGVUb2RvIH07XG5cbmZ1bmN0aW9uIGFkZEFsbFRvZG9zKCkge1xuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3NcIik7XG4gIHRvZG9zLnJlcGxhY2VDaGlsZHJlbigpO1xuICBmb3IgKGNvbnN0IHRvZG8gb2YgcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKS50b2Rvcykge1xuICAgIGFkZFRvZG9VSSh0b2RvKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvVUkobmV3VG9kbykge1xuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb3NcIik7XG4gIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGAke25ld1RvZG8udGl0bGV9YDtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLmRlc2NyaXB0aW9ufWA7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZURhdGVcIik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLmR1ZURhdGV9YDtcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtuZXdUb2RvLnByaW9yaXR5fWA7XG5cbiAgY29uc3QgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZG9uZS50eXBlID0gXCJjaGVja2JveFwiO1xuICBkb25lLm5hbWUgPSBcImRvbmVcIjtcbiAgZG9uZS52YWx1ZSA9IHRydWU7XG4gIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uZ3JhdHVsYXRpb25zKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgZG9uZS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0sIDE1MDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgY29uZ3JhdHVsYXRpb25zTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Y2Nlc3MtcG9wdXBcIik7XG4gICAgICBjb25ncmF0dWxhdGlvbnNNb2RhbC5yZW1vdmUoKTtcbiAgICB9LCAzMDAwKTtcbiAgfSk7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGVkaXRUb2RvKCk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRlbGV0ZVRvZG8oKTtcblxuICB0b2RvLmFwcGVuZChcbiAgICBkb25lLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgZWRpdEJ1dHRvbixcbiAgICBkZWxldGVCdXR0b25cbiAgKTtcbiAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kbyk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtdG9kby1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLi4uXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgdG9Eb01vZGFsKFxuICAgICAgICBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpLnRvZG9zW1xuICAgICAgICAgIHRvZG9NYW5hZ2VyLmZpbmRUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpXG4gICAgICAgIF1cbiAgICAgIClcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVG9kbyh0b2RvKSB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgY29uc3QgZWRpdGVkVG9kbyA9IEFycmF5LmZyb20odG9kb3MuY2hpbGRyZW4pLmF0KFxuICAgIHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCkudG9kb3MuaW5kZXhPZih0b2RvKVxuICApO1xuICBlZGl0ZWRUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10aXRsZVwiKS50ZXh0Q29udGVudCA9IGAke3RvZG8udGl0bGV9YDtcbiAgZWRpdGVkVG9kby5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnRvZG8tZGVzY3JpcHRpb25cIlxuICApLnRleHRDb250ZW50ID0gYCR7dG9kby5kZXNjcmlwdGlvbn1gO1xuICBlZGl0ZWRUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1kdWVEYXRlXCIpLnRleHRDb250ZW50ID0gYCR7dG9kby5kdWVEYXRlfWA7XG4gIGVkaXRlZFRvZG8ucXVlcnlTZWxlY3RvcihcIi50b2RvLXByaW9yaXR5XCIpLnRleHRDb250ZW50ID0gYCR7dG9kby5wcmlvcml0eX1gO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10b2RvLWJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY29uZ3JhdHVsYXRpb25zKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IHN1Y2Nlc3NQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgc3VjY2Vzc1BvcHVwLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzLXBvcHVwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJDb25ncmF0cyEg8J+OiVwiO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcInhcIjtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzdWNjZXNzUG9wdXAucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGNsb3NlUG9wdXAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICBzdWNjZXNzUG9wdXAuYXBwZW5kKGNsb3NlUG9wdXAsIHBvcHVwQ29udGVudCk7XG4gIG1haW4uYXBwZW5kKHN1Y2Nlc3NQb3B1cCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvcHJvamVjdF9tYW5hZ2VyLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
