"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const util_1 = __importDefault(require("util"));
const lodash_1 = require("lodash");
const { combine, colorize } = winston_1.default.format;
const transform = () => {
    return {
        transform: (info) => {
            info.oldMessage = info.message;
            info.message = util_1.default.format(info.stack || info.message, ...(info[Symbol.for("splat")] || []));
            return info;
        },
    };
};
const transformBack = () => {
    return {
        transform: (info) => {
            info.message = info.oldMessage;
            return info;
        },
    };
};
const logger = winston_1.default.createLogger({
    format: combine(colorize(), transform(), winston_1.default.format.printf((info) => {
        if (info instanceof Error) {
            return `${new Date().toISOString()} [${[
                "\x1B[31merror\x1B[39m",
            ]}] : ${info}`;
        }
        const newLog = (0, lodash_1.cloneDeep)(info);
        delete newLog.level;
        delete newLog.oldMessage;
        return `${new Date().toISOString()} [${info.level}] : ${JSON.stringify(newLog?.message || newLog, null, 2)
            .replace(/\\n/g, "\n")
            .replace(/\\"/g, '"')}`;
    }), transformBack()),
});
exports.logger = logger;
logger.add(new winston_1.default.transports.Console({
    level: "debug",
}));
