document.querySelector('#submit-character').addEventListener('click', getCharacter);

async function getCharacter(e) {
  e.preventDefault();

  const name = document.querySelector('#character').value
  const apikey = '1f725674203063fd9b470131cdffe30f'

  const data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=gambit&apikey=1f725674203063fd9b470131cdffe30f`)
  console.log(data)


}
