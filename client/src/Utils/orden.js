export default function orden(orden, pokemones) {

  // ORDEN ATAQUE
  if (orden.Attack === "Ascending") {
    pokemones.sort((a, b) => {
      if (b.Attack < a.Attack) return 1;
      if (b.Attack > a.Attack) return -1;
      return 0;
    });
  }
  if (orden.Attack === "Descending") {
    pokemones.sort((a, b) => {
      if (b.Attack > a.Attack) return 1;
      if (b.Attack < a.Attack) return -1;
      return 0;
    });
  }

  // ORDEN VIDA
  if (orden.Life === "Ascending") {
    pokemones.sort((a, b) => {
      if (b.Life < a.Life) return 1;
      if (b.Life > a.Life) return -1;
      return 0;
    });
  }
  if (orden.Life === "Descending") {
    pokemones.sort((a, b) => {
      if (b.Life > a.Life) return 1;
      if (b.Life < a.Life) return -1;
      return 0;
    });
  }

  // ORDEN DEFENSA
  if (orden.Defense === "Ascending") {
    pokemones.sort((a, b) => {
      if (b.Defense < a.Defense) return 1;
      if (b.Defense > a.Defense) return -1;
      return 0;
    });
  }
  if (orden.Defense === "Descending") {
    pokemones.sort((a, b) => {
      if (b.Defense > a.Defense) return 1;
      if (b.Defense < a.Defense) return -1;
      return 0;
    });
  }

  // ORDEN VELOCIDAD
  if (orden.Speed === "Ascending") {
    pokemones.sort((a, b) => {
      if (b.Speed < a.Speed) return 1;
      if (b.Speed > a.Speed) return -1;
      return 0;
    });
  }
  if (orden.Speed === "Descending") {
    pokemones.sort((a, b) => {
      if (b.Speed > a.Speed) return 1;
      if (b.Speed < a.Speed) return -1;
      return 0;
    });
  }

  return pokemones;
}
