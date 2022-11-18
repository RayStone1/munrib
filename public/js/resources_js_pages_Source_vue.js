"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Source_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Source.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Source.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Source",
  created: function created() {
    var _this = this;
    axios.get("/api/source/".concat(this.$route.params.id)).then(function (res) {
      _this.source = res.data.data;
    })["finally"](function () {
      console.log(_this.source);
    });
  },
  data: function data() {
    return {
      source: []
    };
  },
  methods: {}
});

/***/ }),

/***/ "./resources/js/pages/Source.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Source.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Source_vue_vue_type_template_id_5a7c3564_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Source.vue?vue&type=template&id=5a7c3564&scoped=true& */ "./resources/js/pages/Source.vue?vue&type=template&id=5a7c3564&scoped=true&");
/* harmony import */ var _Source_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Source.vue?vue&type=script&lang=js& */ "./resources/js/pages/Source.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Source_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Source_vue_vue_type_template_id_5a7c3564_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Source_vue_vue_type_template_id_5a7c3564_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5a7c3564",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Source.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Source.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Source.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Source_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Source.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Source.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Source_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Source.vue?vue&type=template&id=5a7c3564&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Source.vue?vue&type=template&id=5a7c3564&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Source_vue_vue_type_template_id_5a7c3564_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Source_vue_vue_type_template_id_5a7c3564_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Source_vue_vue_type_template_id_5a7c3564_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Source.vue?vue&type=template&id=5a7c3564&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Source.vue?vue&type=template&id=5a7c3564&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Source.vue?vue&type=template&id=5a7c3564&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Source.vue?vue&type=template&id=5a7c3564&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-main",
    [
      _vm.source
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-chip",
                    {
                      staticClass: "ma-2",
                      attrs: { color: "#3272C0", "text-color": "white" },
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.source.rules.province.name) +
                          "\n            "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", {}, [
                    _c(
                      "div",
                      { staticClass: "item my-4" },
                      [
                        _c("v-icon", { staticClass: "primary--text" }, [
                          _vm._v("mdi-content-copy"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "ma-0",
                            staticStyle: { "line-height": "120%" },
                          },
                          [_vm._v("Command Source")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "text--primary ml-7 mb-0",
                            staticStyle: { "line-height": "150%" },
                          },
                          [
                            _c("span", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.source.rules.province.name) +
                                  "/\n                        "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.source.rules.mun_one.name) +
                                  "/\n                        "
                              ),
                            ]),
                            _vm._v(" "),
                            _vm.source.rules.mun_two
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.source.rules.mun_two.name) +
                                      "/\n                        "
                                  ),
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.source.rules.name.name) +
                                  "\n                        "
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "item my-4" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "ma-0",
                            staticStyle: { "line-height": "120%" },
                          },
                          [_vm._v("1!name")]
                        ),
                        _vm._v(" "),
                        _c("v-icon", { staticClass: "primary--text" }, [
                          _vm._v("mdi-content-copy"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "text--primary ml-1 mb-0",
                            staticStyle: { "line-height": "150%" },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.source.topic_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "item my-4" },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "ma-0",
                            staticStyle: { "line-height": "120%" },
                          },
                          [_vm._v("1!name")]
                        ),
                        _vm._v(" "),
                        _c("v-icon", { staticClass: "primary--text" }, [
                          _vm._v("mdi-content-copy"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "text--primary ml-1 mb-0",
                            staticStyle: { "line-height": "150%" },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.source.header_name) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);