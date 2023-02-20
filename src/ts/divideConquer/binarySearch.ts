export function binSearch(
  elements: number[],
  start: number,
  end: number,
  element: number,
): number {
  if (start < 0 || end >= elements.length) return -1

  let low = start
  let hi = end
  while (low <= hi) {
    const mid = Math.floor((low + hi) / 2)
    const midElement = elements[mid]
    if (element === midElement) return mid

    element < mid ? (hi = mid - 1) : (low = mid + 1)
  }
  return -1
}
