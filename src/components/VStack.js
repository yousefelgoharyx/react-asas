import styled from 'styled-components'
import View from './View'

const VStack = styled(View)((props) => ({
  display: 'flex',
  gap: props.gap ?? null,
  justifyContent: props.justifyContent ?? null,
  alignItems: props.alignItems ?? null,
  flexDirection: 'column',
  padding: props.padding ?? null
}))

export default VStack
