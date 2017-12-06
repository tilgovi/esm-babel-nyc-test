async function* gen() {
  yield 'first'
  yield 'last'
}

async function main() {
  for await (let item of gen()) {
    console.log(item)
  }
}

main()
