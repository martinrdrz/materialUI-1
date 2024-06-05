import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ButtonExample } from './components/ButtonExample';
import { ContainerExample } from './components/ContainerExample';
import { TypographyExample } from './components/TypographyExample';
import { BoxExample } from './components/BoxExample';
import { GridExample } from './components/GridExample';
import { greenTheme } from './components/greenTheme';
import { BoxExampleUno } from './components/BoxExampleUno';
import { ButtonIcons } from './components/ButtonIcons';
import { CardManual } from './components/CardManual';

export const App = () => {
    return (
        <>
            <ThemeProvider theme={greenTheme}>
                <CssBaseline />
                <CardManual />
            </ThemeProvider>
        </>
    );
};
