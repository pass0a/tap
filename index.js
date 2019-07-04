"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = require("tape");
exports.test = test;
var fs = require("fs");
test.onFinish(function () {
    var val = JSON.stringify(global['__coverage__']);
    fs.writeFile('.nyc_output/coverage.json', val ? val : '', function (err) {
        if (err) {
            console.log('write err:', err);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUE2QjtBQW1CcEIsb0JBQUk7QUFsQmIsdUJBQXlCO0FBVXpCLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDYixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pELEVBQUUsQ0FBQyxTQUFTLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxVQUFTLEdBQUc7UUFDckUsSUFBSSxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQjtJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0ZXN0IGZyb20gJ3RhcGUnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcblx0bmFtZXNwYWNlIE5vZGVKUyB7XHJcblx0XHRpbnRlcmZhY2UgR2xvYmFsIHtcclxuXHRcdFx0X19jb3ZlcmFnZV9fOiBzdHJpbmc7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG50ZXN0Lm9uRmluaXNoKGZ1bmN0aW9uKCkge1xyXG5cdHZhciB2YWwgPSBKU09OLnN0cmluZ2lmeShnbG9iYWxbJ19fY292ZXJhZ2VfXyddKTtcclxuXHRmcy53cml0ZUZpbGUoJy5ueWNfb3V0cHV0L2NvdmVyYWdlLmpzb24nLCB2YWwgPyB2YWwgOiAnJywgZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd3cml0ZSBlcnI6JywgZXJyKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7XHJcbmV4cG9ydCB7IHRlc3QgfTtcclxuIl19