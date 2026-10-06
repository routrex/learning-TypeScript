// Type Alias pada typescript, digunakan untuk memberikan nama(alias) pada sebuah tipe data

type Status = "wni" | "wna";
type Gender = "L" | "W";

// export type matkul = [
//   {
//     id: number;
//     mataKuliah: string;
//   },
//   {
//     id: number;
//     mataKuliah: string;
//   },
// ];

// export type mhs = {
//   id: number;
//   nama: string;
//   nim: string;
//   semester: number;
//   matkul: matkul;
// };

export function profil(nama: string, gender: Gender, status: Status) {
  return `Nama saya adalah ${nama}, gender ${gender}, dengan status kebangsaan ${status}`;
}

type StatusPesanan = "pending" | "process" | "finished";

const statusKurir1: StatusPesanan = "process";
// const statusKurir2: StatusPesanan = "Gagal"

let responseApi: any = "Data berhasil dibuat!";

responseApi = {
  id: 1,
  isActive: true,
};

let karyawan: { id: number; name: string; email: string; noTlp?: string } = {
  id: 1,
  name: "Jhon Doe",
  email: "Jhondoe@gmail.com",
};

karyawan.id = 2;
karyawan.name = "Alexander";
karyawan.email = "alexander@gmail.com";
karyawan.noTlp = "08878789898978";

enum RolePengguna {
  Admin = 'Admin',
  Editor = 'Editor',
  Developer = 'Developer'
}

// enum RolePengguna {
//   Admin,
//   Editor,
//   Developer,
// }

const access: RolePengguna = RolePengguna.Developer;
console.log(access);
