import { data } from '../../data';

interface ProductState {
    data: any[]
}

const initialState: ProductState = {
  data: [...data],
};



type ProductActionType = {
  type: string;
  payload: any;
};


export const productReducer = (state = initialState, action: ProductActionType): ProductState => {
    switch(action.type){
        default:
            return state
    }
};
