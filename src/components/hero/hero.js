import React from 'react';
import styled from "styled-components"
import { Link } from "gatsby"

const HeroContainer = styled.div`
background: #282e2a;
color: white;
position: relative;
overflow: hidden;
padding: 0rem 0 2rem 0;
@media (min-width: 768px) {
    height: calc(100vh - 6rem);
    }
`

const HeroInner = styled.div`
max-width: 960px;
    padding: 1.45rem 1.0875rem;
    margin: auto;
    height: 100%;
}
`

const HeroInnerInner = styled.div`
display: flex;
position: relative;
flex-direction: column;
height: 100%;
overflow: hidden;
}
`

const HeroHeading = styled.h1`
@media (min-width: 1200px) {
    
    font-size: 4rem;
    position: absolute;
    top: 50%;
    z-index: 10;
  }
  `

  const HeroText = styled.div`
  margin-bottom: 2rem;
@media (min-width: 1200px) {
    position: relative;
    height: 100%;
    
  }
  `

  const HeroImageContainer= styled.div`
@media (min-width: 1200px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 73.75%;
    flex: 1 1 auto;
  }
  `

  const HeroImageInnerContainer = styled.div`
  @media (min-width: 1200px) {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
  `

  const HeroImage = styled.img`
  @media (min-width: 1200px) {
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    max-width: 100%;
    border: 0;
    display: block;
  `

  const BlogLink = styled(Link)`
  text-decoration: none;
color: white;
  @media (min-width: 1200px) {
text-decoration: none;
color: white;
position: absolute;
left: 0;
bottom: 0;
text-transform: uppercase;
  }
  &:hover {
    border-bottom: 1px solid white;
  }
`

const Hero = () => {

    return (
        <HeroContainer>
            <HeroInner>
                <HeroInnerInner>
            <HeroText>
                <HeroHeading><div>Guiding you in</div><div>making custom rings</div></HeroHeading>
                <BlogLink href="">Explore our guides ↓</BlogLink>
            </HeroText>
            <HeroImageContainer>
                <HeroImageInnerContainer>
                <HeroImage alt="Diamond solitaire 18k" src={require('../../images/diamond-solitaire-18k.jpg')}/>
                </HeroImageInnerContainer>
            </HeroImageContainer>
            </HeroInnerInner>
            </HeroInner>
        </HeroContainer>
    );
};

export default Hero;