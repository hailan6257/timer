const arr = process.argv.slice(2);
for (let ele of arr) {
  if (typeof(ele) === "number" && ele >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, ele * 1000);
  } else {
    continue;
  }
}