// Intersection Types

type IdentitasUser = {
  name: string;
  email: string;
};

type InfoPengiriman = {
  address: string;
  city: string;
};

type InfoPembayaran = {
  metode: string;
  total: number;
};

type DataDetailCheckOut = IdentitasUser & InfoPengiriman & InfoPembayaran;

const transaksi: DataDetailCheckOut = {
  name: "Budi",
  email: "budiHartono@gmail.com",
  address: "New York",
  city: "New York AS",
  metode: "QRIS",
  total: 250000,
};

console.log(transaksi);

// Type Assertions
let priceProduk: any = "250000"

let jumlahkan: number = priceProduk as number * 0.9

console.log(jumlahkan)
