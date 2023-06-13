import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from '@mui/material/Link';

interface LearnMoreProps {
  href: string;
}

const LearnMore = ({ href }: LearnMoreProps) => {
  const handler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    window.open(href);
  };

  return (
    <Link
      onClick={handler}
      href={href}
      underline="none"
      className="group flex items-center"
    >
      <Box>
        <Typography>Learn more</Typography>
      </Box>
      <KeyboardArrowRightIcon
        className="group-hover:opacity-100 transition ease-in-out group-hover:translate-x-1"
        fontSize="medium"
      />
    </Link>
  );
};

export default LearnMore;
