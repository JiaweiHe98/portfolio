import { Box, Container, useMediaQuery } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Params from '../data/Params';

const elementStyle = 'uppercase lg:flex group relative px-0.5 sm:px-2';

const elementTextStyle = 'group-hover:text-white/50';

type LeftElementProps = {
  content: string;
  href: string;
};

const LeftElement = ({ content, href }: LeftElementProps) => {
  return (
    <Link className={elementStyle} href={href} underline="none">
      <Box className={elementTextStyle} sx={{ color: '#fff' }}>
        {content}
      </Box>
    </Link>
  );
};

const LeftElementData = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Education',
    href: '#education',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: Params.headerBgColor,
        position: 'sticky',
        top: 0,
        width: '100%',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Inter',
        zIndex: 100,
      }}
    >
      <Container
        maxWidth={Params.containerMaxWidth}
        sx={{
          height: 50,
        }}
      >
        <Box className="h-full text-sm sm:text-base flex justify-around sm:justify-end items-center">
          {LeftElementData.map((item, idx) => (
            <LeftElement key={idx} content={item.name} href={item.href} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
