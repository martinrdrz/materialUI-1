import { Box, Container, Typography } from '@mui/material';

export const BoxExampleUno = () => {
    return (
        <Box
            sx={{
                border: 2,
                borderColor: 'primary.main',
                p: 4,
                bgcolor: 'secondary.main',
                color: 'white',
            }}
        >
            <Typography align='center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe quas laudantium, enim praesentium
                maiores beatae impedit vero dolorum dignissimos, assumenda ipsam? Similique, mollitia commodi ducimus
                aliquid voluptate molestias laborum!
            </Typography>
        </Box>
    );
};
