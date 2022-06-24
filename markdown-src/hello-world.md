# hello world

[zx](https://github.com/google/zx)でハロワする  
[Markdown Scripts](https://github.com/google/zx/blob/main/docs/markdown.md)を使う

```js
console.log('hello world ! in zx console.log')
echo`hello world ! in zx echo`
```

もうちょっとなんかしたいので2次方程式の解の公式くらいやってみる

```js
echo`\n 2次方程式の解の公式を解くわよ！`
const a = Number(await question('A value? '))
const b = Number(await question('B value? '))
const c = Number(await question('C value? '))
const d = Math.sqrt(b ** 2 - 4 * a * c)
echo`result: ${(-b+d)/(2*a)} or ${(-b-d)/(2*a)}`
```
