import {Box, Typography} from "@mui/material";

export type HeroCardProps = {
  title: string;
  image: string;
}

function HeroCard (props: HeroCardProps) {
  return (
    <Box sx={{
      position: "relative",
      height: "600px",
    }}>
      <Box sx={{
        height: "100%",
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 100%)",
          zIndex: 1,
        }
      }}>
        <img src={props.image} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
      </Box>
      <Box sx={{position: "absolute", top: "300px", left: "80%", transform: "translate(-50%, -50%)", color: "white", zIndex: 2}}>
        <Typography variant={"h2"}>{props.title}</Typography>
      </Box>
    </Box>
  );
}

export default HeroCard;