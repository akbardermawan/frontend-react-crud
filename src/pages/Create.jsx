import { useState } from "react";
import {createMahasiswaAsync} from "../store/slices/mahasiswaSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Create() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nim, setNim] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    dispatch(createMahasiswaAsync(nama, email, nim));
    navigate("/");
  };

    return (
      <>
        <div>
          <h2>Create</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="nama">Nama</label>
                    <input
                    type="text"
                    placeholder="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    id='nama'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    />
                </div>
                <div>
                    <label htmlFor="email">NIM</label>
                    <input
                    type="text"
                    placeholder="nim"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    id='nim'
                    />
                </div>
                <br />
            <button type="submit">Tambah</button>
            </form>
        </div>
        
      </>
    );
  }