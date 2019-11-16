"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = __importDefault(require("./config"));
const home_routes_1 = __importDefault(require("./routes/home.routes"));
const app = express_1.default();
app.use("/api", home_routes_1.default);
if (process.env.NODE_ENV === "development") {
    console.log("DEV MODE");
    app.use(morgan_1.default("dev"));
}
app.listen(config_1.default.PORT, () => console.log(`Cv-service listening on port ${config_1.default.PORT}!`));
//# sourceMappingURL=app.js.map