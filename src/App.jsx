import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListPacient from "./components/ListPacient";

function App() {

  const INITIAL = JSON.parse(localStorage.getItem('pacient')) ?? [];
  const [pacient, setPacient] = useState(INITIAL);
  const [pacients, setPacients] = useState({});
  
  useEffect(() => {
    localStorage.setItem('pacient', JSON.stringify(pacient));
  },[pacient])

  const deletePacient = id => {
    const pacientActualizados = pacient.filter( pacients => pacients.id !== id);
    setPacient(pacientActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          pacient = {pacient} 
          setPacient = {setPacient}
          pacients={pacients}
          setPacients={setPacients}
        />
        <ListPacient 
          pacient = {pacient}
          setPacients = {setPacients}
          deletePacient = {deletePacient}
        />
      </div>

    </div>
  )
}

export default App;
