
(global as any).require = {
	paths: { vs: "node_modules/monaco-editor/min/vs" },
};
require("script-loader!../../node_modules/monaco-editor/min/vs/loader");
require("script-loader!../../node_modules/monaco-editor/min/vs/editor/editor.main.js");
import { loadMonaco } from "../monaco-loader";

loadMonaco();
