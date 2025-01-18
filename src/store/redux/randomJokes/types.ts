export interface JOKE {
  id: string
  joke: string
}

export interface RandomJokesSliceState {
  data: JOKE[]
  error: any
  status: "default" | "loading" | "success" | "error"
}
