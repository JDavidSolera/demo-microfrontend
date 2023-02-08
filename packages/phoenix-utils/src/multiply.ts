export function multiply(a: number, b: number): number {
  if (!a || !b) {
    throw new Error("error");
  }

  return a * b;
}
