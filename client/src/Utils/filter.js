export default function filter(filtros, pokemones) {

  console.log(pokemones)

  let pokemonesFiltrados = [];

  for (let x = 0; x < pokemones.length; x++) {
    pokemones[x].Types.map((e) => {
      if (e === filtros.types) {
        pokemonesFiltrados.push(pokemones[x]);
      }
    });
  }

  if (!filtros.types) {
    return pokemones;
  }

  return pokemonesFiltrados;
}
