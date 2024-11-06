import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";
const initialState = {
  assignments: db.assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: module }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: moduleId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== moduleId
      );
    },
    updateAssignment: (state, { payload: module }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
