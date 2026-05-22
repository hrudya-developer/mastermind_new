import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  selectedCourse: null, // ✅ FIXED
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});

export const { setCourses, setLoading, setSelectedCourse } =
  courseSlice.actions;

export default courseSlice.reducer;