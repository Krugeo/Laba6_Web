import React, { useState, useEffect } from "react";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Помилка завантаження");
        return res.json();
      })
      .then((data) => {
        setPlanets(data.results);
        setTotal(data.count);
        setHasNext(data.next !== null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>

      <p>Всього планет: {total}</p>

      <ul>
        {planets.map((planet, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            <strong>{planet.name}</strong> — клімат: {planet.climate}, населення:{" "}
            {planet.population}, поверхня: {planet.terrain}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Назад
        </button>

        <span style={{ margin: "0 10px" }}>Сторінка: {page}</span>

        <button onClick={() => setPage(page + 1)} disabled={!hasNext}>
          Далі
        </button>
      </div>
    </div>
  );
}

export default Planets;