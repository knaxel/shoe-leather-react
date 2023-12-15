export const Div = (props) => {
    const {
        tag:Tag = 'div',
        padding: pad ,
        style,
        children,
        ...remainingProps
    } = props;

    const divStyle = {
        padding:pad ?? '0px'
    };
    const allStyles = {
        ...divStyle,
        ...style,
    };
    return <Tag style={allStyles} {...remainingProps}>{children}</Tag>
}