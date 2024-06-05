import { Box, Container } from '@mui/material';

export const BoxExample = () => {
    return (
        <Container maxWidth={'md'}>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                Este es un Box con estilos aplicados usando la propiedad sx.
            </Box>
        </Container>
    );
};
