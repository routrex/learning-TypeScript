// Interface
interface Profile {
  id: number;
  name: string;
  age: number;
  address: string;
}

interface Ktp {
  name: string;
  age: number;
  address: string;
}

interface Ktp1 extends Ktp {
  status: string;
}

interface Ktp2 extends Ktp {
  Religion: string;
}

// function interface
interface Penjumlahan {
  (a: number, b: number): number;
}

// function in interface
interface KarakterGame {
  name: string;
  level: number;
  hp: number;
  attack(): string;
}

interface Pahlawan extends KarakterGame {
  kekuatanUltimate: string;
  gunakanUltimate(target: string): string;
}

const link: Pahlawan = {
  name: "Power Karakter",
  level: 1,
  hp: 200,
  attack: function () {
    return "Karakter Menyerang Musuh!";
  },
  gunakanUltimate: function (target: "Hero") {
    return `Hero ini adalah karakter musuh bernama ${target} !`;
  },
  kekuatanUltimate: "Sangat Kuat",
};

console.log(link.gunakanUltimate("Hero"));

// Indexable Interface
interface ListAccount {
  [index: number]: string;
}

const getAccount: ListAccount = ["@RWRWRWEWE", "@HGUTYDF", "@QSWEEW"];

console.log(getAccount);

const getProfile: Profile = {
  id: 1,
  name: "Rifaldi Eka",
  age: 22,
  address: "Tangerang",
};

const result: Penjumlahan = (a: number, b: number): number => {
  return a + b;
};

const hasil = result(1, 1);
console.log(hasil);
console.log(getProfile);
