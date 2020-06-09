"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const rootDir = path_1.default.join(__dirname, "..");
app.use(express_1.default.static(rootDir));
app.get("/", (req, res) => {
    res.sendFile(`${rootDir}\\index.html`);
    res.end();
});
app.use((req, res, next) => {
    res.redirect("/");
    res.end();
    next();
});
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
