const spinner = ['|   ', '/   ', '-   ', '\\   ','|   ', '/   ', '-   ', '\\   ','|   ', '\n']
let timer = 100;

for (let el of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${el}`);
  }, timer)

  timer += 200;
}