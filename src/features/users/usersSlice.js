import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Doo" },
  { id: "1", name: "King" },
  { id: "2", name: "Chukwuma" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
