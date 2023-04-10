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
        function projectModal() {
          const colourArray = {
            red: "Red",
            orange: "Orange",
            yellow: "Yellow",
            green: "Green",
            blue: "Blue",
            rebeccapurple: "Purple",
            grey: "Grey",
          };

          const modal = document.createElement("section");
          modal.classList.add("modal");
          modal.id = "project-modal";

          const form = document.createElement("form");

          const title = document.createElement("input");
          title.setAttribute("type", "text");
          title.setAttribute("name", "Title");
          title.id = "title";
          title.setAttribute("placeholder", "New Project Title");
          const titleDiv = document.createElement("div");
          titleDiv.appendChild(title);

          const colour = document.createElement("select");
          colour.setAttribute("name", "colour");
          colour.id = "colour";
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
          submit.id = "project-submit";
          const submitDiv = document.createElement("div");
          submitDiv.appendChild(submit);

          form.append(titleDiv, colourDiv, submitDiv);
          modal.appendChild(form);

          return modal;
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
    /*!*********************!*\
  !*** ./js/aside.js ***!
  \*********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ aside: () => /* binding */ aside,
      /* harmony export */
    });
    /* harmony import */ var _project_modal__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./project_modal */ "./js/project_modal.js");
    /* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./project */ "./js/project.js");

    function aside(allProjects) {
      const title = document.createElement("div");
      title.classList.add("title");
      const titleText = document.createElement("h2");
      titleText.innerText = "Projects";

      const button = document.createElement("button");
      button.id = "add-project-button";
      button.setAttribute("type", "button");
      button.innerText = "Add a new project";

      const projects = document.createElement("ul");
      projects.id = "projects";

      const aside = document.createElement("aside");
      title.append(titleText, button);
      aside.append(title, projects);

      button.addEventListener("click", () => {
        document.body.appendChild(
          (0, _project_modal__WEBPACK_IMPORTED_MODULE_0__.projectModal)()
        );

        const projectSubmit = document.getElementById("project-submit");
        projectSubmit.addEventListener("click", (e) => {
          e.preventDefault();
          const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(
            document.getElementById("title").value,
            document.getElementById("colour").value
          );
          allProjects.push(newProject);
          projects.appendChild(
            addProjectToAside(newProject.title, newProject.colour, allProjects)
          );
          projectSubmit.parentElement.parentElement.parentElement.remove();
          console.log(allProjects);
        });
      });

      return aside;
    }

    function addProjectToAside(title, colour, allProjects) {
      const project = document.createElement("li");
      project.classList.add("project");

      const name = document.createElement("h3");
      name.textContent = `${title}`;
      name.setAttribute("background-color", `${colour}`);

      const button = deleteProject(allProjects);

      project.append(name, button);
      return project;
    }

    function deleteProject(allProjects) {
      const button = document.createElement("button");
      button.classList.add("delete-project-button");
      button.textContent = "x";
      button.addEventListener("click", () => {
        allProjects.splice(allProjects.indexOf(this), 1);
        button.parentElement.remove();
      });
      return button;
    }
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hc2lkZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztVQ2xEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNYOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLDREQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsTUFBTTtBQUM5QiwyQ0FBMkMsT0FBTzs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2pzL3Byb2plY3RfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvYXNpZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgY29sb3VyLCB0b2RvcyA9IFtdKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGVcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWVcbiAgfVxuXG4gIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91clxuICB9XG5cbiAgc2V0IGNvbG91cih2YWx1ZSkge1xuICAgIHRoaXMuX2NvbG91ciA9IHZhbHVlXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TW9kYWwoKSB7XG4gIGNvbnN0IGNvbG91ckFycmF5ID0ge1xuICAgIHJlZDogXCJSZWRcIixcbiAgICBvcmFuZ2U6IFwiT3JhbmdlXCIsXG4gICAgeWVsbG93OiBcIlllbGxvd1wiLFxuICAgIGdyZWVuOiBcIkdyZWVuXCIsXG4gICAgYmx1ZTogXCJCbHVlXCIsXG4gICAgcmViZWNjYXB1cnBsZTogXCJQdXJwbGVcIixcbiAgICBncmV5OiBcIkdyZXlcIixcbiAgfTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsLmlkID0gXCJwcm9qZWN0LW1vZGFsXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIlRpdGxlXCIpO1xuICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgUHJvamVjdCBUaXRsZVwiKTtcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29sb3VyLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb2xvdXJcIik7XG4gIGNvbG91ci5pZCA9IFwiY29sb3VyXCI7XG4gIGNvbG91ci5vcHRpb25zWzBdID0gbmV3IE9wdGlvbihcIi0tIFNlbGVjdCBhbiBvcHRpb24gLS1cIiwgXCJcIik7XG4gIGNvbG91ci5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gIGZvciAoY29uc3QgaW5kZXggaW4gY29sb3VyQXJyYXkpIHtcbiAgICBjb2xvdXIub3B0aW9uc1tjb2xvdXIub3B0aW9ucy5sZW5ndGhdID0gbmV3IE9wdGlvbihcbiAgICAgIGNvbG91ckFycmF5W2luZGV4XSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfVxuICBjb25zdCBjb2xvdXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb2xvdXJEaXYuYXBwZW5kQ2hpbGQoY29sb3VyKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LmlubmVyVGV4dCA9IFwiQ2xpY2sgbWUhXCI7XG4gIHN1Ym1pdC5pZCA9IFwicHJvamVjdC1zdWJtaXRcIjtcbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGNvbG91ckRpdiwgc3VibWl0RGl2KTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgcmV0dXJuIG1vZGFsO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9wcm9qZWN0X21vZGFsXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5mdW5jdGlvbiBhc2lkZShhbGxQcm9qZWN0cykge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZVRleHQuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5pZCA9IFwiYWRkLXByb2plY3QtYnV0dG9uXCI7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgYSBuZXcgcHJvamVjdFwiO1xuXG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gIHByb2plY3RzLmlkID0gXCJwcm9qZWN0c1wiXG5cbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIHRpdGxlLmFwcGVuZCh0aXRsZVRleHQsIGJ1dHRvbik7XG4gIGFzaWRlLmFwcGVuZCh0aXRsZSwgcHJvamVjdHMpO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdE1vZGFsKCkpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Qtc3VibWl0XCIpO1xuICAgIHByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3VyXCIpLnZhbHVlXG4gICAgICApO1xuICAgICAgYWxsUHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGFkZFByb2plY3RUb0FzaWRlKG5ld1Byb2plY3QudGl0bGUsIG5ld1Byb2plY3QuY29sb3VyLCBhbGxQcm9qZWN0cykpXG4gICAgICBwcm9qZWN0U3VibWl0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBhc2lkZVxufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9Bc2lkZSh0aXRsZSwgY29sb3VyLCBhbGxQcm9qZWN0cykge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpXG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICBuYW1lLnRleHRDb250ZW50ID0gYCR7dGl0bGV9YFxuICBuYW1lLnNldEF0dHJpYnV0ZShcImJhY2tncm91bmQtY29sb3JcIiwgYCR7Y29sb3VyfWApXG5cbiAgY29uc3QgYnV0dG9uID0gZGVsZXRlUHJvamVjdChhbGxQcm9qZWN0cylcblxuICBwcm9qZWN0LmFwcGVuZChuYW1lLCBidXR0b24pXG4gIHJldHVybiBwcm9qZWN0XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoYWxsUHJvamVjdHMpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpXG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGxQcm9qZWN0cy5zcGxpY2UoYWxsUHJvamVjdHMuaW5kZXhPZih0aGlzKSwgMSlcbiAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICB9KVxuICByZXR1cm4gYnV0dG9uIFxufVxuXG5leHBvcnQge2FzaWRlfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
