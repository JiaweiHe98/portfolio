import React from 'react';
import { Card } from '@mui/material';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const MyCard = ({ children, className }: CardProps) => {
  return (
    <Card
      sx={{
        borderRadius: '1rem',
        boxShadow:
          'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px',
      }}
      className={className}
    >
      {children}
    </Card>
  );
};

export default MyCard;
