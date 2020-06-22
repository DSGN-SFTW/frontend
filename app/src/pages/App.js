import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";
import api from "../services/api";
function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post("/projects", {
      title: "Novo Projeto",
      owner: "Arthur Carneiro"
      
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="4code" />

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto!
      </button>
    </>
  );
}

export default App;
