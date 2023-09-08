import { ActionReturnData } from '../../types/action';
import { UserReducerStateData } from '../../types/reducer';
import { UserProps } from '../../types/user';
import { USER_LOGIN } from '../actions/user';

const initalState: UserReducerStateData = {
  user: null,
};

const userReducer = (
  state = initalState,
  action: ActionReturnData<UserProps>,
) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
