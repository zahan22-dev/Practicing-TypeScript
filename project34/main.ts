interface Shirt{
    size:string;
    message : string;
}
function makeShirt(size:string="large",message:string="I love typescript"):void{
console.log(`Creating a ${size} shirt with a message ${message}`)
}
makeShirt()
makeShirt("medium",)
makeShirt("small","Typescript is love.")