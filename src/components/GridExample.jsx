import { Box, Grid } from '@mui/material';

export const GridExample = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: 'primary.main', padding: 2, textAlign: 'center', borderRadius: 2 }}>Item 1</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: 'secondary.main', padding: 2, textAlign: 'center', borderRadius: 2 }}>Item 2</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ bgcolor: 'primary.main', padding: 2, textAlign: 'center', borderRadius: 2 }}>Item 3</Box>
            </Grid>
        </Grid>
    );
};
