/* A program that prints Shams if divisible by 6 and prints Tiidelab, if divisble by 8. It also prints
ShamsTiidelab when number is divisible by 6 and 8 */

for(i = 0; i <= 200; i++){
    console.log(i)
    if(i % 6 === 0){
        console.log('Shams')
    }else if(i % 8 === 0){
        console.log('Tiidelab')
    }else (i % 6 === 0 && i % 8 === 0)
        console.log('shamsTIIDELAB')
}
