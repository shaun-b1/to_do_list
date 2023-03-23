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
    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
    /* harmony export */
  });
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
    const addProjectButton = document.getElementById("add-project-button");

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
    colour.setAttribute("placeholder", "Select A Colour");
    const colourDiv = document.createElement("div");
    colourDiv.appendChild(colour);

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.innerText = "Click me!";
    const submitDiv = document.createElement("div");
    submitDiv.appendChild(submit);

    form.append(titleDiv, colourDiv, submitDiv);
    modal.appendChild(form);
    document.body.appendChild(modal);

    function prevent() {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    }

    submit.addEventListener("click", () => {
      prevent();
      modal.style.display = "none";
    });

    addProjectButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9wcm9qZWN0X21vZGFsLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlFQUFlOztBQUVmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9wcm9qZWN0X21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1idXR0b24nKVxuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgbW9kYWwuaWQgPSAncHJvamVjdC1tb2RhbCdcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QgVGl0bGUnKVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSkgICAgIFxuXG4gICAgY29uc3QgY29sb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBjb2xvdXIuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NvbG91cicpXG4gICAgY29sb3VyLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VsZWN0IEEgQ29sb3VyJylcbiAgICBjb25zdCBjb2xvdXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbG91ckRpdi5hcHBlbmRDaGlsZChjb2xvdXIpXG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0NsaWNrIG1lISdcbiAgICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHN1Ym1pdERpdi5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbiAgICBmb3JtLmFwcGVuZCh0aXRsZURpdiwgY29sb3VyRGl2LCBzdWJtaXREaXYpXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKVxuXG4gICAgZnVuY3Rpb24gcHJldmVudCgpIHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJldmVudCgpXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9KVxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuXG59KSgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
