#!/usr/bin/env zx

echo(chalk.blue('2次方程式の解の公式を計算します。'))
echo(chalk.green.bold(' x = (-b ± √(b*b-4*a*c))/(2*a) \n'))

const a = Number(await question('aの値を入力してください : '))
const b = Number(await question('bの値を入力してください : '))
const c = Number(await question('cの値を入力してください : '))

const d = Math.sqrt(b * b - 4 * a * c)

const calc = (isPositive) => {
  return isPositive
  ? (-b + d) / (2 * a)
  : (-b - d) / (2 * a)
}

echo(chalk.red.bold(`解）${calc(true)}、${calc(false)}`))
