export interface FeedbackFormData {
id: number
name: string
email: string
}

export interface FeedbackFormSliceState {
data: FeedbackFormData[]
status: "default" | "loading" | "success" | "error"
error: any
}