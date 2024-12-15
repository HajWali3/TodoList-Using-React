import { useState } from "react";

export default function ludoBoard() {
    const[moves, setMoves] = useState({blue:0, yellow:0, green:0, red:0});
    const [ arr, setArr ]= useState(["No Moves"]);

    let update = () => {
        // console.log(`moves.blue = ${moves.blue}`);

        // setMoves( (prevMoves) => {
        //     return {...prevMoves, blue: prevMoves.blue + 1};
        // });

        // arr.push();
        setArr((prevArr) => {return [...prevArr, " blue moves"]});
        console.log(arr);
        
    }
    return ( 
    <>
    <p>Game begins..</p>
    <div className="board">
        <p>{arr}</p>
        <p>Blue moves = {moves.blue}</p>
        <button style={{backgroundColor: "blue"}} onClick={update}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{backgroundColor: "yellow"}} onClick={update}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button style={{backgroundColor: "green"}} onClick={update}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button style={{backgroundColor: "red"}} onClick={update}>+1</button>
        
    </div>
    </>
    );
}