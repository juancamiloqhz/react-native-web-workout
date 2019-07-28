"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
exports.App = function () {
    var _a = react_1.default.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, null, "Open up App.tsxdsadf to start working on your app!"),
        react_1.default.createElement(react_native_1.Button, { title: "Add", onPress: function () { return setCount(function (d) { return d + 1; }); } }),
        react_1.default.createElement(react_native_1.Text, null, count)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
