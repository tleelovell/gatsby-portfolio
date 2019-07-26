import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  width: 100%;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-outline-radius: 10px;
  &:hover {
    transform: translateY(-5px);
  }
`

const Title = styled.div`
  ${tw`opacity-75 text-white font-sans text-md`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Text = styled.div`
  ${tw` text-white text-3xl md:text-4xl xl:text-5xl tracking-wide pt-8`};
  font-family: sans-serif;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 0 0 1rem 0;
`

const ProjectCard = ({ title, link, children, bg }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
