export const Button = ({text,onClick, disabled}) => {
    if(!!disabled) return (
        <button style={{backgroundColor: "red"}} onClick={onClick} >{text}</button>
     )
    return (
       <button  style={{backgroundColor: "green"}} onClick={onClick} >{text}</button>
    )
}