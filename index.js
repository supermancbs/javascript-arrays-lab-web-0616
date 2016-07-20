const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name){
  result = [...kittens, name]
  return result
}

function prependKitten(name){
  result = [name, ...kittens]
  return result
}

function removeLastKitten() {
  result = kittens.slice(0, kittens.length-1)
  return result
}

function removeFirstKitten() {
  result = kittens.slice(1)
  return result 
}
