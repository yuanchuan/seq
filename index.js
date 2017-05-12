function generate(n) {
  return (raw, ...tags) => raw.reduce((acc, s, i) => {
    let val = tags[i] ? tags[i](n) : '';
    let valid = /^(string|number)$/.test(typeof val);
    return acc + s + (valid ? val : '');
  }, '');
}

function range(start = 1, stop, step) {
  if (Array.isArray(start)) return start;
  let ret = [];
  switch (arguments.length) {
    case 1: [stop, start, step] = [start, 1, 1]; break;
    case 2: if (start > stop) step = -1;
  }
  for (let i = start; ;i += step) {
    if ( (start <= stop && i > stop)
      || (start >= stop && i < stop)) break;
    ret.push(i);
  }
  return ret;
}

function seq(...args) {
  return (raw, ...tags) => {
    let content = raw
      .map((s, i) => s + (tags[i] || '')).join('')
      .replace(/([^\\])#\{|^#\{/g, '$1${n=>');
    return range.apply(null, args)
      .map(n => eval(`generate('${n}')\`${content}\``))
      .join('');
  }
}

module.exports = seq;
