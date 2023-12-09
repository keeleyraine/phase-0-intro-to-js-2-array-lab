const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){cats.push("Ralph")
};
function destructivelyPrependCat(){cats.unshift("Bob")
};
function destructivelyRemoveLastCat(){cats.pop(-0)
};
function destructivelyRemoveFirstCat(){cats.shift(0)
};
function appendCat() {
    const sillycats = [...cats,"Broom"]
    return sillycats
};
function prependCat() {
    const dopeycats = ["Arnold",...cats]
    return dopeycats
};
function removeLastCat(){
    const dumbcats = cats.slice(0,-1)
    return dumbcats
};
function removeFirstCat(){
    const uglycats = cats.slice(-2)
    return uglycats
}