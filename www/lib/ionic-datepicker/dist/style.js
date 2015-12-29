(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "/* Empty. Add your own CSS if you like */\n" +
"\n" +
".datepicker-content {\n" +
"  height: 210px;\n" +
"  overflow: auto;\n" +
"}\n" +
"\n" +
".visible-overflow {\n" +
"  overflow: visible;\n" +
"}\n" +
"\n" +
".center {\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".bold {\n" +
"  font-weight: bold;\n" +
"}\n" +
"\n" +
".datepicker-month, .datepicker-day-of-month, .datepicker-year {\n" +
"  margin-top: 10px;\n" +
"  margin-bottom: 10px;\n" +
"  color: #fff;\n" +
"  cursor: pointer;\n" +
"}\n" +
"\n" +
".datepicker-selection {\n" +
"  cursor: pointer;\n" +
"}\n" +
"\n" +
".datepicker-month, .datepicker-year {\n" +
"  font-size: 14px;\n" +
"}\n" +
"\n" +
".datepicker-day-of-month {\n" +
"  font-size: 60px;\n" +
"  font-weight: bold;\n" +
"}\n" +
"\n" +
".datepicker-balanced {\n" +
"  background-color: rgb(0, 141, 127);\n" +
"}\n" +
"\n" +
".white {\n" +
"  color: #fff\n" +
"}\n" +
"\n" +
".datepicker-balanced-light {\n" +
"  background-color: rgb(0, 150, 136);\n" +
"}\n" +
"\n" +
".datepicker-color-balanced-light {\n" +
"  color: rgb(0, 150, 136) !important;\n" +
"}\n" +
"\n" +
".datepicker-date-col:hover {\n" +
"  background-color: rgba(56, 126, 245, 0.5);\n" +
"  cursor: pointer;\n" +
"}\n" +
"\n" +
".no-padding {\n" +
"  padding: 0;\n" +
"}\n" +
"\n" +
".datepicker-date-cell {\n" +
"  padding: 5px;\n" +
"}\n" +
"\n" +
".datepicker-selected {\n" +
"  background-color: rgba(182, 217, 214, 1);\n" +
"}\n" +
"\n" +
".datepicker-current {\n" +
"  color: rgba(60, 170, 159, 1);\n" +
"}\n" +
"\n" +
".datepicker-disabled {\n" +
"  color: rgba(170, 170, 170, 1);\n" +
"}\n" +
"\n" +
".datepicker-disabled:hover {\n" +
"  background-color: transparent;\n" +
"  cursor: default;\n" +
"}\n" +
"\n" +
"/**\n" +
" * datepicker-modals\n" +
" *  --------------------------------------------------\n" +
" **/\n" +
".datepicker-modal-container {\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  background: rgba(0, 0, 0, 0);\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -moz-box;\n" +
"  display: -moz-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  -webkit-box-pack: center;\n" +
"  -ms-flex-pack: center;\n" +
"  -webkit-justify-content: center;\n" +
"  -moz-justify-content: center;\n" +
"  justify-content: center;\n" +
"  -webkit-box-align: center;\n" +
"  -ms-flex-align: center;\n" +
"  -webkit-align-items: center;\n" +
"  -moz-align-items: center;\n" +
"  align-items: center;\n" +
"  z-index: 12;\n" +
"}\n" +
".datepicker-modal-container .datepicker-modal {\n" +
"  width: 250px;\n" +
"  max-width: 100%;\n" +
"  max-height: 90%;\n" +
"  border-radius: 0px;\n" +
"  background-color: rgba(255, 255, 255, 0.9);\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -moz-box;\n" +
"  display: -moz-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  -webkit-box-direction: normal;\n" +
"  -webkit-box-orient: vertical;\n" +
"  -webkit-flex-direction: column;\n" +
"  -moz-flex-direction: column;\n" +
"  -ms-flex-direction: column;\n" +
"  flex-direction: column;\n" +
"}\n" +
"\n" +
".datepicker-modal {\n" +
"  box-shadow: 1px 1px 3px #888888;\n" +
"}\n" +
"\n" +
".datepicker-modal-head {\n" +
"  padding: 8px 10px;\n" +
"  text-align: center;\n" +
"}\n" +
"\n" +
".datepicker-modal-title {\n" +
"  margin: 0;\n" +
"  padding: 0;\n" +
"  font-size: 13px;\n" +
"}\n" +
"\n" +
".datepicker-modal-buttons {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: -moz-box;\n" +
"  display: -moz-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: flex;\n" +
"  -webkit-box-direction: normal;\n" +
"  -webkit-box-orient: horizontal;\n" +
"  -webkit-flex-direction: row;\n" +
"  -moz-flex-direction: row;\n" +
"  -ms-flex-direction: row;\n" +
"  flex-direction: row;\n" +
"  padding: 10px;\n" +
"  min-height: 65px;\n" +
"  font-size: 12px;\n" +
"  font-weight: bold;\n" +
"}\n" +
".datepicker-modal-buttons .button {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"  -moz-box-flex: 1;\n" +
"  -moz-flex: 1;\n" +
"  -ms-flex: 1;\n" +
"  flex: 1;\n" +
"  display: block;\n" +
"  min-height: 45px;\n" +
"  border-radius: 2px;\n" +
"  line-height: 20px;\n" +
"  margin-right: 5px;\n" +
"}\n" +
".datepicker-modal-buttons .button:last-child {\n" +
"  margin-right: 0px;\n" +
"}"));
