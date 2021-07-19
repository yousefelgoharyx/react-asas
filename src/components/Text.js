import styled from 'styled-components'

const Text = styled.div((props) => ({
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'inline',
    fontSize: props.size ?? null,
    margin: 0,
    padding: 0,
    whiteSpace: props.singleLine ? 'pre' : 'pre-wrap',
    wordWrap: 'break-word',
    color: props.color ?? '#000',
    textOverflow: 'ellipsis'
}))

export default Text
