import React from 'react';
import { Box } from '@mui/material';
import Subtitle from '../Subtitle';
import SchoolCard from './SchoolCard';
import Content from '../../data/Content';

const Education = () => {
  return (
    <Box>
      <Subtitle>Education</Subtitle>
      <Box className="grid grid-col-1 lg:grid-cols-2 gap-5">
        {Content.education.map((details, idx) => (
          <SchoolCard details={details} key={idx} idx={idx} />
        ))}
      </Box>
    </Box>
  );
};

export default Education;
