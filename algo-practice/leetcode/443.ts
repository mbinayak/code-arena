function compress(chars: string[]): number {
  let compressedId = 0;
  let count = 0;
  for (let i = 0, char = undefined; i < chars.length; i++) {
    if (char === chars[i]) {
      count++;
      continue;
    }

    if (count > 1) {
      count
        .toString()
        .split("")
        .forEach((ch) => {
          chars[compressedId++] = ch;
        });
    }

    char = chars[i] as string;
    chars[compressedId++] = char;
    count = 1;
  }

  if (count > 1) {
    count
      .toString()
      .split("")
      .forEach((ch) => {
        chars[compressedId++] = ch;
      });
  }

  return compressedId;
}

export default compress;
