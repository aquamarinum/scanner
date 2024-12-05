import { RootState } from "../store";

export const searchSelector = (state: RootState) => state.filters.search;
