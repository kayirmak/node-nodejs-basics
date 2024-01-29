const parseArgs = () => {
  const argvs = process.argv.slice(2);

  for (let key = 0; key < argvs.length; key += 2) {
    const replaced = argvs[key].replace("--", "");
    console.log(`${replaced} is ${argvs[key + 1]}`);
  }
};

parseArgs();
