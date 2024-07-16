import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
    '&:first-of-type::before': {
      display: 'none',
    },
}));

export default function ExperienceTimeline() {
    return (
        <div>
            <h1 className="text-4xl font-bold">Experience</h1>
            <Timeline
            sx={{
                paddingLeft: 0
            }}
            >
            <CustomTimelineItem>
                <div className="w-1/3">
                <TimelineContent>
                <Typography>Sep 2023 - Apr 2024</Typography>
                </TimelineContent>
                </div>
                <TimelineSeparator>
                <TimelineDot color="primary"/>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                </TimelineSeparator>
                <TimelineOppositeContent>
                <div className="text-left">
                    <h1 className="text-2xl font-bold">Co-op Developer/Automation</h1>
                    <Typography>
                    At the Ontario Public Service, I served as a Co-op Developer/Automation,
                    focusing on enhancing system reliability and efficiency through automated
                    testing and optimization strategies. I developed and debugged JUnit test
                    packages, improving CI/CD pipeline tests. Using Java, Selenium, and Cucumber
                    frameworks, I automated browser testing, reducing manual testing dependency
                    for new features. I enhanced application performance by optimizing SQL queries
                    and utilized SoapUI for API testing, ensuring accurate data processing.
                    </Typography>
                </div>
                </TimelineOppositeContent>
            </CustomTimelineItem>
            <CustomTimelineItem>
                <div className="w-1/3">
                <TimelineContent>
                <Typography>Oct 2017 - Dec 2022</Typography>
                </TimelineContent>
                </div>
                <TimelineSeparator>
                <TimelineDot color="primary"/>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                </TimelineSeparator>
                <TimelineOppositeContent>
                <div className="text-left">
                    <h1 className="text-2xl font-bold">Quality and Compliance Roles in Pharmaceuticals</h1>
                    <Typography>
                    Prior to transitioning into software development, I acquired valuable
                    professional experience in the pharmaceutical industry, refining my expertise
                    in investigations, and project management. Over the course of my five-year
                    career, I progressively took on more responsibility, ultimately leading to the
                    ownership of investigations.   
                    </Typography>
                </div>
                </TimelineOppositeContent>
            </CustomTimelineItem>
            </Timeline>
        </div>
    );
}