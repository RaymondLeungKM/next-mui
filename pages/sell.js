import { Box, Typography, Link } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

import { useRouter } from "next/router";

function Sell() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <Box>
      <Typography variant="h3">Sell Your Car</Typography>
      <Box marginTop={2}>
        <Typography variant="p">
          Wanted to sell your car? You have come to the right place! You can
          list your car on our webpage in just a few easy steps as described
          below:
        </Typography>
        <Box marginTop={4}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Step 1: Create your account.{" "}
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("signup")}
                >
                  (click here to sign up)
                </Link>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Step 2: Fill in details of the car you wanted to sell
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                Step 3: Specify the price you wanted to sell your car at
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        Create your account now and get started!
      </Box>
    </Box>
  );
}

export default Sell;
