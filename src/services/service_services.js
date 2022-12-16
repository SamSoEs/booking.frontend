import { ActionCreators } from "../redux/bookingReducer";
import  axios from 'axios';



const urlGetServices = 'https://localhost:44321/bookings/GetServices';
const urlGetService = 'https://localhost:44321/bookings/GetService';
const urlCreateService = 'https://localhost:44321/bookings/CreateService';


export const GetServices = async (dispatch) => {
    try {
        const {data} = await axios.get(urlGetServices);
        dispatch(ActionCreators.getServices(data));
    } catch(err) {
        console.log(err.message);
    }
}

export const NewService = async (dispatch, service) => {
    try {
        const {data} = await axios.post(urlCreateService, service);
        dispatch(ActionCreators.newService(service));
    } catch(err) {
        console.log(err.message);
    }
}
