import {
  ADD_HOMEWORK,
  UPDATE_HOMEWORK,
  REMOVE_HOMEWORK,
  CHANGE_STATUS_COMPLETE,
} from '../actionTypes/HomeworkActionTypes';
const initialState = {
  homeworkData: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOMEWORK:
      return {
        ...state,
        homeworkData: [...state.homeworkData, action.data],
      };
    case REMOVE_HOMEWORK:
      return {
        ...state,
        homeworkData: state.homeworkData.filter(
          (e, idx) => e.subjectName !== action.data,
        ),
      };
    case UPDATE_HOMEWORK:
       state.homeworkData.splice(action.index, 1, action.data)
      return state
    case CHANGE_STATUS_COMPLETE:
      const subName = action.data;
      const getIndex = () => {
        let id = '';
        state.homeworkData.filter((e, idx) => {
          if (e.subjectName === subName) {
            id = idx;
          }
        });
        return id;
      };
      let sab = state.homeworkData.filter(
        (e, idx) => e.subjectName === subName,
      )[0];
      sab.type = 'completed';
      state.homeworkData.splice(getIndex(), 1, sab);
      return state;
    default:
      return state;
  }
};

export {reducer};
