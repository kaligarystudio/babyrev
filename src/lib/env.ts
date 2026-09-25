import "server-only";

function getRequiredEnvironmentVariable(
  name: string
): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value;
}

export const serverEnvironment = {
  databaseUrl: getRequiredEnvironmentVariable(
    "DATABASE_URL"
  )
};
