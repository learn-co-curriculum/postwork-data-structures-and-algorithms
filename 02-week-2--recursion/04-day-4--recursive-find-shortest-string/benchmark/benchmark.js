// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.






function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}
