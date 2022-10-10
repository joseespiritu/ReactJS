import { useSelector, useDispatch } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();

    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        // TODO: llegar al backend

        // todo bien
        if (calendarEvent._id) {
            // Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    };

    const startDeletingEvent = () => {
        // TODO: llegar al backend
        dispatch(onDeleteEvent());
    }

    return {
        // *Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,
        // *Metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    }
}