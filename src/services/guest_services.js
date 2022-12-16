import { ActionCreators } from "../redux/bookingReducer";
import  axios from 'axios';



const urlGetGuests = 'https://localhost:44321/bookings/GetGuests';
const urlGetGuest = 'https://localhost:44321/bookings/GetGuest';
const urlCreateGuest = 'https://localhost:44321/bookings/CreateGuest';

export const GetGuests = async (dispatch) => {
    try {
        const {data} = await axios.get(urlGetGuests);
        dispatch(ActionCreators.getGuests(data));
    } catch(err) {
        console.log(err.message);
    }
}

export const NewGuest = async (dispatch, guest) => {
    try {
        const {data} = await axios.post(urlCreateGuest, guest);
        dispatch(ActionCreators.newGuest(guest));
    } catch(err) {
        console.log(err.message);
    }
}

