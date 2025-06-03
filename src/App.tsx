import { useState, useEffect } from "react";

// Definindo o tipo para os dados da API
type Restaurant = {
  _id: string;
  name: string;
  __v: number;
};

function App() {
  // Estado para armazenar os restaurantes
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  // Estado para controlar o carregamento
  const [loading, setLoading] = useState<boolean>(true);
  // Estado para armazenar possíveis erros
  const [error, setError] = useState<string | null>(null);

  // Efeito para buscar os dados quando o componente montar
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        if (!response.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ocorreu um erro desconhecido"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []); // O array vazio garante que o efeito roda apenas uma vez

  return (
    <div className="p-4">


      {loading && <p>Carregando restaurantes...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Restaurantes Disponíveis:
          </h2>
          <ul className="space-y-2">
            {restaurants.map((restaurant) => (
              <li key={restaurant._id} className="p-2 border rounded">
                {restaurant.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;