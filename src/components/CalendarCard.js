import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import { useNavigate } from "react-router-dom";

function CalendarCard() {
    const navigate = useNavigate();
    const dayHandle = () => {
        navigate("/final")
    }
    return (
        <>
            <Calendar className = "calendar" onClickDay ={dayHandle} />
            <h1 style={{color: "purple"}}> WHAT DAY ARE YOU FREE? </h1>
        </>
    )
}

export default CalendarCard;