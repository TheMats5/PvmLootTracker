"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env;
exports.default = {
    PORT: 4200,
    POSTGRESQL_DATABASE: "cv_service_db",
    POSTGRESQL_USERNAME: "cv_user",
    POSTGRESQL_PASSWORD: "EvW8z7n4KN",
    GOOGLE_API_KEY: env.GOOGLE_API_KEY || "AIzaSyDKnzDTNYEpi77BvztW14CIMKejbzLrtfg",
    AUTH0_URL: env.AUTH0_URL || "https://pau-test.eu.auth0.com/"
};
//# sourceMappingURL=config.js.map