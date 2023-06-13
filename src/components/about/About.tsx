import { Box, Button, Typography, Avatar } from '@mui/material';
import React from 'react';
import content from '../../data/Content';
import Params from '../../data/Params';
import Typewriter from 'typewriter-effect';
import avatar from '../../assets/jiaweihe.jpeg';
import bg from '../../assets/bg.png';
import { Link } from 'gatsby';

const About = () => {
  return (
    <>
      <Box className="lg:grid grid-cols-2 gap-x-10">
        <Box className="flex flex-col justify-center text-center lg:text-left lg:pl-10">
          <Box>
            <Typography variant="h1" sx={{ fontWeight: 500 }}>
              {content.name}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 400, color: Params.seondaryBgColor }}
            >
              software developer
            </Typography>
          </Box>
          <Box
            className="text-xl mt-1 mb-4 max-w-2xl mx-auto lg:mx-0"
            sx={{ color: Params.bioColor }}
          >
            <Typewriter
              options={{ loop: true, deleteSpeed: 200, delay: 70 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(content.bio[0])
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(300)
                  .typeString(content.bio[1])
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(300)
                  .typeString(content.bio[2])
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(300)
                  .typeString(content.bio[3])
                  .pauseFor(2000)
                  .deleteAll()
                  .pauseFor(300)
                  .start();
              }}
            />
          </Box>

          <Box>
            <Button
              variant="contained"
              onClick={() => {
                window.open('https://www.linkedin.com/in/jiaweihe98');
              }}
            >
              My Linkedin
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }}>
              <Link to="#contact">Contact Me</Link>
            </Button>
          </Box>
        </Box>
        <Box className="lg:flex lg:justify-center hidden">
          <Avatar
            alt="Jiawei He"
            src={avatar}
            sx={{
              width: 350,
              height: 350,
              boxShadow:
                'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default About;
