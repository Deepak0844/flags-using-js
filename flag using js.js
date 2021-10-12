const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];

  for(key in countries){
//flag
const container = document.createElement("div");
container.setAttribute("class","flag")

//image
const image = document.createElement("div");
image.setAttribute("class","image")
var img=document.createElement("img");
img.src=countries[key].image

const flag=image.appendChild(img)
container.append(image)
document.body.append(container)

//details 
const details=document.createElement("div")
details.setAttribute("class","details")

const country=document.createElement("div")
const countryName=countries[key].country
country.append(countryName)
details.append(country)

const population = document.createElement("div")
const countryPopulation=countries[key].population
population.append("Population: "+countryPopulation)
details.append(population)

const region = document.createElement("div")
const regionName=countries[key].region
region.append("Region: "+regionName)
details.append(region)

const capital = document.createElement("div")
const capitalCity=countries[key].capital
capital.append("Capital: "+capitalCity)
details.append(capital)

container.append(details)
}


