import "./styles.css";

let nro1: number | null = Number(prompt("Ingrese el primer número."));
let nro2: number | null = Number(prompt("Ingrese el segundo número."));

function esMultiplo(nro1: number, nro2: number): boolean {
  if (nro1 % nro2 === 0) {
    return true;
  } else {
    return false;
  }
}
// De esta manera devuelvo el valor lógico, pero sin mostrarlo por consola.
esMultiplo(nro1, nro2);

// De esta forma muestro por consola el valor lógico que devuelve, no lo pedía en la consigna, pero no creo que esté demás añadirlo.
console.log(esMultiplo(nro1, nro2));
