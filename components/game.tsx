
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Avatar, ButtonBase, ButtonGroup, ButtonProps, Card, CardActions, CardMedia, Divider, IconButton } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const IconButtonWithBackground = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.text.primary,
}));

const CharacterCard = () => {
    return (
        <Grid xs={1}>
            <Card sx={{
                borderRadius: '15px',
            }}>
                <CardMedia
                    component="img"
                    image="https://webstatic-sea.hoyoverse.com/hk4e/e20221205drawcard/picture/dec5ba575fc5720ec15b8964a826f2b5.png"
                    alt="Character"
                />
            </Card>
        </Grid>
    )
}

const TestCard = () => {
    return (
        <Grid xs={1}>
            <Card sx={{
                borderRadius: '15px',
            }}>
                <CardMedia
                    component="img"
                    image="https://s2.loli.net/2022/12/14/sUyZMNecb6DIwt5.webp"
                    alt="Character"
                />
            </Card>
        </Grid>
    )
}

export default function Game() {
    return (
        <Grid container spacing={3} columns={9} height="720px" width="100%" style={{
            border: '1px solid black',
        }}>
            <Grid xs={1}>
                <Item style={{ height: '95%' }}>Left Bar</Item>
            </Grid>
            <Grid xs={7}>
                <Grid container spacing={2} columns={7} height="50%">
                    <Grid xs={0.4} />
                    <Grid xs={1.2} height="70%">
                        <Grid container spacing={3} columns={2} height="100px">
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                        </Grid>
                    </Grid>
                    <Grid xs={0.4} />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <Grid xs={0.4} />
                    <Grid xs={1.2} height="70%">
                        <Grid container spacing={3} columns={2} height="100px">
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                        </Grid>
                    </Grid>
                    <Grid xs={0.4} />
                </Grid>
                {/* Divider */}
                <Divider orientation="horizontal" flexItem />
                {/* Player Area 2 */}
                <Grid container spacing={2} columns={7} height="50%" sx={{
                    alignItems: 'flex-end',
                }}>
                    <Grid xs={0.4} />
                    <Grid xs={1.2} height="70%">
                        <Grid container spacing={3} columns={2} height="100px">
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                        </Grid>
                    </Grid>
                    <Grid xs={0.4} />
                    <CharacterCard />
                    <CharacterCard />
                    <CharacterCard />
                    <Grid xs={0.4} />
                    <Grid xs={1.2} height="70%">
                        <Grid container spacing={3} columns={2} height="100px">
                            <TestCard />
                            <TestCard />
                            <TestCard />
                            <TestCard />
                        </Grid>
                    </Grid>
                    <Grid xs={0.4} />
                </Grid>
            </Grid>
            <Grid xs={1}>
                <Item style={{ height: '95%' }}>Right Bar</Item>
            </Grid>
        </Grid>
    )
}
