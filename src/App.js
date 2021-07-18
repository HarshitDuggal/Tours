import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
const App = () => {
const [loading, setloading] = useState(true);
const [tours, settours] = useState([]);

const fetchTours = async () => {
  try {
    const response =await fetch(url);
    const tours = await response.json();
    setloading(false)
    settours(tours)
  } catch (error) {
    setloading(false)
    console.log(error);
  }
    }
useEffect(() => {
  fetchTours();
}, []);

if (loading) {
  return (
      <main>
        <Loading/>
      </main>
    );
  }

  return <>
    <main>
      <Tours/>
    </main> 
  </>
}

export default App
