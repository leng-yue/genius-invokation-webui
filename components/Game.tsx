import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  ButtonBase,
  ButtonGroup,
  ButtonProps,
  Card,
  CardActions,
  CardMedia,
  Divider,
  IconButton,
} from "@mui/material";
import { width } from "@mui/system";
import backgroundImage from "../public/images/template-bg.jpeg";

const SkillButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  // On hover, the background color is slightly darkened.
  "&:hover": {
    backgroundColor: theme.palette.text.secondary,
  },
}));

const CharacterCard = () => {
  return (
    <Grid xs={1}>
      <Card
        sx={{
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          image="https://webstatic-sea.hoyoverse.com/hk4e/e20221205drawcard/picture/dec5ba575fc5720ec15b8964a826f2b5.png"
          alt="Character"
        />
      </Card>
    </Grid>
  );
};

const TestCard = () => {
  return (
    <Grid xs={1}>
      <Card
        sx={{
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          image="https://s2.loli.net/2022/12/14/sUyZMNecb6DIwt5.webp"
          alt="Character"
        />
      </Card>
    </Grid>
  );
};

export default function Game() {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + backgroundImage.src + ")",
        backgroundSize: "contain",
      }}
    >
      {/* Test */}
    </div>
  );

  return (
    <Paper
      sx={{
        height: "720px",
        width: "1280px",
      }}
    >
      <Grid container spacing={2} columns={7} padding={1}>
        <Grid xs={0.4} />
        <Grid xs={1.2}>
          <Grid container spacing={3} columns={2}>
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
        <Grid xs={1.2}>
          <Grid container spacing={3} columns={2}>
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
      <Grid container spacing={2} columns={7} padding={1}>
        <Grid xs={0.4} />
        <Grid xs={1.2}>
          <Grid container spacing={3} columns={2}>
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
        <Grid xs={1.2}>
          <Grid container spacing={3} columns={2}>
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
      <Grid container spacing={2} padding={2} justifyContent="center">
        <Grid>
          <SkillButton>
            <Avatar src="https://webstatic-sea.hoyoverse.com/hk4e/e20221205drawcard/picture/5d510bb74d2c14e2fe53edbdfc955ba4.png" />
          </SkillButton>
        </Grid>
        <Grid>
          <SkillButton>
            <Avatar src="https://webstatic-sea.hoyoverse.com/hk4e/e20221205drawcard/picture/80d61bdb70eef0d57ca877bb39dbb0d9.png" />
          </SkillButton>
        </Grid>
        <Grid>
          <SkillButton>
            <Avatar src="https://webstatic-sea.hoyoverse.com/hk4e/e20221205drawcard/picture/5d510bb74d2c14e2fe53edbdfc955ba4.png" />
          </SkillButton>
        </Grid>
        <Grid>
          <SkillButton>
            <Avatar src="https://webstatic-sea.hoyoverse.com/hk4e/e20221205drawcard/picture/fcda5c89f7d783e8bff69719c0d30692.png" />
          </SkillButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
