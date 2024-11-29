import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fecthMahasiswasAsync, deletMahasiswaAsync} from "../store/slices/mahasiswaSlice";
import { Link } from "react-router-dom";


export default function Home() {

  const mahasiswas = useSelector((state)=>state.mahasiswaReducer.mahasiswas);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fecthMahasiswasAsync());
  },[dispatch]);

  const handleDelete = (id)=>{
    dispatch(deletMahasiswaAsync(id))
  }

    return (
      <>
        <div>
          <h2>Home</h2>
          <a href="/create"><button>Create</button></a>
          <ul>
            {mahasiswas.map((data)=>(
              <li key={data._id}>{data.nama} 
              <Link to={`/${data._id}`}>Detail</Link> |
              <Link to={`/edit/${data._id}`}>Edit</Link> | 
              <button onClick={()=>handleDelete(data._id)}>Delete</button> 
              </li>
            )
             )}
          </ul>
        </div>
        
      </>
    );
  }