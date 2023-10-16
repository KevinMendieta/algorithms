function merge(lArray: number[], rArray: number[]): number[] {
  let mergedArray: number[] = []

  while (lArray.length && rArray.length) {
    const element = lArray[0] <= rArray[0] ? lArray.shift() : rArray.shift()
    element && mergedArray.push(element)
  }

  mergedArray = mergedArray.concat(lArray)
  mergedArray = mergedArray.concat(rArray)
  return mergedArray
}

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)
  const lArray = array.slice(0, mid)
  const rArray = array.slice(mid)
  return merge(mergeSort(lArray), mergeSort(rArray))
}
