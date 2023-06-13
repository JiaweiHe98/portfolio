import { Box, Container } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Params from '../data/Params';

const elementStyle = 'uppercase lg:flex group relative first:ml-auto ml-1 px-2';

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
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          height: 64,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {LeftElementData.map((item, idx) => (
            <LeftElement key={idx} content={item.name} href={item.href} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
