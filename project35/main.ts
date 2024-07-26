interface City{
    city:string;
    country:string;
}
function describeCity(city:string="Karachi",country:string="Pakistan"):void{
    console.log(`${city} is in ${country}`)
}
describeCity()
describeCity("Lahore");
describeCity("Kabul","Afghanistan")

