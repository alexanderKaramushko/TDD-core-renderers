export function getPreviousIndexFromTarget<T>(array: T[], target: T): number {
  return array.indexOf(target) - 1;
}

export function getNextIndexFromTarget<T>(array: T[], target: T): number {
  return array.indexOf(target) + 1;
}

export function getTargetByIndex<T>(
  array: T[],
  target: T,
  getIndexFrom: (array: T[], target: T) => number,
): T | undefined {
  if (!target) {
    return undefined;
  }

  const segmentIndex = getIndexFrom(array, target);

  if (segmentIndex === -1) {
    return undefined;
  }

  return array[segmentIndex];
}

export function last<T>(array: T[]): T {
  return array[array.length - 1];
}
