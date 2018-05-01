const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
 [...kittens, "name"]
}