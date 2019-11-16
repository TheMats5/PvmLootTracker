"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get("/", (req, res, next) => {
    // render the index template
    res.send("hello world test");
});
exports.default = router;
//# sourceMappingURL=home.routes.js.map