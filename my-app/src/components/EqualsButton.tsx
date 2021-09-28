
export const EqualsButton = (props: {val: string,inputFromBtn: (incomingInput: string) => void}): JSX.Element => {

    return (
        <button className="equalsButton" onClick={()=>props.inputFromBtn(props.val)}> {props.val} </button>
    );
}