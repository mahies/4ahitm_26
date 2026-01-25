
export interface Person {
  surname: string;
  firstname: string;
  urlImage: string;
  birthday: Date;
  email: string;
  zip_code: number; //equivalent to integer in java
  city: string;
  message: string;
  socialLink?: string;
  routerLink: string;
}

export  const MINNIE : Person = {
  surname: "Mouse",
  firstname: "Minnie",
  urlImage: "assets/demo/Minnie_Mouse.webp",
  birthday: new Date("1928-11-18"),
  email: "minnie.mouse@htl-donaustadt.at",
  zip_code: 1010,
  city: "Entenhausen",
  message: "\„Wenn du es dir vorstellen kannst, kannst du es auch machen.\" \n(Walt Disney)",
  routerLink: "/minnie-home"
};

//list all students
export const STUDENTS:Person[] = [MINNIE];
