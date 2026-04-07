import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";

export default function LotteryTicket(){

    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15 ;

    let buyNewTicket = () => {
        setTicket(genTicket(3));
    }

    return (
    
        <div>
            <h1>Lottery Ticket</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyNewTicket}> Buy New Ticket </button>
            <h3>{isWinning === true ? "Congrats U Won" : ""}</h3>
        </div>
    );
}