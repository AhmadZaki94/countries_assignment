import axios from "axios";
import { useEffect, useState } from "react"


export const Homepage = () => {

    const [data, setData] = useState([]);
    const [sort, setSort] = useState("asc");
    
    const getData = ({ sort }) => {
        axios({
            url: "http://localhost:8080/countries",
            method: 'get',
            params: {
                _sort: "population",
                _order: sort,
            }
        })
        .then((res) => {
            setData(res.data);
        });
    };

    const sortHandle = (e) => {
        setSort(e.target.value);
    }

    useEffect(() => {
        getData({ sort });
    },[sort]);







    return (
    
        <div>
            <div>
                <select value={sort} onChange={sortHandle}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <table>
                <thead>
                    <th>id</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Population</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {data[0] && data.map((e,i) => (
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.country_name}</td>
                            <td>{e.city}</td>
                            <td>{e.population}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
