import { Box, Button, Container, Paper, styled } from '@mui/material';

export const CardManual = () => {
    return (
        <Container>
            <Paper
                square={true}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    overflow: 'hidden',
                    mt: 5,
                    borderRadius: 2,
                }}
            >
                <Box
                    component='img'
                    sx={{
                        height: '100%',
                        width: 200,
                    }}
                    alt='Your Image'
                    src='https://via.placeholder.com/200' // URL de la imagen
                />
                <Box sx={{ flexGrow: 1 }}>
                    <h2>Product Name</h2>
                    <p>Product Description</p>
                    <Button variant='contained'>Add cart</Button>
                </Box>
                <Box component='p' sx={{ mr: 2 }}>
                    $19.99
                </Box>
            </Paper>
        </Container>
    );
};
