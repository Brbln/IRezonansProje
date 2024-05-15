import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async actions
export const fetchAdmins = createAsyncThunk('admin/fetchAdmins', async () => {
  const response = await axios.get('/api/admin');
  return response.data.data;
});

export const fetchAdminById = createAsyncThunk('admin/fetchAdminById', async (id) => {
  const response = await axios.get(`/api/admin/${id}`);
  return response.data.data;
});

export const createAdmin = createAsyncThunk('admin/createAdmin', async (adminData) => {
  const response = await axios.post('/api/admin/create', adminData);
  return response.data.data;
});

export const updateAdmin = createAsyncThunk('admin/updateAdmin', async (adminData) => {
  const response = await axios.put('/api/admin/update', adminData);
  return response.data.data;
});

export const deleteAdmin = createAsyncThunk('admin/deleteAdmin', async (id) => {
  await axios.delete('/api/admin/remove', { data: { id } });
  return id;
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admins: [],
    admin: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAdminById.fulfilled, (state, action) => {
        state.admin = action.payload;
      })
      .addCase(createAdmin.fulfilled, (state, action) => {
        state.admins.push(action.payload);
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        const index = state.admins.findIndex(admin => admin._id === action.payload._id);
        if (index !== -1) {
          state.admins[index] = action.payload;
        }
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        state.admins = state.admins.filter(admin => admin._id !== action.payload);
      });
  }
});

export default adminSlice.reducer;
