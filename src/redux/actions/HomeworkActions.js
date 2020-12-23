import {
  ADD_HOMEWORK,
  REMOVE_HOMEWORK,
  UPDATE_HOMEWORK,
  CHANGE_STATUS_COMPLETE
} from '../actionTypes/HomeworkActionTypes';

const atnAddHomework = (data) => {
  return {
    type: ADD_HOMEWORK,
    data,
  };
};

const atnRemoveHomework = (data) => {
  return {
    type: REMOVE_HOMEWORK,
    data,
  };
};

const atnChangeStatus = (subject) => {
  return {
    type: CHANGE_STATUS_COMPLETE,
    data: subject,
  };
};

const atnUpdateHomework = (data, index) => {
  return {
    type: UPDATE_HOMEWORK,
    data,
    index,
  };
};

export {atnAddHomework, atnRemoveHomework, atnUpdateHomework, atnChangeStatus};
