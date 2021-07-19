import styled from 'styled-components'
const View = styled.div(props => ({
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    flexBasis: 'auto',
    alignItems: 'stretch',
    minHeight: 0,
    minWidth: 0,
    margin: props.margin ?? 0,
    padding: props.padding ?? 0,
    boxSizing: 'border-box',
    position: 'relative'
}))


export default View