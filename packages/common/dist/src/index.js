"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_native_1 = require("react-native");
var CounterStore_1 = require("../stores/CounterStore");
exports.App = mobx_react_lite_1.observer(function () {
    var counterStore = react_1.useContext(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, null, "Open up App.tsx to start working oon your app!"),
        react_1.default.createElement(react_native_1.Button, { title: "Add", onPress: function () { return counterStore.count++; } }),
        react_1.default.createElement(react_native_1.Text, null, counterStore.count)));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
