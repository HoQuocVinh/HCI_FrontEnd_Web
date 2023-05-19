const { createSlice } = require("@reduxjs/toolkit");

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShow: false,
  },
  reducers: {
    toggleModal: (state: any, { payload }: any) => ({
      ...state,
      isShow: payload,
    }),
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
