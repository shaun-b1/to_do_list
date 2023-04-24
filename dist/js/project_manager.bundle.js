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
          /* harmony export */ updateProjectInAside: () =>
            /* binding */ updateProjectInAside,
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
          titleText.innerText = "Projects";

          const button = document.createElement("button");
          button.id = "add-project-button";
          button.setAttribute("type", "button");
          button.innerText = "Add a new project";
          button.addEventListener("click", () =>
            document.body.appendChild(
              (0,
              _project_modal__WEBPACK_IMPORTED_MODULE_0__.createProjectModal)()
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

        function updateProjectInAside(project) {
          const projects = document.getElementById("projects");
          Array.from(projects.children);
          const editedProject = Array.from(projects.children)
            .at(
              _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.projects.indexOf(
                project
              )
            )
            .querySelector(".title");
          editedProject.innerText = `${project.title}`;
          editedProject.setAttribute("style", `background: ${project.colour}`);
        }

        function editProject() {
          const button = document.createElement("button");
          button.classList.add("edit-project-button");
          button.textContent = "...";
          button.addEventListener("click", (e) => {
            document.body.appendChild(
              (0, _project_modal__WEBPACK_IMPORTED_MODULE_0__.editProjectModal)(
                _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager
                  .projects[
                  _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.findProject(
                    e.target.parentElement
                  )
                ],
                _project_manager__WEBPACK_IMPORTED_MODULE_1__.projectManager.findProject(
                  e.target.parentElement
                )
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
          /* harmony export */
        });
        /* harmony import */ var _todo_modal__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./todo_modal */ "./js/todo_modal.js");

        function main() {
          const title = document.createElement("div");
          title.id = "main-title";
          const titleText = document.createElement("h2");
          titleText.innerHTML = "lol";

          const button = document.createElement("button");
          button.id = "add-todo-button";
          button.setAttribute("type", "button");
          button.innerText = "Click me!";
          button.addEventListener("click", () => {
            document.body.appendChild(
              (0, _todo_modal__WEBPACK_IMPORTED_MODULE_0__.toDoModal)()
            );
          });

          const todos = document.createElement("ul");
          todos.id = "todos";

          const main = document.createElement("main");
          title.append(titleText, button);
          main.append(title, todos);

          return main;
        }

        function updateProjectTitle(project) {
          const projectTitle = document.getElementById("main-title").firstChild;
          if (project) {
            projectTitle.innerText = `${project.title}`;
          } else {
            projectTitle.innerText = "No Project Selected!";
          }
        }

        function addTodoToMain(newTodo) {
          const todos = document.querySelector("#todos");
          const todo = document.createElement("li");
          todo.classList.add("todo");

          const title = document.createElement("h3");
          title.classList.add("todo-title");
          title.innerText = `${newTodo.title}`;

          const description = document.createElement("p");
          description.classList.add("todo-description");
          description.innerText = `${newTodo.description}`;

          const dueDate = document.createElement("p");
          dueDate.classList.add("todo-dueDate");
          dueDate.innerText = `${newTodo.dueDate}`;

          const priority = document.createElement("p");
          priority.classList.add("todo-priority");
          priority.innerText = `${newTodo.priority}`;

          const done = document.createElement("input");
          done.type = "checkbox";
          done.name = "done";
          done.value = true;

          todo.append(done, title, description, dueDate, priority);
          todos.appendChild(todo);
        }

        function footer() {
          const footer = document.createElement("footer");
          footer.innerText = "Hello there";

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
            (0, _aside__WEBPACK_IMPORTED_MODULE_0__.updateProjectInAside)(
              project
            );
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

          function showCurrentProject() {
            return currentProject;
          }

          return {
            projects,
            findProject,
            addProject,
            editProject,
            deleteProject,
            setCurrentProject,
            showCurrentProject,
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
          /* harmony export */ createProjectModal: () =>
            /* binding */ createProjectModal,
          /* harmony export */ editProjectModal: () =>
            /* binding */ editProjectModal,
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

        function createProjectModal() {
          const modal = document.createElement("section");
          modal.classList.add("modal");
          modal.id = "project-modal";

          const form = document.createElement("form");

          const title = document.createElement("input");
          title.setAttribute("type", "text");
          title.setAttribute("name", "title");
          title.setAttribute("placeholder", "New Project Title");
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
          const colourDiv = document.createElement("div");
          colourDiv.appendChild(colour);

          const submit = document.createElement("button");
          submit.setAttribute("type", "submit");
          submit.innerText = "Click me!";
          submit.onclick = (e) => submitNewProject(e, modal);
          const submitDiv = document.createElement("div");
          submitDiv.appendChild(submit);

          form.append(titleDiv, colourDiv, submitDiv);
          modal.appendChild(form);

          return modal;
        }

        function editProjectModal(project) {
          const modal = document.createElement("section");
          modal.classList.add("modal");
          modal.id = "project-modal";

          const form = document.createElement("form");

          const title = document.createElement("input");
          title.setAttribute("type", "text");
          title.setAttribute("name", "title");
          title.setAttribute("value", `${project.title}`);
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
          for (var i = 0; i < colour.options.length; i++) {
            if (colour.options[i].value == project.colour) {
              colour.options[i].selected = true;
            }
          }
          const colourDiv = document.createElement("div");
          colourDiv.appendChild(colour);

          const submit = document.createElement("button");
          submit.setAttribute("type", "submit");
          submit.innerText = "Click me!";
          submit.onclick = (e) => submitEditedProject(e, project, modal);
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
          //   function findTodo(currentProject) {
          //     console.log(currentProject);
          //   }

          function addTodo(todo) {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager
              .showCurrentProject()
              .todos.push(todo);
            console.log(
              _project_manager__WEBPACK_IMPORTED_MODULE_0__.projectManager.showCurrentProject()
                .todos
            );
            (0, _main__WEBPACK_IMPORTED_MODULE_1__.addTodoToMain)(todo);
          }

          // function editTodo() {
          //     // logic to edit the selected todo
          // }

          // function deleteTodo() {
          //     // logic to delete the selected todo
          // }

          // function completeTodo() {

          // }
          return { addTodo };
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

        function toDoModal() {
          const modal = document.createElement("section");
          modal.classList.add("modal");
          modal.id = "todo-modal";

          const form = document.createElement("form");

          const title = document.createElement("input");
          title.setAttribute("type", "text");
          title.setAttribute("name", "title");
          title.setAttribute("placeholder", "New Todo Title");
          const titleDiv = document.createElement("div");
          titleDiv.appendChild(title);

          const description = document.createElement("input");
          description.setAttribute("type", "text");
          description.setAttribute("name", "description");
          description.setAttribute("placeholder", "New Todo Description");
          const descriptionDiv = document.createElement("div");
          descriptionDiv.appendChild(description);

          const date = document.createElement("input");
          date.setAttribute("type", "text");
          date.setAttribute("name", "date");
          date.setAttribute("placeholder", "New Todo Date");
          const dateDiv = document.createElement("div");
          dateDiv.appendChild(date);

          const priority = document.createElement("input");
          priority.setAttribute("type", "text");
          priority.setAttribute("name", "priority");
          priority.setAttribute("placeholder", "New Todo Priority");
          const priorityDiv = document.createElement("div");
          priorityDiv.appendChild(priority);

          const submit = document.createElement("button");
          submit.setAttribute("type", "submit");
          submit.innerText = "Click me!";
          const submitDiv = document.createElement("div");
          submitDiv.appendChild(submit);
          submit.addEventListener("click", (e) => submitNewTodo(e, modal));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFtQjtBQUNyQjtBQUNBOzs7Ozs7O1VDNURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYXNpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0X21vZGFsLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdG9kb19tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2pzL3RvZG9fbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVByb2plY3RNb2RhbCwgZWRpdFByb2plY3RNb2RhbCB9IGZyb20gXCIuL3Byb2plY3RfbW9kYWxcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0VGl0bGUgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmZ1bmN0aW9uIGFzaWRlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlkID0gXCJhc2lkZS10aXRsZVwiO1xuICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlVGV4dC5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmlkID0gXCJhZGQtcHJvamVjdC1idXR0b25cIjtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBhIG5ldyBwcm9qZWN0XCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RNb2RhbCgpKVxuICApO1xuXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0cy5pZCA9IFwicHJvamVjdHNcIjtcblxuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgdGl0bGUuYXBwZW5kKHRpdGxlVGV4dCwgYnV0dG9uKTtcbiAgYXNpZGUuYXBwZW5kKHRpdGxlLCBwcm9qZWN0cyk7XG5cbiAgcmV0dXJuIGFzaWRlO1xufVxuXG5mdW5jdGlvbiBhZGRBbGxQcm9qZWN0cygpIHtcbiAgZm9yKGNvbnN0IHByb2plY3QgaW4gcHJvamVjdE1hbmFnZXIucHJvamVjdHMpIHtcbiAgICBhZGRQcm9qZWN0VG9Bc2lkZShwcm9qZWN0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0FzaWRlKG5ld1Byb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBgJHtuZXdQcm9qZWN0LnRpdGxlfWA7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gIG5hbWUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQ6ICR7bmV3UHJvamVjdC5jb2xvdXJ9YCk7XG5cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGVkaXRQcm9qZWN0KCk7XG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRlbGV0ZVByb2plY3QoKTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBwcm9qZWN0TWFuYWdlci5zZXRDdXJyZW50UHJvamVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgfSk7XG5cbiAgcHJvamVjdC5hcHBlbmQobmFtZSwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEluQXNpZGUocHJvamVjdCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gIEFycmF5LmZyb20ocHJvamVjdHMuY2hpbGRyZW4pO1xuICBjb25zdCBlZGl0ZWRQcm9qZWN0ID0gQXJyYXkuZnJvbShwcm9qZWN0cy5jaGlsZHJlbilcbiAgICAuYXQocHJvamVjdE1hbmFnZXIucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSlcbiAgICAucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgZWRpdGVkUHJvamVjdC5pbm5lclRleHQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIGVkaXRlZFByb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQ6ICR7cHJvamVjdC5jb2xvdXJ9YCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLi4uXCI7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFxuICAgICAgZWRpdFByb2plY3RNb2RhbChcbiAgICAgICAgcHJvamVjdE1hbmFnZXIucHJvamVjdHNbXG4gICAgICAgICAgcHJvamVjdE1hbmFnZXIuZmluZFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgICAgXSxcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuZmluZFByb2plY3QoZS50YXJnZXQucGFyZW50RWxlbWVudClcbiAgICAgIClcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChlLnRhcmdldC5wYXJlbnROb2RlKTtcbiAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG4gIHJldHVybiBidXR0b247XG59XG5cbmV4cG9ydCB7IGFzaWRlLCBhZGRBbGxQcm9qZWN0cywgYWRkUHJvamVjdFRvQXNpZGUsIHVwZGF0ZVByb2plY3RJbkFzaWRlIH07XG4iLCJpbXBvcnQgeyB0b0RvTW9kYWwgfSBmcm9tIFwiLi90b2RvX21vZGFsXCI7XG5leHBvcnQgeyBtYWluLCB1cGRhdGVQcm9qZWN0VGl0bGUsIGFkZFRvZG9Ub01haW4sIGZvb3RlciB9O1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlkID0gXCJtYWluLXRpdGxlXCI7XG4gIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGVUZXh0LmlubmVySFRNTCA9IFwibG9sXCI7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLmlkID0gXCJhZGQtdG9kby1idXR0b25cIjtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pbm5lclRleHQgPSBcIkNsaWNrIG1lIVwiO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvRG9Nb2RhbCgpKVxuICB9KTtcblxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgdG9kb3MuaWQgPSBcInRvZG9zXCJcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIHRpdGxlLmFwcGVuZCh0aXRsZVRleHQsIGJ1dHRvbik7XG4gIG1haW4uYXBwZW5kKHRpdGxlLCB0b2Rvcyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi10aXRsZVwiKS5maXJzdENoaWxkO1xuICBpZiAocHJvamVjdCkge1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IFwiTm8gUHJvamVjdCBTZWxlY3RlZCFcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb2RvVG9NYWluKG5ld1RvZG8pIHtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpXG4gIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpXG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKVxuICB0aXRsZS5pbm5lclRleHQgPSBgJHtuZXdUb2RvLnRpdGxlfWBcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJylcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7bmV3VG9kby5kZXNjcmlwdGlvbn1gXG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlRGF0ZScpXG4gIGR1ZURhdGUuaW5uZXJUZXh0ID0gYCR7bmV3VG9kby5kdWVEYXRlfWBcblxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0b2RvLXByaW9yaXR5JylcbiAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gYCR7bmV3VG9kby5wcmlvcml0eX1gXG5cbiAgY29uc3QgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgZG9uZS50eXBlID0gXCJjaGVja2JveFwiXG4gIGRvbmUubmFtZSA9IFwiZG9uZVwiXG4gIGRvbmUudmFsdWUgPSB0cnVlXG5cbiAgdG9kby5hcHBlbmQoZG9uZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSlcbiAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kbylcbn1cblxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIuaW5uZXJUZXh0ID0gXCJIZWxsbyB0aGVyZVwiO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBjb2xvdXIsIHRvZG9zID0gW10pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xvdXI7XG4gIH1cblxuICBzZXQgY29sb3VyKHZhbHVlKSB7XG4gICAgdGhpcy5fY29sb3VyID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFByb2plY3RUb0FzaWRlLCB1cGRhdGVQcm9qZWN0SW5Bc2lkZSB9IGZyb20gXCIuL2FzaWRlXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0VGl0bGUgfSBmcm9tIFwiLi9tYWluXCI7XG5leHBvcnQgeyBwcm9qZWN0TWFuYWdlciB9O1xuXG5jb25zdCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gWyB7dGl0bGU6ICdIb21lJywgY29sb3VyOiAnb3JhbmdlJywgdG9kb3M6IFtdfSwge3RpdGxlOiAnaW5ib3gnLCBjb2xvdXI6ICdibHVlJywgdG9kb3M6IFtdfSwge3RpdGxlOiAncmFuZG9tJywgY29sb3VyOiAneWVsbG93JywgdG9kb3M6IFtdfSwgXTtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0O1xuXG4gIGZ1bmN0aW9uIGZpbmRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG4gICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKHByb2plY3RzLmNoaWxkcmVuKS5pbmRleE9mKHByb2plY3QpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgIGFkZFByb2plY3RUb0FzaWRlKHByb2plY3QpO1xuICAgIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QsIHRpdGxlLCBjb2xvdXIpIHtcbiAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgcHJvamVjdC5jb2xvdXIgPSBjb2xvdXI7XG4gICAgdXBkYXRlUHJvamVjdEluQXNpZGUocHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGZpbmRQcm9qZWN0KHByb2plY3QpLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ZpbmRQcm9qZWN0KHByb2plY3QpXTtcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGUoY3VycmVudFByb2plY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0N1cnJlbnRQcm9qZWN0KCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvamVjdFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcbiAgICBmaW5kUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgc2V0Q3VycmVudFByb2plY3QsXG4gICAgc2hvd0N1cnJlbnRQcm9qZWN0LFxuICB9O1xufSkoKTtcblxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5cbmNvbnN0IGNvbG91ckFycmF5ID0ge1xuICByZWQ6IFwiUmVkXCIsXG4gIG9yYW5nZTogXCJPcmFuZ2VcIixcbiAgeWVsbG93OiBcIlllbGxvd1wiLFxuICBncmVlbjogXCJHcmVlblwiLFxuICBibHVlOiBcIkJsdWVcIixcbiAgcmViZWNjYXB1cnBsZTogXCJQdXJwbGVcIixcbiAgZ3JleTogXCJHcmV5XCIsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuaWQgPSBcInByb2plY3QtbW9kYWxcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFByb2plY3QgVGl0bGVcIik7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGNvbG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbG91ci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29sb3VyXCIpO1xuICBjb2xvdXIub3B0aW9uc1swXSA9IG5ldyBPcHRpb24oXCItLSBTZWxlY3QgYW4gb3B0aW9uIC0tXCIsIFwiXCIpO1xuICBjb2xvdXIub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICBmb3IgKGNvbnN0IGluZGV4IGluIGNvbG91ckFycmF5KSB7XG4gICAgY29sb3VyLm9wdGlvbnNbY29sb3VyLm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgICBjb2xvdXJBcnJheVtpbmRleF0sXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cbiAgY29uc3QgY29sb3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sb3VyRGl2LmFwcGVuZENoaWxkKGNvbG91cik7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC5pbm5lclRleHQgPSBcIkNsaWNrIG1lIVwiO1xuICBzdWJtaXQub25jbGljayA9IChlKSA9PiBzdWJtaXROZXdQcm9qZWN0KGUsIG1vZGFsKTtcbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGNvbG91ckRpdiwgc3VibWl0RGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmV0dXJuIG1vZGFsO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE1vZGFsKHByb2plY3QpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbC5pZCA9IFwicHJvamVjdC1tb2RhbFwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7cHJvamVjdC50aXRsZX1gKTtcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb2xvdXJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdID0gbmV3IE9wdGlvbihcIi0tIFNlbGVjdCBhbiBvcHRpb24gLS1cIiwgXCJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gIGZvciAoY29uc3QgaW5kZXggaW4gY29sb3VyQXJyYXkpIHtcbiAgICBjb2xvdXIub3B0aW9uc1tjb2xvdXIub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICAgIGNvbG91ckFycmF5W2luZGV4XSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG91ci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbG91ci5vcHRpb25zW2ldLnZhbHVlID09IHByb2plY3QuY29sb3VyKSB7XG4gICAgICBjb2xvdXIub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvbG91ckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbG91ckRpdi5hcHBlbmRDaGlsZChjb2xvdXIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuaW5uZXJUZXh0ID0gXCJDbGljayBtZSFcIjtcbiAgc3VibWl0Lm9uY2xpY2sgPSAoZSkgPT4gc3VibWl0RWRpdGVkUHJvamVjdChlLCBwcm9qZWN0LCBtb2RhbCk7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBjb2xvdXJEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBtb2RhbDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdE1vZGFsLCBlZGl0UHJvamVjdE1vZGFsIH07XG5cbmZ1bmN0aW9uIHN1Ym1pdE5ld1Byb2plY3QoZSwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29sb3VyXCJdJykudmFsdWVcbiAgKTtcbiAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZFByb2plY3QoZSwgcHJvamVjdCwgbW9kYWwpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0TWFuYWdlci5lZGl0UHJvamVjdChcbiAgICBwcm9qZWN0LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbG91clwiXScpLnZhbHVlXG4gICk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5pbXBvcnQgeyBhZGRUb2RvVG9NYWluIH0gZnJvbSBcIi4vbWFpblwiO1xuZXhwb3J0IHsgdG9kb01hbmFnZXIgfTtcblxuY29uc3QgdG9kb01hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4vLyAgIGZ1bmN0aW9uIGZpbmRUb2RvKGN1cnJlbnRQcm9qZWN0KSB7XG4vLyAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuLy8gICB9XG5cbiAgZnVuY3Rpb24gYWRkVG9kbyh0b2RvKSB7XG4gICAgcHJvamVjdE1hbmFnZXIuc2hvd0N1cnJlbnRQcm9qZWN0KCkudG9kb3MucHVzaCh0b2RvKVxuICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLnNob3dDdXJyZW50UHJvamVjdCgpLnRvZG9zKVxuICAgIGFkZFRvZG9Ub01haW4odG9kbylcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICAvLyAgICAgLy8gbG9naWMgdG8gZWRpdCB0aGUgc2VsZWN0ZWQgdG9kb1xuICAvLyB9XG5cbiAgLy8gZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgLy8gICAgIC8vIGxvZ2ljIHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgdG9kb1xuICAvLyB9XG5cbiAgLy8gZnVuY3Rpb24gY29tcGxldGVUb2RvKCkge1xuXG4gIC8vIH1cbiAgcmV0dXJuIHsgYWRkVG9kbyB9O1xufSkoKTtcbiIsImltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb19tYW5hZ2VyXCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Eb01vZGFsKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmlkID0gXCJ0b2RvLW1vZGFsXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUb2RvIFRpdGxlXCIpO1xuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgVG9kbyBEZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUb2RvIERhdGVcIik7XG4gIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyBUb2RvIFByaW9yaXR5XCIpO1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LmlubmVyVGV4dCA9IFwiQ2xpY2sgbWUhXCI7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBzdWJtaXROZXdUb2RvKGUsIG1vZGFsKSk7XG5cbiAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBkYXRlRGl2LCBwcmlvcml0eURpdiwgc3VibWl0RGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIHJldHVybiBtb2RhbFxufVxuXG5mdW5jdGlvbiBzdWJtaXROZXdUb2RvKGUsIG1vZGFsKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJkYXRlXCJdJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICk7XG4gIHRvZG9NYW5hZ2VyLmFkZFRvZG8obmV3VG9kbyk7XG4gIG1vZGFsLnJlbW92ZSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL3Byb2plY3RfbWFuYWdlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
