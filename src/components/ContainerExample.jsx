import { Container, Typography } from '@mui/material';

export const ContainerExample = () => {
    return (
        <Container maxWidth='md'>
            <Typography variant='h4' component='h1' gutterBottom>
                Contenido Centrado
            </Typography>
            <Typography variant='body1'>
                Este es un ejemplo de un contenedor que limita el ancho del contenido y lo centra en la página.
            </Typography>
        </Container>
    );
};
