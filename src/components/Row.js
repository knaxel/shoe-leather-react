import { Col } from "./Col"
import { Div } from "./Div";
export const Header = (props) => {
    return <Row {...props} tag={'header'} ></Row>
}
export const Row = (props) => {
    const {
        tag = 'div',
        style,
        middle,
        center,
        grow,
        growX,
        growY,
        spread,
        top,
        bottom,
        right,
        left,
        children,
        ...remainingProps
    } = props;

    let rubber= {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content',
        ...style, 
    }
    
    if(!!top){
        rubber = {...rubber, justifyContent: 'end'}
    }
    if(!!bottom){
        rubber = {...rubber, justifyContent: 'end'}
    } 
    if(!!right){
        rubber = {...rubber, justifyContent: 'end'}
    }
    if(!!left){
        rubber = {...rubber, justifyContent: 'start'}
    }
    if(!!spread){
        rubber = {...rubber, justifyContent: 'space-between'}
    }
    if(!!center){
        rubber = {...rubber, justifyContent: 'center'}
    }    
    if(!!middle){
        rubber = {...rubber, alignItems: 'center'}
    }
    if(!!grow){
        rubber = {...rubber, flexGrow: 1, width:'unset'}
        return (<Col grow><Div tag={tag} style={rubber} {...remainingProps} >{children}</Div></Col>)
    }
    if(!!growX){
        rubber = {...rubber, flexGrow: 1, width:'unset'}
        return (<Col><Div tag={tag} style={rubber} {...remainingProps}>{children}</Div></Col>)
    }
    if(!!growY){
        rubber = {...rubber, flexGrow: 1}
    }
    return (
        <Div tag={tag} style={rubber} {...remainingProps}>{children}</Div>
    )
}