import { createAppSlice } from "../../createAppSlice"
import type { LikesStateSlice } from "./types"

const likesInitialState: LikesStateSlice = {
  like: 0,
  dislike: 0,
}

export const feedbackLikesSlice = createAppSlice({
  name: "FEEDBACK_LIKES",
  initialState: likesInitialState,
  reducers: create => ({
    addLike: create.reducer((state: LikesStateSlice) => {
      state.like = state.like + 1
    }),
    addDislike: create.reducer((state: LikesStateSlice) => {
      state.dislike = state.dislike + 1
    }),
    resetLikes: create.reducer((state: LikesStateSlice) => {
      state.like = 0
      state.dislike = 0
    }),
  }),
  selectors: {
    like: (state: LikesStateSlice) => state.like,
    dislike: (state: LikesStateSlice) => state.dislike,
  },
})

export const feedbackLikesSliceActions = feedbackLikesSlice.actions
export const feedbackLikesSliceSelectors = feedbackLikesSlice.selectors
