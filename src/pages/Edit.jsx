
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fecthMahasiswaAsync, updateMahasiswaAsync} from "../store/slices/mahasiswaSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export default function Edit() {

  const mahasiswa = useSelector((state)=>state.mahasiswaReducer.mahasiswa);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nim, setNim] = useState('');


  useEffect(() => {
    dispatch(fecthMahasiswaAsync(id)); // Pastikan menggunakan nama fungsi yang benar
  }, [dispatch, id]);

  useEffect(()=>{
    if(mahasiswa){
      setNama(mahasiswa.nama);
      setEmail(mahasiswa.email);
      setNim(mahasiswa.nim);
    }
  },[mahasiswa]);

const handleUpdate = () => {
   dispatch(updateMahasiswaAsync(id, nama, email, nim));
   navigate('/');
}

    return (
      <>
        <div>
          <h2>Edit</h2>

          <form onSubmit={handleUpdate} >
          <div>
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              id='nama'
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
            />
          </div>
          <div>
            <label htmlFor="nim">NIM</label>
            <input
              type="text"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              id='nim'
            />
          </div>
          <br />
          <button type="submit">Update</button>
        </form>


        </div>
        
      </>
    );
  }