

export const Display = ({calcSays}: {calcSays: string}): JSX.Element =>  {
    return (
        <div className="calculatorDisplay">
            {calcSays}
        </div>
    )

}