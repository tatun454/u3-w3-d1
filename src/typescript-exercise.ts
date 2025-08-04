// TypeScript Exercise

// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi principali sono: string, number, boolean, null, undefined, symbol, bigint

// 2) Crea tre variabili tipizzate
const mioNome: string = "Mario";
const miaEta: number = 25;
const stoStudiandoTypeScript: boolean = true;

// 3) Tipizza il parametro della funzione greet
const greet = (name: string): string => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della funzione sum
const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione per calcolare il prezzo con IVA
const calcolaPrezzoConIVA = (prezzo: number): number => {
  const iva = 0.22;
  return prezzo + prezzo * iva;
};

// 6) Crea una funzione per concatenare stringhe e restituire lunghezza
const concatenaStringhe = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

// 7) Type Union - permette a una variabile di avere più tipi
// Si scrive con il simbolo pipe (|)
type StringOrNumber = string | number;

// 8) Crea una variabile che possa contenere un numero, null o undefined
let valore: number | null | undefined;

// 9) Crea un tipo per i giorni della settimana
type GiorniSettimana =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

// 10) Tipizza l'array di numeri nei due modi possibili
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla con 5 elementi: 3 stringhe e 2 numeri
type TuplaMista = [string, string, string, number, number];
const miaTupla: TuplaMista = ["a", "b", "c", 1, 2];

// 12) Differenza tra type e interface:
// - type: più flessibile, può rappresentare union, intersection, primitive
// - interface: più adatta per oggetti, può essere estesa e implementata

// 13) Interfaccia per persona
interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Interfaccia per utente
interface Utente {
  email: string;
  telefono?: string; // opzionale
}

// 15) Array tipizzato di oggetti Studente
interface Studente {
  nome: string;
  voto: number;
}

const studenti: Studente[] = [
  { nome: "Alice", voto: 28 },
  { nome: "Bob", voto: 25 },
  { nome: "Charlie", voto: 30 },
];

// 16) Interfaccia base Veicolo e estensione Auto
interface Veicolo {
  marca: string;
  modello: string;
  anno: number;
}

interface Auto extends Veicolo {
  numeroPorte: number;
  tipoAlimentazione: string;
}

// 17) Oggetto che implementa l'interfaccia Auto
const miaAuto: Auto = {
  marca: "Fiat",
  modello: "Panda",
  anno: 2023,
  numeroPorte: 5,
  tipoAlimentazione: "Benzina",
};

// 18) I Generics permettono di creare componenti riutilizzabili che possono lavorare con diversi tipi
// 19) Sì, è possibile avere più tipi generici

// 20) Interfaccia generica per risposta API
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: Date;
}

// Esempio di utilizzo dell'interfaccia generica
type UserData = {
  id: number;
  name: string;
};

const userResponse: ApiResponse<UserData> = {
  success: true,
  data: { id: 1, name: "Mario Rossi" },
  timestamp: new Date(),
};

// Funzioni di test per verificare il funzionamento
export const testTypeScriptFeatures = () => {
  console.log("=== Test TypeScript Features ===");

  // Test 2
  console.log("Nome:", mioNome);
  console.log("Età:", miaEta);
  console.log("Studia TypeScript:", stoStudiandoTypeScript);

  // Test 3
  console.log("Greet:", greet("Luca"));

  // Test 4
  console.log("Sum:", sum(5, 3));

  // Test 5
  console.log("Prezzo con IVA:", calcolaPrezzoConIVA(100));

  // Test 6
  console.log("Lunghezza concatenata:", concatenaStringhe("Hello", "World"));

  // Test 9
  const oggi: GiorniSettimana = "Lunedì";
  console.log("Oggi è:", oggi);

  // Test 13
  const persona: Persona = {
    firstname: "Mario",
    lastname: "Rossi",
    age: 30,
  };
  console.log("Persona:", persona);

  // Test 15
  console.log("Studenti:", studenti);

  // Test 17
  console.log("Auto:", miaAuto);

  // Test 20
  console.log("API Response:", userResponse);
};

// Esegui il test
testTypeScriptFeatures();
