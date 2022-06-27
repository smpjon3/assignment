export function sum(...args) {
  if (args.some((arg) => isNaN(arg))) {
    return 0;
  } else if (args.length < 1) {
    return 0;
  } else if (args.length === 1) {
    return args[0];
  } else {
    return args.reduce((acc, cur) => acc + cur, 0);
  }
}
