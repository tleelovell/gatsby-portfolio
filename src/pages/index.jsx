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
  ${tw`text-white font-sans pt-12 lg:pt-0 lg:pl-12 text-xl lg:text-2xl xl:text-3xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-md md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
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
        <BigTitle>
          Howdy!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </BigTitle>
        <Subtitle>
          My name is Tanner Lovell. <br />
          I'm a software developer and designer.<br />
          Need a website? <a href="mailto:tleelovell@gmail.com">Hire me.</a>
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper class="content-center">
          <ProjectCard
            title="BROWN'S"
            link="http://shoesclinton.com/"
            bg="#22007C"
          >
            Website for Brown's Shoe Fit Co.
            <br />
            <br />
            Built With: HTML5, Sass, and Bootstrap
          </ProjectCard>
          <ProjectCard
            title="DIY DSP"
            link="https://github.com/LovellyWeather/DIY-DSP"
            bg="#22007C"
          >
            Under-grad research project.
            <br />
            <br />
            Built With: C, HTML5, CSS
          </ProjectCard>
          <ProjectCard
            title="BANNO PLATFORM"
            link="https://banno.com/digital-banking-suite/"
            bg="#22007C"
          >
            The primary product I work on at my full-time employer.
            <br />
            <br />
            Built With: Scala, Play, Node.js
          </ProjectCard>
          <ProjectCard
            title="A LOVELLY WEDDING"
            link="https://alovellywedding.github.io/ALovellyWedding/"
            bg="#22007C"
          >
            A Website I built for my wife and I's wedding.
            <br />
            <br />
            Built With: Bootstrap, CSS, JavaScript
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            <p>
              I'm currently employed as a Back-End Software Engineer at Jack Henry & Associates. 
            </p>
            <p>
            I develop features for our Custom CMS, Banno Platform, using
            Scala and Functional Programming practices.
            </p>
            <p>
            In my free time I like to play{" "} 
            <span role="img" aria-label="guitar">
            🎸
            </span> 
            and throw things at my cats.
            </p>
          </AboutSub>
        </AboutHero>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:tleelovell@gmail.com">Hi</a> or find me on other
            platforms: <a href="https://twitter.com/tleelovell">Twitter</a> &{" "}
            <a href="https://www.instagram.com/pan_lovell/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>&copy; Tanner Lovell's 2020 Developer Portfolio </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
