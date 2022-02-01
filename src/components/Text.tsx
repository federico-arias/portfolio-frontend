import styled from "styled-components"

type TitleProps = {
  align?: "left" | "right"
}

export const Title = styled.h3<TitleProps>`
    font-weight: 800;
    text-align:${({ align }) => align ? align : "left"};
`

export const Text = styled.div`
  font-weight: 100;
` 

