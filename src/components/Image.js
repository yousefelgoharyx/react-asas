import styled from 'styled-components'
import React from 'react'
const StyledImageContainer = styled.div((props) => ({
  width: props.width,
  height: props.height,
  backgroundColor: '#444',
  borderRadius: props.circle
    ? props.height / 2
    : props.radius
    ? props.radius
    : null,
  overflow: 'hidden'
}))

const StyledImage = styled.img({
  width: '100%',
  height: '100%'
})

const Image = ({ src, width, height, alt, ...rest }) => {
  return (
    <StyledImageContainer {...rest} width={width} height={height}>
      <StyledImage src={src} alt={alt} />
    </StyledImageContainer>
  )
}

export default Image
