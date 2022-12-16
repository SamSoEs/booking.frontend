import { ActionCreators } from "../redux/bookingReducer";
// import * as axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: 'https://localhost:5001/notes',
// })
export const GetFilterAppointments = (dispatch, date) => {
    
    dispatch(ActionCreators.getFilteredAppointments(date));
    debugger
    // try {
    //     const startDate = new Date();
    //     const endDate = new Date();
    //     startDate.setHours(9, 0, 0);
    //     endDate.setHours(17, 0, 0);
    //     const response = [
    //         {guestId: 2, staffId: 2, serviceId: 2, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 2},
    //         {guestId: 1, staffId: 1, serviceId: 1, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 1},
    //         {guestId: 3, staffId: 3, serviceId: 3, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 3},
    //         {guestId: 4, staffId: 4, serviceId: 4, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 4},
    //     ]
    //     dispatch(ActionCreators.getAppointments(response));
    // } catch(err) {
    //     console.log(err.message);
    // }
}
export const GetAppointments = async (dispatch) => {
    try {
        const startDate = new Date();
        const endDate = new Date();
        startDate.setHours(9, 0, 0);
        endDate.setHours(17, 0, 0);
        const response = [
            {guestId: 2, staffId: 2, serviceId: 2, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 2},
            {guestId: 1, staffId: 1, serviceId: 1, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 1},
            {guestId: 3, staffId: 3, serviceId: 3, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 3},
            {guestId: 4, staffId: 4, serviceId: 4, startDate: startDate.toISOString(), endDate: endDate.toISOString(), id: 4},
        ]
        dispatch(ActionCreators.getAppointments(response));
    } catch(err) {
        console.log(err.message);
    }
}

export const DeleteAppointment = async (dispatch, appointment) => {
    try {
        // api call
        // await axiosInstance.delete(`/${note.id}`);
        dispatch(ActionCreators.deleteAppointment(appointment));
    } catch {
        console.log('Error!');
    }
}

export const NewAppointment = async (dispatch, appointment) => {
    try {
        // api call
        // const { data } = await axiosInstance.post('', note)
        dispatch(ActionCreators.newAppointment(appointment));
    } catch {
        console.log('Error!');
    }
}

export const EditAppointment = async (dispatch, appointment) => {
    try {
        // api call
        // await axiosInstance.put('', note);
        dispatch(ActionCreators.editAppointment(appointment));
    } catch {
        console.log('Error!');
    }
}
