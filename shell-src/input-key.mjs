#!/usr/bin/env zx

let input
while(true){
  echo('\nready')
  input = await $`read -n1 -s tmp && echo $tmp`
  echo(input)
}