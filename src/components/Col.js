import { Row } from "./Row"

export const Col = (props) => {
    const {styles, children,center,grow,growY,growX, middle, remainingProps}= props;
    let rubber= {
        height:'fit-content',
        display: 'flex',
        flexDirection: 'column',
        ...styles, 
    };

    if(!!center){
        rubber = {...rubber, alignItems: 'center'}
    }
    if(!!middle){
        rubber = {...rubber, alignSelf: 'center'}
    }
    if(!!grow){    
        rubber = {...rubber, flexGrow: 1,height:'auto'}    
        return (<div style={rubber} {...remainingProps}>{children}</div>)
    }
    if(!!growY ){
        rubber = {...rubber, flexGrow: 1,height:'auto',width:'fit-content'}
        return <Row><div style={rubber} {...remainingProps}>{children}</div></Row>
    }
    if(!!growX){
        rubber = {...rubber, flexGrow: 1}
    }
    return (
        <div style={rubber} {...remainingProps}>{children}</div>
    )
}