const initialState = {
    guests: [],
    staffs: [],
    services: [],
    appointments: [],
}


export const ActionTypes = {
    GET_GUESTS: 'GET_GUESTS',
    NEW_GUEST: 'NEW_GUEST',
    GET_STAFFS: 'GET_STAFFS',
    NEW_STAFF: 'NEW_STAFF',
    GET_SERVICES: 'GET_SERVICES',
    NEW_SERVICE: 'NEW_SERVICE',
    GET_APPOINTMENTS: 'GET_APPOINTMENTS',
    NEW_APPOINTMENT: 'NEW_APPOINTMENT',
    DELETE_APPOINTMENTS: 'DELETE_APPOINTMENTS',
    EDIT_APPOINTMENT: 'EDIT_APPOINTMENT',
}

export const ActionCreators = {
    getGuests: payload => ({ type: ActionTypes.GET_GUESTS, payload }),
    newGuest: payload => ({ type: ActionTypes.NEW_GUEST, payload }),
    getStaffs: payload => ({ type: ActionTypes.GET_STAFFS, payload }),
    newStaff: payload => ({ type: ActionTypes.NEW_STAFF, payload }),
    getServices: payload => ({ type: ActionTypes.GET_SERVICES, payload }),
    newService: payload => ({ type: ActionTypes.NEW_SERVICE, payload }),
    getAppointments: payload => ({ type: ActionTypes.GET_APPOINTMENTS, payload }),
    newAppointment: payload => ({ type: ActionTypes.NEW_APPOINTMENT, payload }),
    deleteAppointment: payload => ({ type: ActionTypes.DELETE_APPOINTMENT, payload }),
    editAppointment: payload => ({ type: ActionTypes.EDIT_APPOINTMENT, payload }),


}

export default function BookingReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_GUESTS:
            return { ...state, guests: [...action.payload] };
        case ActionTypes.NEW_GUEST:
            return { ...state, guests: [...state.guests, action.payload] }
        case ActionTypes.GET_STAFFS:
            return { ...state, staffs: [...action.payload] };
        case ActionTypes.NEW_STAFF:
            return { ...state, staffs: [...state.staffs, action.payload] }
        case ActionTypes.GET_SERVICES:
            return { ...state, services: [...action.payload] };
        case ActionTypes.NEW_SERVICE:
            return { ...state, services: [...state.services, action.payload] }
        case ActionTypes.GET_APPOINTMENTS:
            return { ...state, appointments: [...action.payload]};
        case ActionTypes.NEW_APPOINTMENT:
            return { ...state, appointments: [...state.appointments, action.payload] }
        case ActionTypes.DELETE_APPOINTMENT:
            return {
                ...state, appointments: [...state.appointments.filter(appointment =>
                    appointment.id !== action.payload.id)]
            };
        case ActionTypes.EDIT_APPOINTMENT:
            return {
                ...state, appointments: [...state.appointments.map(appointment => {
                    if (appointment.id === action.payload.id) {
                        appointment.guestId = action.payload.guestId;
                        appointment.staffId = action.payload.staffId;
                        appointment.serviceId = action.payload.serviceId;
                        appointment.startDate = action.payload.startDate;
                        appointment.endDate = action.payload.endtDate;
                    }
                    return appointment
                })]
            }
        

        default:
            return state;
    }
} 