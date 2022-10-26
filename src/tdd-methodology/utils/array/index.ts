/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
type GetIndexFromStrategy = <T>(array: T[], target: T) => number;

export const getPreviousIndexFromTarget: GetIndexFromStrategy = <T>(array: T[], target: T): number => {
  return array.indexOf(target) - 1;
};

export const getNextIndexFromTarget: GetIndexFromStrategy = <T>(array: T[], target: T): number => {
  return array.indexOf(target) + 1;
};

export function getTargetByIndex<T>(
  array: T[],
  target: T,
  getIndexFrom: GetIndexFromStrategy,
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

export function first<T>(array: T[]): T {
  return array[0];
}
