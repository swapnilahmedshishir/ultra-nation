import { useEffect, useState } from "react";
import "./App.css";
import Country from "./Component/Country/Country";
import Name from "./Component/Name/Name";

function App() {
  const [countries, setCountrus] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountrus(data);
        //console.log(data)
      });
  }, []);

  let [infoCountry, setInfoCountry] = useState([]);
  const AddCounty = (country) => {
    const NewCounty = [...infoCountry,country];
    setInfoCountry(NewCounty);
  };
   //const capitalNames = infoCountry.lenght;
  return (
    <div className="App">
      <h1> Total Country: {countries.length}</h1>
      <h4>Your Choose Country : {
        infoCountry.length
      }</h4>
      <Name infoCountry={infoCountry}></Name>
     <div className="country_flag">
     {countries.map((country) => (
        <Country
          key={country.ccn3}
          countey={country}
          addCounty={AddCounty}
        ></Country>
      ))}
     </div>
    </div>
  );
}

export default App;
