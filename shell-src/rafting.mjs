#!/usr/bin/env zx

const rp = (text, n) => {
  let res = ''
  for(let i = 0; i < n; i++) {
    res += text
  }
  return res
}

// ANSI Escape functions
/** cursol move up */
const cu = (n = 1) => { return `\u001b[${n}A`}
/** cursol move down */
const cd = (n = 1) => { return `\u001b[${n}B`}
/** cursol move right */
const cr = (n = 1) => { return `\u001b[${n}C`}
/** cursol move left */
const cl = (n = 1) => { return `\u001b[${n}D`}
/** cursol move next line head */
const nlh = (n = 1) => { return `\u001b[${n}E` }
/** cursol move to x, y */
const cmv = (x, y) => { return `\u001b[${y};${x}H` }
/** cursol move previous line head */
const plh = (n = 1) => { return `\u001b[${n}F` }
/** delete line */
const dl = (n = 2) => { return `\u001b[${n}K` }
/** delete screen */
const ds = (n = 2) => { return `\u001b[${n}J` }

// 川下りゲーム書く

echo(`${ds()}`)
echo(`${cmv(1, 1)}${chalk.blue('*')}${cr(40)}${chalk.blue('*')}${nlh(10)}${chalk.blue('*')}${cr(40)}${chalk.blue('*')}${cmv(1, 12)}`)
await sleep(1000)
echo(`${cmv(16, 5)}川下りゲーム`)
echo(`${cmv(11, 6)}Enter を押してスタート`)
echo(`${cmv(1, 12)}`)

await question()
