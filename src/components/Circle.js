import { Col } from "./Col"

export const Circle = (props) => {
    const {style, middle,center,grow,growX, growY, spread, children, remainingProps} = props;
    let rubber= {
        display: 'flex', 
        flexDirection: 'row',
        width: 'fit-content',
        borderRadius:'100%',
        aspectRatio: 1,
        ...style, 
    }
    if(!!spread){
        rubber = {...rubber, spaceBetween: 'center'}
    }
    if(!!center){
        rubber = {...rubber, justifyContent: 'center'}
    }    
    if(!!middle){
        rubber = {...rubber, alignItems: 'center'}
    }
    if(!!grow){
        rubber = {...rubber, flexGrow: 1, width:'unset'}
        return (<Col grow><div style={rubber} {...remainingProps} >{children}</div></Col>)
    }
    if(!!growX){
        rubber = {...rubber, flexGrow: 1, width:'unset'}
        return (<Col><div style={rubber} {...remainingProps}>{children}</div></Col>)
    }
    if(!!growY){
        rubber = {...rubber, flexGrow: 1}
    }
    return (
        <div style={rubber} {...remainingProps}>{children}</div>
    )
}