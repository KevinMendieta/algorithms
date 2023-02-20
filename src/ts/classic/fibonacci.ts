export function fib(n: number): number {
  const sequence: number[] = [0, 1, 1]
  for (let index = 3; index <= n; index++) {
    sequence.push(sequence[index - 1] + sequence[index - 2])
  }
  return sequence[n]
}
