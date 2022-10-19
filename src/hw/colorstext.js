import React, {useState} from "react";


function SetColors(props){
    const btnOnClick=()=>{
        props.onClickAct(props.btnColor);
        props.onClickText(props.textColor);
    }
    return(
        <button style={{backgroundColor:props.btnColor, color:props.textColor, height:'30px', width:'70px'}} onClick={btnOnClick}>{props.text}</button>
    )
}
function Text(props){
    return(
        <div style={{backgroundColor:props.btnColor, color:props.textColor, width:'190px', padding:'10px', textAlign:'center'}}>
            <p>Don't worry if something doesn't work. If everything worked, you would be fired.</p>
        </div>
    )
}
function ColorText(){
    const [displayBtnColor, setDisplayBtnColor] = useState('white');
    const stateFuncC = (newBtnColor)=>{setDisplayBtnColor(newBtnColor)};
    const [displayTextColor, setDisplayTextColor] = useState('black');
    const stateFuncT = (newTextColor)=>{setDisplayTextColor(newTextColor)};
    return(
        <>
            <SetColors btnColor="red" textColor="green" text="Red" onClickAct={stateFuncC} onClickText={stateFuncT}></SetColors>
            <SetColors btnColor="green" textColor="red" text="Green" onClickAct={stateFuncC} onClickText={stateFuncT}></SetColors>
            <SetColors btnColor="yellow" textColor="blue" text="Yellow" onClickAct={stateFuncC} onClickText={stateFuncT}></SetColors>
            <Text btnColor={displayBtnColor} textColor={displayTextColor}></Text>

        </>
    )
}

export default ColorText;