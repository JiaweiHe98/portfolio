import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

export default function EducationTimeLine() {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          September 2021 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <img
            alt="penn"
            src="/penn.png"
            style={{
              margin: '1rem',
              width: '80px',
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            University of Pennsylvania
          </Typography>
          <Typography>Master of Science in Scientifc Computing</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          September 2019 - June 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <img
            alt="fit"
            src="/fit.png"
            style={{
              margin: '1rem',
              width: '80px',
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Florida Institute of Technology
          </Typography>
          <Typography>Bachelor of Science in Mechanical Engineering</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          September 2017 - June 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <img
            alt="wit"
            src="/wit.jpg"
            style={{
              margin: '1rem',
              width: '80px',
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Wuhan Institue of Technology
          </Typography>
          <Typography>
            Bachelor of Science in Energy and Power Engineering
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
