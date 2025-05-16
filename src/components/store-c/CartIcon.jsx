import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FaCoffee } from 'react-icons/fa';

const CoffeeBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -4,
    top: 8,
    backgroundColor: '#92400e', // Amber 800
    color: 'white',
    fontWeight: 'bold',
    border: `1.5px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    minWidth: '20px',
    height: '20px',
    borderRadius: '10px',
    fontSize: '0.75rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}));

export default function CartIcon({ num = 0 }) {
  return (
    <IconButton 
      aria-label="coffee cart"
      sx={{
        '&:hover': {
          backgroundColor: 'rgba(146, 64, 14, 0.1)', // Amber 800 with opacity
        },
        transition: 'background-color 0.2s ease-in-out',
        padding: '8px'
      }}
    >
      <CoffeeBadge 
        badgeContent={num} 
        showZero={false}
        overlap="circular"
      >
        <div className='relative'>
          <ShoppingCartOutlinedIcon 
            sx={{ 
              color: '#fef3c7', // Amber 50
              fontSize: '28px',
              stroke: '#92400e', // Amber 800
              strokeWidth: '0.5px'
            }} 
          />
          <FaCoffee 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              color: '#92400e', // Amber 800
              fontSize: '12px',
              opacity: '0.8'
            }}
          />
        </div>
      </CoffeeBadge>
    </IconButton>
  );
}