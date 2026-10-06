// Penggunaan Union Type dalam typescript, digunakan untuk merubah bentuk tipe data dalam sebuah variable yang sudah ditentukan 

describe("Union Type", () => {
  it("return union type", () => {
    const id: number | string = "1";

    if (typeof id === "number") {
      console.log("nice ini number");
    } else if (typeof id === "string") {
      console.log("nice ini string");
    } else {
      console.error("gagal");
    }
  });
});
