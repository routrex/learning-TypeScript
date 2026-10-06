// Penggunaan Any dalam typescript, Any digunakan untuk menonaktifkan checking type data pada sebuah variable

describe("Type Any", () => {
  it("return result any", () => {
    const users: any = {
      id: 1,
      nama: "rifaldi eka",
      age: "22",
      isLulus: true,
    };

    console.log(users.nama);
  });
});
