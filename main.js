const buyClay = () => {
    const emptyObject = {}
    return emptyObject
}

let potteryObject = buyClay()

const makePottery = (clay) => {
    potteryObject.shape = clay
    return potteryObject
}

potteryObject = makePottery("bowl")

const bisqueFire = (glazingBoolean) => {
    potteryObject.readyForGlazing = glazingBoolean
    return potteryObject
}

potteryObject = bisqueFire(true)

const glazePottery = (color) => {
    if (potteryObject.readyForGlazing) {
        potteryObject.glazing = color
        return potteryObject
    } else {
        return "Make sure you bisque fire the pottery before you glaze it."
    }
}

potteryObject = glazePottery("Midnight Blue")

const finalFiring = (temp) => {
    if (temp > 1200) {
        potteryObject.cracked = true
    } else { potteryObject.cracked = false}
    return potteryObject
}

potteryObject = finalFiring(1199)


console.log(potteryObject)