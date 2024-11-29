import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fecthMahasiswaAsync } from "../store/slices/mahasiswaSlice";
import { useParams } from "react-router-dom";



export default function Detail() {

  const mahasiswa = useSelector((state)=>state.mahasiswaReducer.mahasiswa);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fecthMahasiswaAsync(id)); // Pastikan menggunakan nama fungsi yang benar
  }, [dispatch, id]);

  console.log(mahasiswa);

    return (
      <>
        <div>
          <h2>Detail</h2>
         
          <ul>
            <li>{mahasiswa.nama}</li>
            <li>{mahasiswa.email}</li>
            <li>{mahasiswa.nim}</li>
          </ul>
        </div>
        
      </>
    );
  }