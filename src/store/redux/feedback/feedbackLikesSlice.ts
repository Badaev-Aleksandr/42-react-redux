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
    //способ очистки - вместо перезаписи свойств, нужно просто вернуть initialState
    resetLikes: create.reducer(() => likesInitialState),
  }),
  selectors: {
    feedbackData: (state: LikesStateSlice) => state,
  },
})

export const feedbackLikesSliceActions = feedbackLikesSlice.actions
export const feedbackLikesSliceSelectors = feedbackLikesSlice.selectors
