import * as React from "react";

import HotelIcon from "@mui/icons-material/Hotel";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import RepeatIcon from "@mui/icons-material/Repeat";
import SchoolIcon from "@mui/icons-material/School";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Typography from "@mui/material/Typography";

export default function Education() {
  return (
    <>
      <section id="services" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="h6">
              2024/07
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Graduate
              </Typography>
              <Typography>Backend: Java</Typography>
              <Typography>FrontEnd: Html, Css, Javascript </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="h6">
              2023/11
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Rikkei Academy
              </Typography>
              <Typography>Full Stack Course</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }} variant="h6">
              2014/05
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Graduate
              </Typography>
              <Typography>Major: Labour Safety</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="h6"
            >
              2010/07
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <LocalLibraryIcon color="primary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Study
              </Typography>
              <Typography>Study at Viet Nam Trade Union University</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </>
  );
}
