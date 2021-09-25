var RootJS =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/scripts/classes/root.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/scripts/classes/Root/AjaxRequest.js":
/*!*******************************************************!*\
  !*** ./resources/scripts/classes/Root/AjaxRequest.js ***!
  \*******************************************************/
/*! exports provided: AjaxRequest, JsonAjaxRequest, UploadAjaxRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AjaxRequest\", function() { return AjaxRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JsonAjaxRequest\", function() { return JsonAjaxRequest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UploadAjaxRequest\", function() { return UploadAjaxRequest; });\n/* harmony import */ var Root_Url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Root/Url */ \"./resources/scripts/classes/Root/Url.js\");\n/**\n * Classe gérant un appel Ajax\n */\n\n\n\nclass AjaxRequest {\n\t\n\t// request: null,\n\t// method: null\n\t// url: null\n\t// headers: {}\n\t// sendData: null\n\t\n\tconstructor(options) {\n\n\t\toptions = options || {};\n\t\t\n\t\t\n\t\tlet self = this,\n\t\t\t// Récupération de la méthode HTTP\n\t\t\tmethod = (options.method || \"get\").toLowerCase(),\n\t\t\tallowedMethods = [ \"get\", \"post\" ],\n\t\t\t// En-têtes\n\t\t\theaders = options.headers || {},\n\t\t\t// Récupération des paramètres à transmettre\n\t\t\tparams = options.params || {},\n\t\t\tsendData = new FormData()\n\t\t;\n\n\t\theaders[\"X-Requested-With\"] = \"XMLHttpRequest\";\n\t\n\t\t// Validation de la méthode HTTP\n\t\tif(allowedMethods.indexOf(method) === -1) {\n\t\t\tthrow \"Méthode HTTP interdite.\";\n\t\t}\n\t\t\n\t\t// Validation de l'URL de la requête\n\t\tif(! options.url) {\n\t\t\tthrow \"L'URL de l'appel Ajax est manquant.\";\n\t\t}\n\n\t\t// Construction des paramètres à transmettre\n\t\tif(params instanceof FormData) {\n\t\t\tsendData = params;\n\t\t} else {\n\t\t\tfor(var index in params) {\n\t\t\t\tsendData.append(index, params[index]);\n\t\t\t}\n\t\t}\n\t\t\n\t\tif(method == \"get\") {\n\t\t\tlet url = new Root_Url__WEBPACK_IMPORTED_MODULE_0__[\"default\"](options.url);\n\t\t\t\n\t\t\tsendData.forEach(function(value, key) {\n\t\t\t\turl.setQueryParam(key, value);\n\t\t\t});\n\t\t\t\n\t\t\toptions.url = url.getHref();\n\t\t}\n\n\t\tthis.method = method.toUpperCase();\n\t\tthis.url = options.url;\n\t\tthis.headers = headers;\n\t\tthis.sendData = sendData;\n\t\tthis.request = null;\n\t};\n\n\t/**\n\t * Prépare la requête XHR pour l'envoi\n\t * @return void\n\t */\n\tprepare() {\n\n\t\tif(this.request !== null) {\n\t\t\treturn;\n\t\t}\n\n\t\tlet self = this,\n\t\t\trequest = new XMLHttpRequest()\n\t\t;\n\n\t\trequest.open(this.method, this.url);\n\n\t\t// Ajout des en-têtes\n\t\tObject.keys(this.headers).forEach((headerKey) => {\n\t\t\trequest.setRequestHeader(headerKey, this.headers[headerKey]);\n\t\t});\n\n\t\tthis.request = request;\n\t};\n\t\n\t/**\n\t * Exécute la requête\n\t */\n\texecute() {\n\t\treturn new Promise((resolve, reject) => {\n\t\t\tthis.prepare();\n\n\t\t\t// Méthode en cas d'erreur\n\t\t\tthis.request.onerror = () => {\n\t\t\t\treturn reject(this.request.responseText);\n\t\t\t};\n\n\t\t\t// Méthode une fois l'appel terminé\n\t\t\tthis.request.onload = () => {\n\t\t\t\tlet status = this.request.status;\n\t\t\t\tif(status >= 200 && status < 300) {\n\t\t\t\t\treturn resolve(this.onResponseSuccess(this.request.responseText));\n\t\t\t\t} else {\n\t\t\t\t\treturn reject(this.onResponseError(this.request.responseText));\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tthis.request.send(this.sendData);\n\t\t});\n\t};\n\t\n\t/**\n\t * Méthode à exécuter lorsque la requête échoue\n\t * @param string response Réponse de la requête\n\t * @return void\n\t */\n\tonResponseError(response) {\n\t\treturn response;\n\t};\n\t\n\t/**\n\t * Méthode à exécuter lorsque la requête réussit\n\t * @param string response Réponse de la requête\n\t */\n\tonResponseSuccess(response) {\n\t\treturn response;\n\t};\n\t\n};\n\n/**\n * Classe gérant un appel Ajax retournant du JSON\n */\nclass JsonAjaxRequest extends AjaxRequest {\n\t\n\t// sendJsonBody: false, // Vrai si la requête doit envoyer les paramètres dans une chaine JSON\n\t// onValidJsonCallback: null,\n\t// onInvalidJsonCallback: null,\n\n\tconstructor(options) {\n\n\t\tsuper(options);\n\n\t\tthis.onValidJsonCallback = (json) => json;\n\t\tthis.onInvalidJsonCallback = () => null;\n\n\t\tthis.sendJsonBody = options.sendJsonBody || false;\n\t\tif(this.sendJsonBody) {\n\t\t\tthis.sendData = JSON.stringify(Object.fromEntries(this.sendData));\n\t\t}\n\t};\n\t \n\t/**\n\t * Gestion des fonctions d'appel lorsque \n\t */\n\tonJsonResponse(response) {\n\t\n\t\ttry {\n\t\t\tlet jsonData = JSON.parse(response);\n\t\t\treturn this.onValidJsonCallback(jsonData);\n\t\t} catch(e) {\n\t\t\treturn this.onInvalidJsonCallback(response);\n\t\t}\n\t\t\n\t};\n\t\n\t/**\n\t * Méthode à exécuter lorsque la requête échoue\n\t * @param string response Réponse de la requête\n\t * @return void\n\t */\n\tonResponseError(response) {\n\t\treturn this.onJsonResponse(response);\n\t};\n\t\n\t/**\n\t * Méthode à exécuter lorsque la requête réussit\n\t * @param string response Réponse de la requête\n\t * @return void\n\t */\n\tonResponseSuccess(response) {\n\t\treturn this.onJsonResponse(response);\n\t};\n\t\n};\n\n/**\n * Classe gérant l'appel Ajax pour le téléchargement d'un fichier\n */\nclass UploadAjaxRequest extends JsonAjaxRequest {\n\t\n\t// onProgress: null\n\n\tconstructor(options) {\n\t\toptions.method = \"post\";\n\t\tsuper(options);\n\t\t\n\t\t// Méthode à exécuter pendant du téléchargement du fichier\n\t\tthis.onProgress = (response) => {\n\t\t\tif(typeof options.onProgress === \"function\") {\n\t\t\t\toptions.onProgress(response);\n\t\t\t}\n\t\t};\n\t};\n\t\n\t/**\n\t * Prépare la requête XHR pour l'envoi\n\t * @return void\n\t */\n\tprepare() {\n\t\tif(this.request !== null) {\n\t\t\treturn;\n\t\t}\n\n\t\tsuper.prepare();\n\n\t\t// Progression du téléchargement\n\t\tthis.request.upload.onprogress = (event) => {\n\t\t\tthis.onProgress(event);\n\t\t};\n\t\t\n\t}\n\t\n};\n\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/AjaxRequest.js?");

/***/ }),

/***/ "./resources/scripts/classes/Root/Animation.js":
/*!*****************************************************!*\
  !*** ./resources/scripts/classes/Root/Animation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animation; });\n/**\n * Gestion d'une animation sur un élément HTML\n */\nclass Animation {\n\t\n\t// duration: null, // entier en millisecondes\n\t// stepFunction: null, // fonction à exécuter pour chaque segment\n\t// startTime: null\n\t\n\t/**\n\t * Constructeur\n\t * @param callable stepFunction Fonction à appeler pour chaque étape de l'animation\n\t * @param float duration Temps de l'animation en millisecondes\n\t */\n\tconstructor(stepFunction, duration) {\n\t\t\n\t\tthis.stepFunction = stepFunction;\n\t\tthis.duration = duration;\n\t\tthis.startTime = null;\n\t\t\n\t\tthis.execution();\n\t};\n\t\n\t/**\n\t * Effectut une étape de l'animation\n\t * @param float currentTime (DOMHighResTimeStamp) \n\t * @see https://developer.mozilla.org/fr/docs/Web/API/DOMHighResTimeStamp\n\t * @return void\n\t */\n\tstep(currentTime) {\n\n\t\tif(this.startTime == null) {\n\t\t\tthis.startTime = currentTime;\n\t\t}\n\t\t\n\t\tlet ratio = (currentTime - this.startTime) / this.duration;\n\t\t\n\t\tthis.stepFunction(ratio);\n\t\t\n\t\tif(ratio <= 1) {\n\t\t\twindow.requestAnimationFrame(this.step.bind(this));\n\t\t}\n\t\t\n\t};\n\t\n\t/**\n\t * Exécute l'animation\n\t * @return void\n\t */\n\texecution() {\n\t\t\n\t\twindow.requestAnimationFrame(this.step.bind(this));\n\t\t\n\t};\n\t\n}\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/Animation.js?");

/***/ }),

/***/ "./resources/scripts/classes/Root/Controller.js":
/*!******************************************************!*\
  !*** ./resources/scripts/classes/Root/Controller.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n\n/**\n * Contrôleur RootJS\n */\n\nclass Controller {\n\t\n\tconstructor() {\n\n\t};\n\t\n\texecute() {\n\t\t\n\t\ttry {\n\t\t\tif(window.initRootJS && typeof window.initRootJS === \"function\") {\n\t\t\t\twindow.initRootJS();\n\t\t\t}\n\n\t\t} catch(e) {\n\t\t\tconsole.log(e);\n\t\t}\n\t\t\n\t};\n\t\n};\n\n\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/Controller.js?");

/***/ }),

/***/ "./resources/scripts/classes/Root/Element.js":
/*!***************************************************!*\
  !*** ./resources/scripts/classes/Root/Element.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\n/* harmony import */ var Root_Str__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Root/Str */ \"./resources/scripts/classes/Root/Str.js\");\n/* harmony import */ var Root_Animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Root/Animation */ \"./resources/scripts/classes/Root/Animation.js\");\n/**\n * Gestions des événements\n */\n\n\n\n\nlet EventsRJS = {\n\tlistByElement: {},\n\t\n\tadd: function(element, type, callback) {\n\t\t\n\t\tvar eventsByType = element.events(type),\n\t\t\tevents = element.events()\n\t\t;\n\t\t\n\t\teventsByType.push(callback);\n\t\tevents[type] = eventsByType;\n\t\t\n\t\tEventsRJS.listByElement[element.signature] = events;\n\t\t\n\t\telement.htmlElement.addEventListener(type, callback);\n\t},\n\t\n\t/**\n\t * Déclenche un événement du type en paramètre sur un élément\n\t * @param Element element Elément sur lequel déclencher l'événement\n\t * @param string type Nom de l'événement à déclencher\n\t * @param array params Paramètres à transmettre à la méthode d'appel\n\t * @return void\n\t */\n\tfire: function(element, type, params) {\n\t\t\n\t\tvar events = element.events(type);\n\t\t\n\t\tevents.forEach(function(callback) {\n\t\t\tcallback.apply(element.htmlElement, params);\n\t\t});\n\t}\n};\n\n/**\n * Création d'élément HTML\n */\nclass Element {\n\t\n\t// tagName : null, \t\t// li, a, img, p\n\t// attributes : null, \t// tableau des attributs\n\t// htmlElement : null, \t// Objet HTMLElement natif\n\t// signature : null\n\t\n\tconstructor(tagName, attributes, htmlElement) {\n\t\t\n\t\tthis.htmlElement = htmlElement || null;\n\t\t\n\t\tif(this.htmlElement === null) {\n\t\t\tthis.tagName = tagName;\n\t\t\tif(this.tagName === \"text\") {\n\t\t\t\tthis.attributes = (typeof attributes === \"string\") ? attributes : \"\";\n\t\t\t} else {\n\t\t\t\tthis.attributes = (typeof attributes === \"object\") ? attributes : {};\n\t\t\t}\n\t\t\tthis.initHtmlElement();\n\t\t} else { // Si on instancie depuis un objet htmlElement\n\t\t\tthis.tagName = (htmlElement.tagName) ? htmlElement.tagName.toLowerCase() : null;\n\t\t\tthis.attributes = {};\n\t\t\tif(htmlElement.attributes) {\n\t\t\t\tfor(var indexAttribute = 0 ; indexAttribute < htmlElement.attributes.length ; indexAttribute++) {\n\t\t\t\t\tvar attribute = htmlElement.attributes[indexAttribute];\n\t\t\t\t\tthis.attributes[attribute.name] = attribute.value;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t}\n\t\t\n\t\tif(! this.htmlElement.rjsSignature) {\n\t\t\tthis.htmlElement.rjsSignature = Root_Str__WEBPACK_IMPORTED_MODULE_0__[\"default\"].uniqueId();\n\t\t}\n\t\t\n\t\tthis.signature = this.htmlElement.rjsSignature;\n\t};\n\t\n\t/**\n\t * Création de l'élément\n\t * @return void\n\t */\n\tinitHtmlElement() {\n\t\t\n\t\tif(this.htmlElement !== null) {\n\t\t\treturn;\n\t\t}\n\t\t\n\t\t// Création de l'élément\n\t\tvar element = document.createElement(this.tagName);\n\t\t// Affectation des propriétés HTML\n\t\tfor(var attributeName in this.attributes) {\n\t\t\tif(attributeName === \"html\") {\n\t\t\t\telement.innerHTML = this.attributes[attributeName];\n\t\t\t} else if(attributeName === \"text\") {\n\t\t\t\telement.appendChild(document.createTextNode(this.attributes[attributeName]));\n\t\t\t} else {\n\t\t\t\telement.setAttribute(attributeName, this.attributes[attributeName]);\n\t\t\t}\n\t\t}\n\t\t\n\t\t\n\t\tthis.htmlElement = element;\n\t\t\n\t};\n\t\n\t/**\n\t * Retourne un élément à partir d'un sélecteur CSS\n\t * @param string selector\n\t * @return self\n\t */\n\tstatic searchOne(selector, root) {\n\t\t\n\t\troot = (root ? root.htmlElement : null) || document;\n\t\t\n\t\tvar htmlElement = root.querySelector(selector);\n\t\tif(htmlElement === null) {\n\t\t\treturn null;\n\t\t}\n\t\treturn Element.retrieve(htmlElement);\n\t};\n\t\n\t/**\n\t * Retourne une liste d'éléments à partir d'un sélecteur CSS\n\t * @param string selector\n\t * @return array\n\t */\n\tstatic searchList(selector, root) {\n\t\troot = (root ? root.htmlElement : null) || document;\n\t\t\n\t\t\n\t\tvar elements = [],\n\t\t\tnodeList = root.querySelectorAll(selector)\n\t\t;\n\t\t\n\t\tnodeList.forEach(function(element) {\n\t\t\telements.push(Element.retrieve(element));\n\t\t});\n\n\t\treturn elements;\n\t};\n\t\n\t/**\n\t * Retourne une instance à partir d'un objet natif HTMLElement\n\t * @return self\n\t */\n\tstatic retrieve(element) {\n\t\treturn new this(null, null, element);\n\t};\n\t\n\t/**\n\t * Retourne si l'élément en paramètre correspond à l'élément courant\n\t * @param self element\n\t * @return bool\n\t */\n\tsameElement(element) {\n\t\tthis._htmlElementRequired();\n\t\telement._htmlElementRequired();\n\t\t\n\t\treturn (this.signature == element.signature);\n\t};\n\t\n\t/**\n\t * Retourne l'élément précédent correspondant au sélecteur en paramètre\n\t * @param string selector\n\t * @return self\n\t */\n\tgetPrevious(selector) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tlet element = this.htmlElement.previousElementSibling;\n\t\n\t\twhile(element) {\n\t\t\tif(element.matches(selector)) {\n\t\t\t\treturn Element.retrieve(element);\n\t\t\t}\n\t\t\telement = element.previousElementSibling;\n\t\t}\n\n\t\treturn null;\n\t};\n\t\n\t/**\n\t * Retourne l'élément suivant correspondant au sélecteur en paramètre\n\t * @param string selector\n\t * @return self\n\t */\n\tgetNext(selector) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tvar element = this.htmlElement.nextElementSibling;\n\t\n\t\twhile(element) {\n\t\t\tif(element.matches(selector)) {\n\t\t\t\treturn Element.retrieve(element);\n\t\t\t}\n\t\t\telement = element.nextElementSibling;\n\t\t}\n\n\t\treturn null;\n\t};\n\t\n\t/**\n\t * Recherche un élément parent\n\t * @param string selector Sélecteur du parent à retourner\n\t * @return self\n\t */\n\tgetParent(selector) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tvar parent = this.htmlElement;\n\t\t\n        do {\n            if (selector && parent.matches(selector)) {\n            \treturn Element.retrieve(parent);\n            }\n            parent = parent.parentElement /*|| parent.parentNode*/;\n            if(! selector && parent) {\n            \treturn Element.retrieve(parent);\n            }\n        } while (parent !== null); \n        return null;\n\t};\n\t\n\t/**\n\t * Recherche un élément parmi les enfants de l'élément courant\n\t * @param string selector\n\t * @return self\n\t */\n\tgetChild(selector) {\n\t\tthis._htmlElementRequired();\n\t\treturn Element.searchOne(selector, this);\n\t};\n\t\n\t/**\n\t * Recherche les enfants de l'élément courant\n\t * @param string selector\n\t * @return self\n\t */\n\tgetChildren(selector) {\n\t\tthis._htmlElementRequired();\n\t\treturn Element.searchList(selector, this); \n\t};\n\t\n\t/**\n\t * Recherche le dernier élément du sélecteur\n\t * @param string selector\n\t * @return self\n\t */\n\tgetLast(selector) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tlet elements = this.getChildren(selector);\n\t\t\n\t\tif(elements.length > 0) {\n\t\t\treturn elements[elements.length - 1];\n\t\t}\n\n\t\treturn null;\n\t};\n\t\n\t/**\n\t * Ajoute un élément à l'élément courant\n\t * @param Element elementHTML\n\t * @param string position Position où ajouter l'élément\n\t * \t\t\t\t\t\t  before, after, top ; si non renseigné, on ajoute l'élément à la fin du contenu\n\t * @return self\n\t */\n\taddElement(elementHTML, position) {\n\t\t\n\t\tvar allowedPositions = [ null, \"before\", \"after\", \"top\", \"bottom\" ];\n\t\tposition = (position || null);\n\t\t\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tif(allowedPositions.indexOf(position) === -1) {\n\t\t\tthrow \"Position de l'élément incorrect.\";\n\t\t}\n\t\t\n\t\tswitch(position) {\n\t\t\tcase \"bottom\": \n\t\t\tcase null:\n\t\t\t\tthis.htmlElement.appendChild(elementHTML.htmlElement);\n\t\t\t\tbreak;\n\t\t\tcase \"after\":\n\t\t\t\tthis.htmlElement.parentNode.insertBefore(elementHTML.htmlElement, this.htmlElement.nextSibling);\n\t\t\t\tbreak;\n\t\t\tcase \"before\":\n\t\t\t\tthis.htmlElement.parentNode.insertBefore(elementHTML.htmlElement, this.htmlElement);\n\t\t\t\tbreak;\n\t\t\tcase \"top\":\n\t\t\t\tif(this.htmlElement.hasChildNodes()) {\n\t\t\t\t\tthis.htmlElement.firstChild.parentNode.insertBefore(elementHTML.htmlElement, this.htmlElement.firstChild);\n\t\t\t\t} else {\n\t\t\t\t\tthis.htmlElement.appendChild(elementHTML.htmlElement);\n\t\t\t\t}\n\t\t}\n\t\n\t\treturn this;\n\t\t\n\t};\n\t\n\t/**\n\t * Modifit la valeur d'une propriété de l'élément courant\n\t * @param string property\n\t * @param mixed value\n\t * @return self\n\t */\n\tsetProperty(property, value) {\n\t\t\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tif(property == \"value\" && this.tagName == \"input\") {\n\t\t\tthis.htmlElement.value = value;\n\t\t}\n\t\t\n\t\tif(property === \"text\") {\n\t\t\tthis.htmlElement.innerText = value;\n\t\t} else if(this.htmlElement[property] != undefined) {\n\t\t\tthis.htmlElement[property] = value;\n\t\t} else {\n\t\t\tthis.htmlElement.setAttribute(property, value);\n\t\t}\n\t\t\n\t\tthis.attributes[property] = value;\n\t\t\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Retourne la valeur d'une propriété de l'élément courant\n\t * @param string property\n\t * @return mixed\n\t */\n\tgetProperty(property) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tvar value = null;\n\t\t\n\t\tif(property === \"text\") {\n\t\t\tvalue = this.htmlElement.innerText;\n\t\t} else if(property in this.htmlElement) {\n\t\t\tvalue = this.htmlElement[property];\n\t\t} else if(this.attributes.hasOwnProperty(property)) {\n\t\t\tvalue = this.attributes[property];\n\t\t}\n\t\t\n\t\treturn value;\n\t};\n\t\n\t/**\n\t * Ajoute une classe CSS à l'élément courant\n\t * @param string className Classe à ajouter\n\t * @return self\n\t */\n\taddClass(className) {\n\t\treturn this.addClasses([ className ]);\n\t}\n\t\n\t/**\n\t * Ajoute plusieurs classes CSS à l'élément courant\n\t * @param array classes Les classes à ajouter\n\t * @return self\n\t */\n\taddClasses(classes) {\n\t\t\n\t\tlet self = this;\n\t\t\n\t\tclasses.forEach(function(className) {\n\t\t\tclassName = className.trim();\n\t\t\tif(className !== \"\") {\n\t\t\t\tself.htmlElement.classList.add(className);\n\t\t\t}\n\t\t});\n\t\t\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Retourne si la classe en paramètre existe pour l'élément\n\t * @param string className\n\t * @return bool\n\t */\n\thasClass(className) {\n\t\treturn this.htmlElement.classList.contains(className);\n\t};\n\t\n\t/**\n\t * Retourne les événements de l'objet du type d'événement en paramètre\n\t * @param string event\n\t * @return Object\n\t */\n\tevents(event) {\n\t\t\n\t\n\t\tvar events = EventsRJS.listByElement[this.signature] || {};\n\t\tif(event) {\n\t\t\tevents = (events[event] || []);\n\t\t}\n\t\t\n\t\treturn events;\n\t};\n\t\n\t/**\n\t * Ajoute un événement sur l'élèment courant\n\t * @param string event Nom de l'événement à éxécuter\n\t * @param function callback La méthode éxécutant l'événement à éxécuter\n\t * @return self\n\t */\n\taddEvent(event, callback) {\n\t\t\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tif(typeof callback !== \"function\") {\n\t\t\tthrow \"La méthode de l'évenement est incorrecte.\";\n\t\t}\n\t\t\n\t\tEventsRJS.add(this, event, callback);\n\t\t\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Déclenche un événement sur l'élément courant\n\t * @param string Event event\n\t * @param array Paramètres à transmettre à la méthode d'appel\n\t * @return self\n\t */\n\tfireEvent(event, params = []) {\n\t\tthis._htmlElementRequired();\n\t\tEventsRJS.fire(this, event, params || []);\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Supprime la classe CSS de l'élément courant\n\t * @patam string classToDelete\n\t * @return self\n\t */\n\tremoveClass(classToDelete) {\n\t\tthis._htmlElementRequired();\n\t\tthis.htmlElement.classList.remove(classToDelete);\n\t\tthis.setProperty(\"class\", this.htmlElement.className);\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Suppression de l'élément courant \n\t * @return void\n\t */\n\tremove() {\n\t\tthis._htmlElementRequired();\n\t\tthis.htmlElement.parentNode.removeChild(this.htmlElement);\n\t};\n\t\n\t/**\n\t * Supprime un élément enfant de l'élément courant\n\t * @param Element element l'élément à supprimer de l'élément courant\n\t * @return self\n\t */\n\tremoveChild(element) {\n\t\tthis._htmlElementRequired();\n\t\telement._htmlElementRequired();\n\t\t\n\t\tlet firstParent = element.getParent();\n\t\tif(firstParent) {\n\t\t\tfirstParent.htmlElement.removeChild(element.htmlElement);\n\t\t}\n\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Supprime tous les enfants de l'élément courant\n\t * @return self\n\t */\n\tremoveChildren() {\n\t\tthis._htmlElementRequired();\n\t\twhile(this.htmlElement.firstChild) {\n\t\t\tthis.removeChild(Element.retrieve(this.htmlElement.firstChild));\n\t\t}\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Retourne la valeur de l'offset de l'élément (offsetTop ou offsetLeft)\n\t * @param string property top|left\n\t * @return int\n\t */\n\tcomputeOffset(property) {\n\t\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tlet allowedProperties = [ \"top\", \"left\", ],\n\t\t\telement = this,\n\t\t\toffset = 0,\n\t\t\thtmlElementProperty = \"offset\" + Root_Str__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ucfirst(property)\n\t\t; \n\t\t\n\t\tif(allowedProperties.indexOf(property) == -1) {\n\t\t\tthrow \"Paramètre de computeOffset incorrect.\";\n\t\t}\n\t\t\n\t\tdo {\n\t\t\toffset += element.getProperty(htmlElementProperty);\n\t\t\tlet offsetParent = element.getProperty(\"offsetParent\");\n\t\t\tif(offsetParent) {\n\t\t\t\telement = Element.retrieve(offsetParent);\n\t\t\t} else {\n\t\t\t\telement = null;\n\t\t\t}\n\t\t} while(element);\n\t\t\n\t\treturn offset;\n\t};\n\t\n\t/**\n\t * Modifit les valeurs du défilement\n\t * @param data : {\n\t * \ttop: <int>\n\t * \tleft: <int>\n\t * }\n\t * @return self\n\t */\n\tchangeScroll(data) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tlet self = this,\n\t\t\tstep = function(ratio) {\n\t\t\t\t[ \"left\", \"top\" ].forEach(function(property) {\n\t\t\t\t\t\n\t\t\t\t\tif(isNaN(data[property])) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tlet scrollProperty = \"scroll\" + Root_Str__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ucfirst(property),\n\t\t\t\t\t\tcurrentScroll = self.getProperty(scrollProperty),\n\t\t\t\t\t\tstepScroll = currentScroll + (data[property] - currentScroll) * ratio\n\t\t\t\t\t;\n\t\t\t\t\t\n\t\t\t\t\tself.htmlElement[scrollProperty] = stepScroll;\n\t\n\t\t\t\t});\n\t\t\t}\n\t\t;\n\t\t\n\t\tnew Root_Animation__WEBPACK_IMPORTED_MODULE_1__[\"default\"](step, 500);\n\t\t\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Modification des styles\n\t * @param object newStyles Objet JSON des styles à modifier\n\t * @return self\n\t */\n\tsetStyles(newStyles) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tlet styles = this.getProperty(\"style\");\n\t\t\n\t\tObject.keys(newStyles).forEach(function(property) {\n\t\t\tlet value = newStyles[property];\n\t\t\tstyles.setProperty(property, value);\n\t\t});\n\t\t\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Retourne la valeur du style dont on donne la clé en paramètre\n\t * @param string key\n\t * @return string\n\t */\n\tgetStyle(key) {\n\t\tthis._htmlElementRequired();\n\t\treturn (window.getComputedStyle(this.htmlElement).getPropertyValue(key) || null);\n\t};\n\t\n\t/**\n\t * Retourne la dimension de l'élément en pixel avec ses marges\n\t * @param string property width|height\n\t * @return float\n\t */\n\tgetOuterDimension(property) {\n\t\tthis._htmlElementRequired();\n\t\t\n\t\tlet self = this,\n\t\t\tdimension = 0,\n\t\t\tproperties = {\n\t\t\t\twidth: {\n\t\t\t\t\tleft: 0,\n\t\t\t\t\tright: 0\n\t\t\t\t},\n\t\t\t\theight: {\n\t\t\t\t\ttop: 0,\n\t\t\t\t\tbottom: 0\n\t\t\t\t}\n\t\t\t}\n\t\t; \n\t\t\n\t\tif(Object.keys(properties).indexOf(property) == -1) {\n\t\t\tthrow \"Paramètre de getOuterDimension incorrect.\";\n\t\t}\n\t\t\n\t\tObject.keys(properties[property]).forEach(function(position) {\n\t\t\tlet styleValue = self.getStyle(\"margin-\" + Root_Str__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ucfirst(position)) || 0;\n\t\t\tdimension += parseInt(Root_Str__WEBPACK_IMPORTED_MODULE_0__[\"default\"].replace(styleValue, {\n\t\t\t\t\"px\": \"\"\n\t\t\t}));\n\t\t});\n\t\t\n\t\tdimension += (this.getProperty(\"offset\" + Root_Str__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ucfirst(property)) || 0);\n\t\t\n\t\treturn dimension;\n\t};\n\t\n\t/**\n\t * Méthode appelée lorsque l'élément HTML n'a pas été appelé et qu'il est nécessaire\n\t * @return void \n\t */\n\t_htmlElementRequired() {\n\t\tif(this.htmlElement === null) {\n\t\t\tthrow \"L'élément n'a pas été initialisé.\";\n\t\t}\n\t};\n\t\n};\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/Element.js?");

/***/ }),

/***/ "./resources/scripts/classes/Root/Integer.js":
/*!***************************************************!*\
  !*** ./resources/scripts/classes/Root/Integer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Integer; });\n/**\n * Classe gérant des entiers\n */\nclass Integer  { \n\t\n\t/**\n\t * Retourne un entier entre les valeurs en paramètre\n\t * @param int min\n\t * @param int max\n\t * @return int\n\t */\n\tstatic random(min, max) {\n\t\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n\t};\n\t\n}\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/Integer.js?");

/***/ }),

/***/ "./resources/scripts/classes/Root/Str.js":
/*!***********************************************!*\
  !*** ./resources/scripts/classes/Root/Str.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Str; });\n/* harmony import */ var Root_Integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Root/Integer */ \"./resources/scripts/classes/Root/Integer.js\");\n/**\n * Classe gérant des chaines de caractères\n */\n\n\n\nclass Str {\n\t\n\t/**\n\t * Retourne une chaine en remplaçant les clés du tableau replacePairs par ses valeurs dans la chaine de caractère \n\t * Il s'agit d'un équivalent de la fonction PHP strtr (http://php.net/manual/fr/function.strtr.php)\n\t * @param string string Chaine à modifier\n\t * @param object from Tableau des correspondances\n\t * @return string\n\t */\n\tstatic replace(string, replacePairs) {\n\t\tfor(var key in replacePairs) {\n\t\t\tvar value = replacePairs[key];\n\t\t\tstring = string.replace(new RegExp(key, \"g\"), value);\n\t\t}\n\t\treturn string;\n\t};\n\t\n\t/**\n\t * Retourne un identifiant unique\n\t * @return string\n\t */\n\tstatic uniqueId() {\n\t\t\n\t\tvar intervalsByType = {\n\t\t\t\t\"letter\": { \"min\": 97, \"max\": 122 },\n\t\t\t\t\"integer\": { \"min\": 48, \"max\": 57 }\n\t\t\t},\n\t\t\tcharacterTypes = Object.keys(intervalsByType),\n\t\t\titeration = Root_Integer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(5, 10),\n\t\t\tidentifiers = [],\n\t\t\tnumberCharacters, characterType, intervals, i, j\n\t\t;\n\t\t\n\t\tfor(i = 0 ; i < iteration ; i++) {\n\t\t\tnumberCharacters = Root_Integer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(10, 20);\n\t\t\tfor(j = 0 ; j < numberCharacters ; j++) {\n\t\t\t\tcharacterType = characterTypes[Root_Integer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(0, characterTypes.length - 1)];\n\t\t\t\t\n\t\t\t\tintervals = intervalsByType[characterType];\n\t\t\t\tif(! identifiers[i]) {\n\t\t\t\t\tidentifiers[i] = \"\";\n\t\t\t\t}\n\t\t\t\tidentifiers[i] += String.fromCharCode(Root_Integer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].random(intervals[\"min\"], intervals[\"max\"]));\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn identifiers.join(\"\");\n\t};\n\t\n\t/**\n\t * Retourne la chaine en mettant la première lettre en majuscule\n\t * @param string string\n\t * @return string\n\t */\n\tstatic ucfirst(string) {\n\t\treturn (string.charAt(0).toUpperCase() + string.substring(1));\n\t};\n\t\n}\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/Str.js?");

/***/ }),

/***/ "./resources/scripts/classes/Root/Url.js":
/*!***********************************************!*\
  !*** ./resources/scripts/classes/Root/Url.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Url; });\n/**\n * Gestion d'URL ou de pseudo URL\n */\n \nclass Url {\n\t\n\t// url: null,\n\t// baseUrl: null,\n\t// queries: null\n\t\n\tconstructor(url) {\n\t\tthis.url = url;\n\t\tthis.initBaseURL(); \n\t\tthis.initQueries();\n\t};\n\t\n\t/**\n\t * Initialise l'URL de base, sans les paramètres en GET\n\t * @return void\n\t */\n\tinitBaseURL() {\n\t\tthis.baseUrl = this.url;\n\t\t\n\t\tlet indexSeparator = this.url.indexOf(\"?\");\n\t\t\n\t\tif(indexSeparator != -1) {\n\t\t\tthis.baseUrl = this.baseUrl.substring(0, indexSeparator);\n\t\t}\n\t};\n\t\n\t/**\n\t * Initialise les paramètres en GET\n\t * @return void\n\t */\n\tinitQueries() {\n\t\t\n\t\tlet indexSeparator = this.url.indexOf(\"?\"),\n\t\t\tqueryString = \"\"\n\t\t;\n\n\t\tif(indexSeparator != -1) {\n\t\t\tqueryString = this.url.substring(indexSeparator)\n\t\t}\n\t\t\n\t\tthis.queries = new URLSearchParams(queryString);\n\t\t\n\t};\n\t\n\t/**\n\t * Modifit la valeur d'un paramètre en GET\n\t * @param string key\n\t * @param string value\n\t * @return self\n\t */\n\tsetQueryParam(key, value) {\n\t\tthis.queries.set(key, value);\n\t\treturn this;\n\t};\n\t\n\t/**\n\t * Retourne l'URL complète\n\t * @return string\n\t */\n\tgetHref() {\n\t\tlet url = this.baseUrl,\n\t\t\tcountQueries = 0\n\t\t;\n\t\t\n\t\tthis.queries.forEach(function() {\n\t\t\tcountQueries++;\n\t\t});\n\t\t\n\t\t\n\t\tif(countQueries > 0) {\n\t\t\turl += \"?\" + this.queries.toString();\n\t\t\t\n\t\t}\n\t\t\n\t\treturn url;\n\t};\n\t\n}\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/Root/Url.js?");

/***/ }),

/***/ "./resources/scripts/classes/root.js":
/*!*******************************************!*\
  !*** ./resources/scripts/classes/root.js ***!
  \*******************************************/
/*! exports provided: Integer, Str, Url, Animation, AjaxRequest, JsonAjaxRequest, UploadAjaxRequest, Controller, Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Root_Integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Root/Integer */ \"./resources/scripts/classes/Root/Integer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Integer\", function() { return Root_Integer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var Root_Str__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Root/Str */ \"./resources/scripts/classes/Root/Str.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Str\", function() { return Root_Str__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var Root_Url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Root/Url */ \"./resources/scripts/classes/Root/Url.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Url\", function() { return Root_Url__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var Root_Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Root/Animation */ \"./resources/scripts/classes/Root/Animation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Root_Animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var Root_AjaxRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Root/AjaxRequest */ \"./resources/scripts/classes/Root/AjaxRequest.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AjaxRequest\", function() { return Root_AjaxRequest__WEBPACK_IMPORTED_MODULE_4__[\"AjaxRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JsonAjaxRequest\", function() { return Root_AjaxRequest__WEBPACK_IMPORTED_MODULE_4__[\"JsonAjaxRequest\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UploadAjaxRequest\", function() { return Root_AjaxRequest__WEBPACK_IMPORTED_MODULE_4__[\"UploadAjaxRequest\"]; });\n\n/* harmony import */ var Root_Controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Root/Controller */ \"./resources/scripts/classes/Root/Controller.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return Root_Controller__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var Root_Element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Root/Element */ \"./resources/scripts/classes/Root/Element.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Element\", function() { return Root_Element__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://RootJS/./resources/scripts/classes/root.js?");

/***/ })

/******/ });
//# sourceMappingURL=maps/root.js.map

export default RootJS;