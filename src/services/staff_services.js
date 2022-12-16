import { ActionCreators } from "../redux/bookingReducer";
import  axios from 'axios';



const urlGetStaffs = 'https://localhost:44321/bookings/GetStaffs';
const urlGetStaff = 'https://localhost:44321/bookings/GetStaff';
const urlCreateStaff = 'https://localhost:44321/bookings/CreateStaff';


export const GetStaffs = async (dispatch) => {
    try {
        const {data} = await axios.get(urlGetStaffs);
        dispatch(ActionCreators.getStaffs(data));
    } catch(err) {
        console.log(err.message);
    }
}

export const NewStaff = async (dispatch, staff) => {
    try {
        const {data} = await axios.post(urlCreateStaff, staff);
        dispatch(ActionCreators.newStaff(staff));
    } catch(err) {
        console.log(err.message);
    }
}