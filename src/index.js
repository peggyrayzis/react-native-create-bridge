const hey = () => console.log('hey')

function doAsyncThing () {
  return async function() {
    console.log('hey')
  }
}
