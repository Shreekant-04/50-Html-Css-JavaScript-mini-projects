document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        alert('Pokémon not found');
        return;
      }
  
      const data = await response.json();
      displayPokemon(data);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  });
  
  function displayPokemon(pokemon) {
    document.getElementById('pokemon-name').innerText = pokemon.name.toUpperCase();
    document.getElementById('pokemon-id').innerText = `#${pokemon.id}`;
    document.getElementById('weight').innerText = `Weight: ${pokemon.weight}`;
    document.getElementById('height').innerText = `Height: ${pokemon.height}`;
    document.getElementById('hp').innerText = `HP: ${pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}`;
    document.getElementById('attack').innerText = `Attack: ${pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}`;
    document.getElementById('defense').innerText = `Defense: ${pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}`;
    document.getElementById('special-attack').innerText = `Special Attack: ${pokemon.stats.find(stat => stat.stat.name === 'special-attack').base_stat}`;
    document.getElementById('special-defense').innerText = `Special Defense: ${pokemon.stats.find(stat => stat.stat.name === 'special-defense').base_stat}`;
    document.getElementById('speed').innerText = `Speed: ${pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat}`;
  
    const types = pokemon.types.map(typeInfo => typeInfo.type.name.toUpperCase()).join(', ');
    document.getElementById('types').innerText = `Types: ${types}`;
  
    const sprite = document.getElementById('sprite');
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = pokemon.name;
  
    document.getElementById('pokemon-info').style.display = 'block';
  }
  