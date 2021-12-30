import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

export const slice = createSlice({
    name: 'projects',
    initialState: {
        projectStore: [],
    },
    reducers: {
        // action => action Hanlder
        projectsAdded: (projects, action) => {
            projects.projectStore.push({
                id: ++lastId,
                name: action.payload.name
            });
        },
    },
});

export const { projectsAdded } = slice.actions
export default slice.reducer;