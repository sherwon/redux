import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe123",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  ],
  forUpdate: {
    isUpdate: false,
    user: {},
    index: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      state.userList.push(action.payload);
    },
    del: (state, action) => {
      state.userList.splice(action.payload, 1);
    },
    userInfo: (state, action) => {
      state.forUpdate = {
        isUpdate: true,
        user: state.userList[action.payload],
        index: action.payload,
      };
    },
    updateUser: (state, action) => {
      state.userList[Number(state.forUpdate.index)] = action.payload;
      alert(JSON.stringify(action.payload));
      state.forUpdate = {
        isUpdate: false,
        user: {},
        index: null,
      };
    },
  },
});

export const { add, del, userInfo, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.userList;
export const selectUpdateUser = (state) => state.user.forUpdate;

export default userSlice.reducer;
