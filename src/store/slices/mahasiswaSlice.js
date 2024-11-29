import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Impor axios

// mengambil database api dari file 7-express-ODM-Mongoose

const initialState = {
  mahasiswas: [],
  mahasiswa: {},
};

const mahasiswaSlice = createSlice({
  name: "mahasiswa",
  initialState: initialState,
  reducers: {
    setMahasiswa: (state, actions) => {
      state.mahasiswas = actions.payload;
    },
    setMahasiswa2: (state, actions) => {
      state.mahasiswa = actions.payload;
    },
  },
});

export const { setMahasiswa, setMahasiswa2 } = mahasiswaSlice.actions;

export function fecthMahasiswasAsync() {
  return (dispatch) => {
    axios
      .get("http://localhost:3000")
      .then((res) => res.data)
      .then((data) => {
        dispatch(setMahasiswa(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function fecthMahasiswaAsync(id) {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/" + id)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setMahasiswa2(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function createMahasiswaAsync(nama, email, nim) {
  return async (dispatch) => {
    const _id = Date.now().toString();
    if (nama.trim() && email.trim()) {
      try {
        const response = await axios.post("http://localhost:3000", {
          nama,
          email,
          nim,
        });
        dispatch(fecthMahasiswasAsync()); // Memperbarui daftar mahasiswa setelah penambahan
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }
  };
}

export function updateMahasiswaAsync(id, nama, email, nim) {
  return async (dispatch) => {
    if (nama.trim() && email.trim()) {
      try {
        const response = await axios.put(`http://localhost:3000/${id}`, {
          nama: nama,
          email: email,
          nim: nim,
        });
        dispatch(fecthMahasiswasAsync());
      } catch (error) {
        console.error("Error updating item:", error);
      }
    }
  };
}

export function deletMahasiswaAsync(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      dispatch(fecthMahasiswasAsync());
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
}

export default mahasiswaSlice.reducer;
