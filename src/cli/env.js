const parseEnv = () => {
  for (const key of Object.keys(process.env)) {
    if (key.includes("RSS_")) {
      console.log(`${key}=${process.env[key]}`);
    }
  }
};

parseEnv();
