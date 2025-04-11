
export interface userReducersState {
    loading: boolean;
    loaded: boolean;
    users: ''
}

const initialState: userReducersState = {
    loaded: false,
    loading: false,
    users: ''
}