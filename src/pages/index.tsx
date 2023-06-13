import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Wapper from '../components/Wapper';
import 'typeface-inter';
import './index.css';
import Params from '../data/Params';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import Section from '../components/Section';
import About from '../components/about/About';
import Education from '../components/education/Education';
import Contact from '../components/contact/Contact';
import Projects from '../components/projects/Projects';
import TechnicalSkill from '../components/about/TechnicalSkill';
import {
  Box,
  useScrollTrigger,
  Zoom,
  Fab,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import icon from '../assets/icon.jpg';

interface scrollTopProps {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: scrollTopProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: Params.highlightColor, // Replace with your desired primary color
    },
  },
});

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wapper>
        <Section id="about">
          <About />
        </Section>
        <Section id="education">
          <Education />
        </Section>
        <Section id="skills">
          <TechnicalSkill />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <ScrollTop>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Wapper>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <link rel="icon" href={icon} />
    <title>Jiawei He</title>
  </>
);
