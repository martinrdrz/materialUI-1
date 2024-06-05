import { Button, Container } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AndroidIcon from '@mui/icons-material/Android';

export const ButtonIcons = () => {
    return (
        <Container>
            <Button variant='contained' color='info' startIcon={<AirplanemodeActiveIcon />}>
                Botón personalizado
            </Button>

            <Button variant='contained' color='secondary' endIcon={<AndroidIcon />}>
                Botón 2
            </Button>
        </Container>
    );
};
