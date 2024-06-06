import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';

export const CardComp = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        image='https://via.placeholder.com/400x200'
                        height='200'
                        alt='Card Image'
                    />
                    <CardContent>
                        <h2>Card Title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt optio
                            exercitationem, fugit enim saepe iusto magnam ipsam est cumque hic deleniti sequi neque
                            soluta quas! Accusamus voluptate alias optio.
                        </p>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button variant='contained'>Add</Button>
                    <Button>Remove</Button>
                </CardActions>
            </Card>
        </Box>
    );
};
