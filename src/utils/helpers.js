export function trim(theString, sliceAmt){
    return theString.slice(0, sliceAmt)
}

export function computeShareAmt(principle, assetPrice) {
    let p = parseInt(principle)
    let a = parseInt(assetPrice)
    let res = (p/2) / a
    console.log(res)
    return res.toFixed(4)
}