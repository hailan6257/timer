const arr = process.argv.slice(2);
for (let ele of arr) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, ele * 1000);
}