import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#1dc36d',
        },
        secondary: {
            main: '#e2b023',
        },
        error: {
            main: red.A400,
        },
    },
});
