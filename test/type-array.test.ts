// deklarasi penggunaan array di typescript
// penggunaan tipe readonlyarray yang hanya untuk membaca sebuah nilai dari array dan tidak bisa mengubahnya nya

describe("Type Array", () => {
  it("return array", () => {
    // const element: string[] = ["rifal", "eka", "putra"];
    // console.log(element);

    // let data: ReadonlyArray<number> = [1, 2];

    // console.log(data[0]);
    // console.log(data[1]);
    // // console.log(data)
    // // data[1] = 3;

    // // Type Tupel pada array, Tupel adalah tipe array yang panjang array dan juga tipe data pada index sudah ditentukan
    // const mhs: readonly [string, string, number] = [
    //   "Rifaldi",
    //   "2255201066",
    //   22,
    // ];

    // console.log(mhs[0]);
    // console.log(mhs[1]);
    // console.log(mhs[2]);

    // case 1
    const name: String = "Jhon Doe";
    const age: Number = 20;
    const isActive: Boolean = true;
    const hobi: String[] = ["Olahraga", "Learning"];
    const alamat: readonly [String, Number] = ["New York", 17];

    console.log(name);
    console.log(age);
    console.log(isActive);
    console.log(hobi);
    console.log(alamat)
    console.log(
      `Nama ${name} dengan umur ${age} aktif ? ${isActive} dan hobi ${hobi[0]}`,
    );
  });
});
