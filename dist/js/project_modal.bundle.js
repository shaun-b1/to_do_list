/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
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
  /*!*****************************!*\
  !*** ./js/project_modal.js ***!
  \*****************************/
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
    submit.id = "project-submit";
    const submitDiv = document.createElement("div");
    submitDiv.appendChild(submit);

    form.append(titleDiv, colourDiv, submitDiv);
    modal.appendChild(form);

    return modal;
  }

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9qZWN0X21vZGFsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0X21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNb2RhbCgpIHtcbiAgY29uc3QgY29sb3VyQXJyYXkgPSB7XG4gICAgcmVkOiBcIlJlZFwiLFxuICAgIG9yYW5nZTogXCJPcmFuZ2VcIixcbiAgICB5ZWxsb3c6IFwiWWVsbG93XCIsXG4gICAgZ3JlZW46IFwiR3JlZW5cIixcbiAgICBibHVlOiBcIkJsdWVcIixcbiAgICByZWJlY2NhcHVycGxlOiBcIlB1cnBsZVwiLFxuICAgIGdyZXk6IFwiR3JleVwiLFxuICB9O1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWwuaWQgPSBcInByb2plY3QtbW9kYWxcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiVGl0bGVcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IFByb2plY3QgVGl0bGVcIik7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGNvbG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbG91ci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29sb3VyXCIpO1xuICBjb2xvdXIub3B0aW9uc1swXSA9IG5ldyBPcHRpb24oXCItLSBTZWxlY3QgYW4gb3B0aW9uIC0tXCIsIFwiXCIpO1xuICBjb2xvdXIub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICBmb3IgKGNvbnN0IGluZGV4IGluIGNvbG91ckFycmF5KSB7XG4gICAgY29sb3VyLm9wdGlvbnNbY29sb3VyLm9wdGlvbnMubGVuZ3RoXSA9IG5ldyBPcHRpb24oXG4gICAgICBjb2xvdXJBcnJheVtpbmRleF0sXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cbiAgY29uc3QgY29sb3VyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29sb3VyRGl2LmFwcGVuZENoaWxkKGNvbG91cik7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdC5pbm5lclRleHQgPSBcIkNsaWNrIG1lIVwiO1xuICBzdWJtaXQuaWQgPSAncHJvamVjdC1zdWJtaXQnXG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGZvcm0uYXBwZW5kKHRpdGxlRGl2LCBjb2xvdXJEaXYsIHN1Ym1pdERpdik7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHJldHVybiBtb2RhbFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
