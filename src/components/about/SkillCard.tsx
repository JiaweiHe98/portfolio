import React from 'react';
import { SkillDetails } from '../../data/Content';
import { Box, Card, Typography } from '@mui/material';
import Params from '../../data/Params';
import MyCard from '../card/MyCard';

interface SkillCardProps {
  skill: SkillDetails;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <MyCard className="flex h-12 items-center p-4">
      <Box>
        <Typography variant="h6" className="font-[400]">
          {skill.name}
        </Typography>
      </Box>
      {skill.level && (
        <Box className="ml-2">
          <Typography
            className="font-[500]"
            sx={{ color: Params.seondaryBgColor }}
            variant="h6"
          >
            {skill.level}
          </Typography>
        </Box>
      )}
    </MyCard>
  );
};

export default SkillCard;
