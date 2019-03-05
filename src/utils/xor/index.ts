export default (conditionA: boolean, conditionB: boolean) =>
  (conditionA && !conditionB) || (!conditionA && conditionB);
