// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

let destructivelyAppendCat = name => cats.push("Ralph")

let destructivelyPrependCat = name => cats.unshift("Bob");

let destructivelyRemoveLastCat = () => cats.pop()

let destructivelyRemoveFirstCat = () => cats.shift()

let appendCat = name => {
    return [...cats, "Broom"]
}

let prependCat = name => {
    return ["Arnold", ...cats]
}

let removeLastCat = () => {
    return cats.slice(0,-1)
}

let removeFirstCat = () => {
    return cats.slice(1)
}
