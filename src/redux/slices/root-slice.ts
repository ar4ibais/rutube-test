import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Question = {
	questionID: string;
	responseID: number;
};

type InitialState = {
	firstQuestion: number;
	questions: Question[];
};

const initialState: InitialState = {
	firstQuestion: -1,
	questions: [],
};

const RootSlice = createSlice({
	name: "root",
	initialState,
	reducers: {
		answerToFirstQuestion: (state, action: PayloadAction<number>) => {
			state.firstQuestion = action.payload;
		},
		answerToQuestion: (state, action: PayloadAction<Question>) => {
			const existingQuestion = state.questions.find(
				(question) => question.questionID === action.payload.questionID
			);

			if (existingQuestion) {
				existingQuestion.responseID = action.payload.responseID;
			} else {
				state.questions.push(action.payload);
			}

			state.questions.sort((a, b) =>
				a.questionID.localeCompare(b.questionID)
			);
		},
	},
});

export default RootSlice.reducer;
export const { answerToFirstQuestion, answerToQuestion } = RootSlice.actions;
