import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Divider } from '../elements/Dividers'
import Content from '../elements/Content'
import { UpDown, UpDownWide } from '../styles/animations'
import SVG from '../components/SVG'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset} bg="#140152">
      <UpDown>
        <SVG icon="deathstar" hiddenMobile width={48} stroke={colors.white} left="60%" top="35%" />
        <SVG icon="fighter" width={8} stroke={colors.white} left="70%" top="30%"/>
      </UpDown>
      <UpDownWide>
      <SVG icon="falcon"  width={8} stroke={colors.white} left="80%" top="35%"/>
      </UpDownWide>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
)

export default Hero

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}
