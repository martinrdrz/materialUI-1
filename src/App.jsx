import { ThemeProvider } from '@emotion/react';
import { Card, CssBaseline } from '@mui/material';
import { ButtonExample } from './components/ButtonExample';
import { ContainerExample } from './components/ContainerExample';
import { TypographyExample } from './components/TypographyExample';
import { BoxExample } from './components/BoxExample';
import { GridExample } from './components/GridExample';
import { greenTheme } from './components/greenTheme';
import { BoxExampleUno } from './components/BoxExampleUno';
import { ButtonIcons } from './components/ButtonIcons';
import { CardManual } from './components/CardManual';
import { CardComp } from './components/CardComp';
import { AlertMessage } from './components/AlertMessage';
import { SnackbarProvider } from 'notistack';
import { TextFieldExample } from './components/TextFieldExample';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={greenTheme}>
                <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
                    <CssBaseline />
                    <TextFieldExample />
                </SnackbarProvider>
            </ThemeProvider>
        </>
    );
};
