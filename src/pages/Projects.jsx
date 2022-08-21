import React from 'react';
import { Container, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../projects/projects';

const Projects = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: '3rem', pb: '3rem', display: 'flex', flexWrap: 'wrap' }}>
        {projectData.map((project) => (
          <ProjectCard
            title={project.title}
            img={project.img}
            time={project.time}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
