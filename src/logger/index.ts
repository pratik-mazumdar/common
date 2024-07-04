import winston, { Logger } from "winston";
import util from "util";
import { cloneDeep } from "lodash";

const { combine, colorize } = winston.format;

const transform = () => {
  return {
    transform: (info: any) => {
      info.oldMessage = info.message;
      info.message = util.format(
        info.stack || info.message,
        ...(info[Symbol.for("splat")] || [])
      );
      return info;
    },
  };
};

const transformBack = () => {
  return {
    transform: (info: any) => {
      info.message = info.oldMessage;
      return info;
    },
  };
};

const logger: Logger = winston.createLogger({
  format: combine(
    colorize(),
    transform(),
    winston.format.printf((info: any) => {
      if (info instanceof Error) {
        return `${new Date().toISOString()} [${[
          "\x1B[31merror\x1B[39m",
        ]}] : ${info}`;
      }
      const newLog = cloneDeep(info);
      delete newLog.level;
      delete newLog.oldMessage;

      return `${new Date().toISOString()} [${info.level}] : ${JSON.stringify(
        newLog,
        null,
        2
      )
        .replace(/\\n/g, "\n")
        .replace(/\\"/g, '"')}`;
    }),
    transformBack()
  ),
});

logger.add(
  new winston.transports.Console({
    level: "debug",
  })
);

export { logger };
