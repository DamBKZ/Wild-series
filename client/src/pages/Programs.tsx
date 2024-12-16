import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data: Program[]) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <div>
      <h1>Liste des Séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <img src={program.poster} alt={program.title} width="200" />
            <p>{program.synopsis}</p>
            <p>
              <strong>Pays :</strong> {program.country}
            </p>
            <p>
              <strong>Année :</strong> {program.year}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
