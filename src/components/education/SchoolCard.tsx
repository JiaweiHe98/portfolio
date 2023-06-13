import { Typography, Box, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import { EducationDetails } from '../../data/Content';
import Img from 'gatsby-image';
import MyCard from '../card/MyCard';

import { graphql, useStaticQuery } from 'gatsby';
import LogoBack from './LogoBack';
import Params from '../../data/Params';

interface SchoolCardProps {
  details: EducationDetails;
  idx: number;
}

const SchoolCard = ({ details, idx }: SchoolCardProps) => {
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
    (el: any) => el.node.relativePath === 'edu/' + details.img
  ).node.childImageSharp.fluid;

  const logoData = queryImage.allFile.edges.find(
    (el: any) => el.node.relativePath === 'edu/' + details.logo
  ).node.childImageSharp.fluid;

  const span = idx === 0 ? 'lg:col-span-2' : '';

  return (
    <MyCard className={span}>
      <CardMedia
        className="relative"
        sx={{
          height: idx === 0 ? 400 : 240,
        }}
      >
        <Img className="h-full" fluid={imageData} alt={details.name} />
        <Box
          className="absolute z-5"
          sx={{
            height: 60.27,
            width: 140,
            bottom: -26,
            left: 0,
          }}
        >
          <LogoBack />
        </Box>
        <Box
          className="absolute z-10 rounded-full overflow-hidden"
          sx={{
            height: 75,
            width: 75,
            left: 70 - 75 / 2,
            bottom: -45,
          }}
        >
          <Img fluid={logoData} alt={details.name} />
        </Box>
      </CardMedia>

      <CardContent className="flex flex-col px-9">
        <Box className="mt-10 mb-2">
          <Typography
            variant="body2"
            sx={{ fontWeight: 300, color: Params.subtextColor }}
          >
            {details.duration}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" className="" sx={{ fontWeight: 500 }}>
            {details.name}
          </Typography>
        </Box>
        <Box className="mb-1">
          <Typography variant="subtitle1" sx={{ fontWeight: 400 }}>
            {details.degree}
          </Typography>
        </Box>

        {/*<Box>
          <Typography
            variant="body2"
            sx={{ fontWeight: 400, color: '#1d1d1f' }}
          >
            {details.other}
          </Typography>
        </Box> */}
      </CardContent>
    </MyCard>
  );
};

export default SchoolCard;
