import React from 'react';
import ProjectCard from './ProjectCard';
import { Box } from '@mui/material';
import Subtitle from '../Subtitle';
import Content from '../../data/Content';

const Projects = () => {
  return (
    <Box>
      <Subtitle>Projects</Subtitle>
      <Box className="grid auto-rows-fr grid-col-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {Content.projects.map((details, idx) => (
          <ProjectCard key={idx} details={details} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
