import {createLogger, format, transports} from 'winston'
require('winston-daily-rotate-file');

const {timestamp, combine, printf, colorize, errors, splat, json} = format 

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${level} | ${timestamp} |  ${message}`;
});
 

const logger = createLogger({
    level: 'info',
    format: combine(
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      // splat(),
      // json(),
      logFormat
     
    ),
    transports: [
      //
      // - Write to all logs with level `info` and below to `app-combined.log`.
      // - Write all logs error (and below) to `quick-start-error.log`.
      //
      new transports.File({ filename: 'logs/app-error.log', level: 'error' }),
      new transports.File({ filename: 'logs/app-combined.log' }),
      new transports.DailyRotateFile({
        filename: 'logs/app-combined-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        maxSize: '1m',
  
      }),
    ]
  });

  

  //
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
      format: combine(
        format.colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        logFormat
      )
    }));
  }

  logger.info("App started/restarted")

  export default logger