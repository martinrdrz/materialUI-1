import { Alert, AlertTitle, Box, Button, Snackbar } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useState } from 'react';
import { useSnackbar, enqueueSnackbar } from 'notistack';

export const AlertMessage = () => {
    const [open, setOpen] = useState(false);
    //const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('Notificacion activada !!', { variant: 'success' });
    };
    return (
        <Box sx={{ display: 'grid', gap: '1rem' }}>
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                Esta es una alerta de Error
            </Alert>
            <Alert
                severity='warning'
                action={
                    <>
                        <Button color='inherit'>Update</Button>
                        <Button color='inherit'>delete</Button>
                    </>
                }
            >
                This is a warning alert — check it out!
            </Alert>
            <Alert severity='info'>This is an info alert — check it out!</Alert>
            <Alert
                severity='success'
                action={
                    <Button color='inherit' onClick={() => setOpen(true)}>
                        mostrar
                    </Button>
                }
            >
                This is a success alert — check it out!
            </Alert>
            <Alert severity='success' icon={<AcUnitIcon />}>
                This is a success alert — check it out!
            </Alert>
            <Button variant='contained' sx={{ width: '200px', ml: '1rem' }} onClick={handleClick}>
                Notificación
            </Button>
            <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
                <Alert severity='error'>
                    <AlertTitle>Error</AlertTitle>
                    Esta es una alerta de Error
                </Alert>
            </Snackbar>
        </Box>
    );
};
