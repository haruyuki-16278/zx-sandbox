#!/usr/bin/env zx

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
/** cursol move previous line head */
const plh = (n = 1) => { return `\u001b[${n}F` }
/** delete line */
const dl = (n = 2) => { return `\u001b[${n}K` }

// 川下りゲーム書く

echo('--------------川下りゲーム--------------')
echo('        Enterを押して設定を始める        ')

await question()

echo(`\u001b[0Ftest`)

echo(`${cu()}${cu()}${dl()}${cu()}${dl()}test`)