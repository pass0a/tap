"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = require("tape");
exports.test = test;
var fs = require("fs");
test.onFinish(function () {
    var val = JSON.stringify(global['__coverage__']);
    fs.writeFileSync('.nyc_output/coverage.json', val ? val : '');
    // fs.writeFile('.nyc_output/coverage.json', val ? val : '', function(err) {
    // if (err) {
    // console.log('write err:', err);
    // }
    // });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUE2QjtBQW9CcEIsb0JBQUk7QUFuQmIsdUJBQXlCO0FBVXpCLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEVBQUUsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELDRFQUE0RTtJQUM1RSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLElBQUk7SUFDSixNQUFNO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0ZXN0IGZyb20gJ3RhcGUnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcblx0bmFtZXNwYWNlIE5vZGVKUyB7XHJcblx0XHRpbnRlcmZhY2UgR2xvYmFsIHtcclxuXHRcdFx0X19jb3ZlcmFnZV9fOiBzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG50ZXN0Lm9uRmluaXNoKGZ1bmN0aW9uKCkge1xyXG5cdHZhciB2YWwgPSBKU09OLnN0cmluZ2lmeShnbG9iYWxbJ19fY292ZXJhZ2VfXyddKTtcclxuXHRmcy53cml0ZUZpbGVTeW5jKCcubnljX291dHB1dC9jb3ZlcmFnZS5qc29uJywgdmFsID8gdmFsIDogJycpO1xyXG5cdC8vIGZzLndyaXRlRmlsZSgnLm55Y19vdXRwdXQvY292ZXJhZ2UuanNvbicsIHZhbCA/IHZhbCA6ICcnLCBmdW5jdGlvbihlcnIpIHtcclxuXHQvLyBpZiAoZXJyKSB7XHJcblx0Ly8gY29uc29sZS5sb2coJ3dyaXRlIGVycjonLCBlcnIpO1xyXG5cdC8vIH1cclxuXHQvLyB9KTtcclxufSk7XHJcbmV4cG9ydCB7IHRlc3QgfTtcclxuIl19