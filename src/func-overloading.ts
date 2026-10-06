function createCodeUnique(value: number): string;
function createCodeUnique(value: string): string;

function createCodeUnique(value: any) {
  if (typeof value === "number") {
    return `ID-NUM-${value}`;
  } else if (typeof value === "string") {
    return `ID-STR-${value}`;
  }
}

const result1 = createCodeUnique(45);
const result2 = createCodeUnique("VIP");

console.log(result1)
console.log(result2)
