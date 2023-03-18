export default function orden(orden, pokemones) {
  if (orden.orderAttack === "Menor a mayor") {
    pokemones.sort((a, b) => {
      if (b.attack < a.attack) return 1;
      if (b.attack > a.attack) return -1;
      return 0;
    });
  }

  if (orden.orderAttack === "Mayor a menor") {
    pokemones.sort((a, b) => {
      if (b.attack > a.attack) return 1;
      if (b.attack < a.attack) return -1;
      return 0;
    });
  }

  return pokemones;
}
