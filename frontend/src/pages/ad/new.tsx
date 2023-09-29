import axios from "axios";
import { on } from "events";
import { type } from "os";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type category = {
    id: number;
    name: string;
};

type inputs ={
    title: string;
    description: string;
    owner: string;
    price: number;
    imageUrl: string;
    location: string;
    category: number;
}

const NewAd = () => {
    const { register, handleSubmit } = useForm<inputs>();
    const[categories, setCategories] = useState<category[]>([]);
    useEffect(() => {
    const fetchCategories = async () => {
        try {
          const result = await axios.get<category[]>(
            "http://localhost:4000/category"
        );
        setCategories(result.data);  
        } catch (e) {
            console.log(e);
        }
    };
    fetchCategories();
    }, []);

    const onSubmit: SubmitHandler<inputs> = async (data) => {
        try{
            const response = await axios.post("http://localhost:4000/ad", data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
            <form
            onSubmit={handleSubmit(onSubmit)}
            >
            <label>
                Titre de l&apos;annonce: <br />
                <input className="text-field" {...register("title")} />
            </label> <br />
            <label>
                Description: <br />
                <input className="text-field" {...register("description")} />
            </label> <br />
            <label>
                Votre identifiant: <br />
                <input className="text-field" {...register("owner")} />
            </label> <br />
            <label>
                Prix: <br />
                <input className="text-field" {...register("price")} />
            </label> <br />
            <label>
                Image:<br />
                <input className="text-field" {...register("imageUrl")} />
            </label> <br />
            <label>
                Ville: <br />
                <input className="text-field" {...register("location")} />
            </label> <br />
            <label>
                Type: <br />
            <select className="text-field" {...register("category")}>
                {categories.map((el) => (
                    <option value={el.id} key={el.id}>
                        {el.name}
                    </option>
                ))}
            </select>
            </label>
            <button className="button">Submit</button>
            </form>
    );
}

export default NewAd;