import React from 'react';
import { Box } from '@mui/material';
import Subtitle from '../Subtitle';
import Subtext from '../Subtext';
import Content from '../../data/Content';
import SkillCard from './SkillCard';

const TechnicalSkill = () => {
  return (
    <Box>
      <Box>
        <Subtitle>Technical Skills</Subtitle>
        <Subtext>{Content.techSkillIntro}</Subtext>
      </Box>
      <Box className="flex gap-5 flex-wrap">
        {Content.skills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </Box>
    </Box>
  );
};

export default TechnicalSkill;
