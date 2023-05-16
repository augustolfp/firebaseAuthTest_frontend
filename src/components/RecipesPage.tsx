import { useEffect, useState } from "react";
import { api } from "../config/axios";

export default function RecipesPage() {
    type Recipe = {
        titulo: string;
        receita: string;
    };
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Recipe[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get("/recipes");
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <div>This is the secret recipes page!</div>
            {loading && <div>Getting recipes from the API...</div>}
            {!loading && (
                <div>
                    <h2>Found some recipes:</h2>
                    {data.map((recipe, index) => (
                        <div key={index}>
                            <h3>Title: {recipe.titulo}</h3>
                            <h3>Recipe: {recipe.receita}</h3>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
