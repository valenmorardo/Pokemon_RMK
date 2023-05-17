export default function filter(filtros, pokemones) {

  

  let pokemonesFiltrados = [];

  for (let x = 0; x < pokemones.pokemones.length; x++) {
    pokemones.pokemones[x].Types.map((e) => {
      if (e === filtros.types) {
        pokemonesFiltrados.push(pokemones.pokemones[x]);
      }
    });
  }

  if (!filtros.types) {
    return pokemones.pokemones;
  }

  return pokemonesFiltrados;
}
