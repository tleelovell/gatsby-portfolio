import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/TannerPic.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>Hello!</BigTitle>
        <Subtitle>
          My name is Tanner Lovell. <br />
          I'm a software engineer and really like to make cool stuff.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Brown's Shoe Fit (Clinton, IA)"
            link="http://shoesclinton.com/"
            bg="black"
          >
            This is a promotional website I created for a long-running shoe store in Clinton, Iowa that wanted to update and modernize. 
            Hoping to re-build using modern technologies such as gatsby and react. 
          </ProjectCard>
          <ProjectCard
            title="DIY DSP"
            link="https://github.com/LovellyWeather/DIY-DSP"
            bg="black"
          >
            This is a repo for my under-grad research project where I built a digital guitar pedal and created various effects processing 
            algorithms to alter the analog signal. \m/ 
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            I'm currently employed as a Back-End Software Engineer at Banno. I
            spend most of my time creating custom forms and services for the
            Banno Platform using Scala.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I also side-gig as a freelance web developer.
          Need a website or app? <br />
           Hire me.
          <br />
          <br />
          If I'm not programming I'm either hanging out with my wife or taking too many pictures of my cats.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:tleelovell@gmail.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://twitter.com/tleelovell">Twitter</a> &{" "}
            <a href="https://www.instagram.com/pan_lovell/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Gatsby Developer Portfolio{" "}
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
