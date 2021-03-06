class CountriesService{

  constructor(){
    this.url='http://localhost:8080/countries'
  }

  getAllCountries(){
    const conf={
      headers: new Headers({'Access-Control-Allow-Methods':"GET"})};
    return fetch(this.url,conf).then(res => res.json())
  }
}

export default CountriesService