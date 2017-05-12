# seq

Generate strings from a sequence.


```javascript
/* https://rosettacode.org/wiki/99_Bottles_of_Beer */

seq(99, 1)`
  #{n} bottles of beer on the wall,
  #{n} bottles of beer.
  Take one down and pass it around,
  #{n - 1} bottles of beer on the wall.
`
```

## Installation

```bash
npm i @yuanchuan/seq
```

## Examples

```javascript
const seq = require('@yuanhuan/seq');

// sequence from an array
seq(['chrome', 'firefox'])`
  #{n} has a length of #{n.length}
`

// sequence with step
seq(1, 10, 2)`
  li:nth-child(#{n}) {
    background-color: hsl(
      #{360 / n}, #{20 * n}%, #{100 - n * 10}%
    );
  }
`
```

## License
MIT
