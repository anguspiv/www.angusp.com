import consola from 'consola';

const logger = consola.create({
  level: process.env.LOG_LEVEL,
});

logger.info(`Log Level: ${logger.level}`);

export default logger;
