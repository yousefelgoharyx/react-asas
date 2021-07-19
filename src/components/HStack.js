import styled from 'styled-components'
import View from './View'
const HStack = styled(View)((props) => ({
    display: 'flex',
    gap: props.gap ?? null,
    justifyContent: props.justifyContent ?? null,
    alignItems: props.alignItems ?? null,
    padding: props.padding ?? null,
    flexDirection: 'row'
}))

export default HStack
