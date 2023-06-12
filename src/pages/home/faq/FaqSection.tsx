import React from 'react'
import { FacSectionBox } from './FaqSectionStyle'
import { FaqList } from '../../../utils/Config'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PresentationImage from '../../../assets/images/mano-escribiendo.jpg'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const FaqSection = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <FacSectionBox id="faq">
      <img className='faq-back-image' data-type="parallax" data-depth="0.03" src={PresentationImage} />

      <div className='title-section-container'>
        <h6 className='section-title'>
          Faq
        </h6>

      </div>





      <div className='faq-list-container'>
        <div className='faq-list'>
          <Box sx={{ width: '100%', display:"grid", justifyItems:"center" }}>

            <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                {
                  FaqList.map((Faq, index) =>
                    <Tab label={Faq.title} {...a11yProps(index)} key={index} />
                  )
                }
              </Tabs>
            </Box>
            {
              FaqList.map((Faq, index) =>
                <TabPanel value={value} index={index} key={index} >

                  {Faq.questions.map((Question, index) =>
                    <Accordion
                      style={{ backgroundColor: "transparent" }}
                      key={index}
                      
                      >
                        
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                          <h6>{Question.title}</h6>
                        
                      </AccordionSummary>
                      <AccordionDetails>
                          <p>{Question.content}</p>
                      </AccordionDetails>
                    </Accordion>
                  )
                  }
                </TabPanel>
              )
            }
          </Box >

        </div>
      </div>

      <div></div>

    </FacSectionBox>
  )
}

export default FaqSection