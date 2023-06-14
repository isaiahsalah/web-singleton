import React from "react";
import { FacSectionBox } from "./FaqSectionStyle";
import { Faq } from "../../../utils/Classes";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PresentationImage from "../../../assets/images/mano-escribiendo.jpg";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface faqProp {
  faqList: Faq[]
}
const FaqSection = (props:faqProp) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  /*
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };*/
  return (
    <FacSectionBox id="faq">
      <img
        className="faq-back-image"
        data-type="parallax"
        data-depth="0.03"
        src={PresentationImage}
        alt=""
      />

      <div className="title-section-container">
        <div className="h6 section-title">Faq</div>
      </div>

      <div className="faq-list-container">
        <div className="faq-list">
          <Box sx={{ 
            width: "100%", 
            display: "grid", 
            justifyItems: "center", 
            }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>

              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className="faqs-tabs"
              >
                {props.faqList.map((Faq, index) => (
                  <Tab label={Faq.title} {...a11yProps(index)} key={index} />
                ))}
              </Tabs>
            </Box>
            {props.faqList.map((Faq, index) => (
              <TabPanel value={value} index={index} key={index}>
                {Faq.questions.map((Question, index) => (
                  <Accordion
                    style={{ backgroundColor: "transparent" }}
                    key={index}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="h6">{Question.question}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>{Question.answer}</p>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </TabPanel>
            ))}
          </Box>
        </div>
      </div>

      <div></div>
    </FacSectionBox>
  );
};

export default FaqSection;
