import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import LearnMore from './LearnMore';
import { ProjectDetails } from '../../data/Content';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import MyCard from '../card/MyCard';
import Params from '../../data/Params';

interface ProjectCardProps {
  details: ProjectDetails;
}

const ProjectCard = ({ details }: ProjectCardProps) => {
  const queryImage = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const imageData = queryImage.allFile.edges.find(
    (el: any) => el.node.relativePath === 'proj/' + details.img[0]
  ).node.childImageSharp.fluid;

  return (
    <MyCard className="flex flex-col">
      <CardMedia
        sx={{
          height: 240,
        }}
      >
        <Img className="h-full" fluid={imageData} alt={details.name} />
      </CardMedia>
      <CardContent className="grow flex flex-col">
        <Box>
          <Typography variant="h6" className="" sx={{ fontWeight: 500 }}>
            {details.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: 300, color: Params.subtextColor }}
          >
            {details.intro}
          </Typography>
        </Box>
        <Box className="grow mt-5" />
        {details.github && <LearnMore href={details.github} />}
      </CardContent>
    </MyCard>
  );
};

export default ProjectCard;
