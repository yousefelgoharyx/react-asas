import styled from 'styled-components'

const HStack = styled.div((props) => ({
  display: 'flex',
  gap: props.gap ?? null,
  justifyContent: props.justifyContent ?? null,
  alignItems: props.alignItems ?? null,
  padding: props.padding ?? null
}))

export default HStack
