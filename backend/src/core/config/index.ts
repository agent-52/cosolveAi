function getEnv(key: string) {
  const name = process.env.key;
  if (!name) {
    throw new Error(`${key} not defined `);
  }
  return name;
}

export const configObject = {
  PORT: getEnv("PORT"),
  JWT_SECRET: getEnv("JWT_SECRET"),
  REDIS_URL: getEnv("REDIS_URL"),
  DATABASE_URL: getEnv("DATABASE_URL"),
};
