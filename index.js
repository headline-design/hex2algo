import algosdk from 'algosdk'

const hexb = "A2251212BE1FEFFC25DA357F144A0DEE77414F3E586700DEDCFE8FE5D8F5A2F0"

function hexToBytes(hex = []) {
  let bytes = []

  for (let c = 0; c < hex.length; c += 2){
  bytes.push(parseInt(hex.substr(c, 2), 16))}
  return bytes;
}

let addressBytes = hexToBytes(hexb)

console.log(addressBytes)

console.log(algosdk.encodeAddress(addressBytes))