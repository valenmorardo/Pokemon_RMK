export default function orden(orden, pokemones) {

  // ORDEN ATAQUE
  if (orden.Ataque === "Menor a mayor") {
    pokemones.sort((a, b) => {
      if (b.attack < a.attack) return 1;
      if (b.attack > a.attack) return -1;
      return 0;
    });
  }
  if (orden.Ataque === "Mayor a menor") {
    pokemones.sort((a, b) => {
      if (b.attack > a.attack) return 1;
      if (b.attack < a.attack) return -1;
      return 0;
    });
  }

  // ORDEN VIDA
  if (orden.Vida === "Menor a mayor") {
    pokemones.sort((a, b) => {
      if (b.hp < a.hp) return 1;
      if (b.hp > a.hp) return -1;
      return 0;
    });
  }
  if (orden.Vida === "Mayor a menor") {
    pokemones.sort((a, b) => {
      if (b.hp > a.hp) return 1;
      if (b.hp < a.hp) return -1;
      return 0;
    });
  }

  // ORDEN DEFENSA
  if (orden.Defensa === "Menor a mayor") {
    pokemones.sort((a, b) => {
      if (b.defense < a.defense) return 1;
      if (b.defense > a.defense) return -1;
      return 0;
    });
  }
  if (orden.Defensa === "Mayor a menor") {
    pokemones.sort((a, b) => {
      if (b.defense > a.defense) return 1;
      if (b.defense < a.defense) return -1;
      return 0;
    });
  }

  // ORDEN VELOCIDAD
  if (orden.Velocidad === "Menor a mayor") {
    pokemones.sort((a, b) => {
      if (b.speed < a.speed) return 1;
      if (b.speed > a.speed) return -1;
      return 0;
    });
  }
  if (orden.Velocidad === "Mayor a menor") {
    pokemones.sort((a, b) => {
      if (b.speed > a.speed) return 1;
      if (b.speed < a.speed) return -1;
      return 0;
    });
  }

  return pokemones;
}
