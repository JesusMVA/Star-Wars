import { useState } from "react";

export const UsePerson = () => {
  const [dataPerson, setDataPerson] = useState([]);

  const [Contador, setContador] = useState(1);

  const disminuir = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const aumentar = () => {
    if (Contador < 9) {
      setContador(Contador + 1);
    } else {
      setContador(9);{
        
      }
    }
  };

  const getAllPerson = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const data = await fetch(
        `https://swapi.dev/api/people/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataPerson(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllPerson,
    dataPerson,
    Contador,
    aumentar,
    disminuir,
  };
};

