async function* gen() {
  yield 'first'
  yield 'last'
}

export default async function main() {
  for await (let item of gen()) {
    console.log(item)
  }
}
