import { useState, useEffect } from "react";
import EntityCard from "./components/EntityCard";
import Navibar from "./components/Navibar";



function App() {

  const [people, setPeople] = useState ([]);
  const [planets, setPlanets] = useState ([]);
  const [vehicles, setVehicles] = useState ([]);


  useEffect(() => {
    const getPeople = async () => {
        const res = await fetch("https://www.swapi.tech/api/people");
        const data = await res.json();
        console.log(data)
        setPeople(data.results)
        
      }
      getPeople();

    const getPlanets = async () => {
      const res = await fetch("https://www.swapi.tech/api/planets");
      const data = await res.json();
      console.log(data)
      setPlanets(data.results)
      
    }
    getPlanets();

    const getVehicles = async () => {
      const res = await fetch("https://www.swapi.tech/api/vehicles");
      const data = await res.json();
      console.log(data)
      setVehicles(data.results)
    }
    getVehicles();

  }, []);

    



  return (
    <>
    <Navibar />
      
      {
        people.map(({ name }) => {
          return (
          <EntityCard key={name} />
          )
        })
      }
      
    </>
  )
}


export default App