"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Forms_SynonymForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/SynonymForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/SynonymForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  name: "SynonymForm",
  data: function data() {
    return {
      synonym_dialog: false,
      types_item: [{
        id: 2,
        text: "Муниципальные образования 1ого уровня"
      }, {
        id: 3,
        text: "Муниципальные образования 2ого уровня"
      }, {
        id: 4,
        text: "Орган власти"
      }],
      type_subject: null,
      subjects: null,
      synonym: {
        parent: null,
        name: null
      },
      loading: false
    };
  },
  methods: {
    typeSubject: function typeSubject(id) {
      switch (id) {
        case 2:
          return "mun-one";
          break;
        case 3:
          return "mun-two";
          break;
        case 4:
          return "names";
          break;
      }
    },
    getSubject: function getSubject() {
      var _this = this;
      this.loading = true;
      axios.get("api/".concat(this.typeSubject(this.type_subject))).then(function (res) {
        _this.subjects = res.data.data;
        _this.loading = false;
      });
    },
    sendSynonym: function sendSynonym() {
      var _this2 = this;
      axios.post("api/".concat(this.typeSubject(this.type_subject), "/").concat(this.synonym.parent, "/synonym"), {
        name: this.synonym.name
      }).then(function (res) {
        _this2.synonym.name = null;
        _this2.synonym.parent = null;
        _this2.type_subject = null;
        console.log(res);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Forms/SynonymForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Forms/SynonymForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SynonymForm_vue_vue_type_template_id_a393e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true& */ "./resources/js/components/Forms/SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true&");
/* harmony import */ var _SynonymForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SynonymForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Forms/SynonymForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SynonymForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SynonymForm_vue_vue_type_template_id_a393e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SynonymForm_vue_vue_type_template_id_a393e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a393e1f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Forms/SynonymForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Forms/SynonymForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Forms/SynonymForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SynonymForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SynonymForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/SynonymForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SynonymForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Forms/SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Forms/SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SynonymForm_vue_vue_type_template_id_a393e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SynonymForm_vue_vue_type_template_id_a393e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SynonymForm_vue_vue_type_template_id_a393e1f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Forms/SynonymForm.vue?vue&type=template&id=a393e1f8&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function (ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        { attrs: { color: "transparent", elevation: "0" } },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [_vm._v("\n                Синоним\n            ")]
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.synonym_dialog,
            callback: function ($$v) {
              _vm.synonym_dialog = $$v
            },
            expression: "synonym_dialog",
          },
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("span", { staticClass: "text-h5" }, [
                    _vm._v("Добавить новый синоним"),
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function ($event) {
                          _vm.synonym_dialog = false
                        },
                      },
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.types_item,
                                  "item-value": "id",
                                  label: "Тип субъекта",
                                  required: "",
                                  outlined: "",
                                },
                                on: { change: _vm.getSubject },
                                model: {
                                  value: _vm.type_subject,
                                  callback: function ($$v) {
                                    _vm.type_subject = $$v
                                  },
                                  expression: "type_subject",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  label: "Субъект",
                                  "no-data-text": "Выберете тип субъекта",
                                  loading: _vm.loading,
                                  disabled: _vm.loading,
                                  items: _vm.subjects,
                                  "item-text": "name",
                                  "item-value": "id",
                                  outlined: "",
                                  required: "",
                                },
                                model: {
                                  value: _vm.synonym.parent,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.synonym, "parent", $$v)
                                  },
                                  expression: "synonym.parent",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { outlined: "", label: "Синоним" },
                                model: {
                                  value: _vm.synonym.name,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.synonym, "name", $$v)
                                  },
                                  expression: "synonym.name",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.sendSynonym },
                    },
                    [
                      _vm._v(
                        "\n                    Сохранить\n                "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);