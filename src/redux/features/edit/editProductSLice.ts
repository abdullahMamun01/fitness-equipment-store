import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface DialogState {
  isEdit: boolean;
  selectProductId: string | null;
}

const initialState: DialogState = {
  isEdit: false,
  selectProductId: null,
};

const editProductSlice = createSlice({
  name: 'editProduct',
  initialState,
  reducers: {
    onEditItem(state, action: PayloadAction<string>) {
      state.isEdit = true;
      state.selectProductId = action.payload;
    },
    closeEditItem(state) {
      state.isEdit = false;
      state.selectProductId = null;
    }
  },
});

export const { onEditItem, closeEditItem } = editProductSlice.actions;
export const selectEditItem = (state: RootState) => state.editProduct.selectProductId;
export const selectIsEditMode = (state: RootState) => state.editProduct.isEdit;

export default editProductSlice.reducer;
