/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  DownSquareOutlined,
  RightSquareOutlined
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import ReactApexChart from "react-apexcharts";

import Sentiment from "../components/Sentiment";
import Websource from "../components/Websource";
import Imagesource from "../components/Imagesource";
import Exclamtion from "../components/Exclamation";
import Engaging from "../components/Engaging";
import TimeAnalysis from "../components/TimeAnalysis";
import Readability from "../components/Readability";
import General from "../components/General";

function Home() {
  const { Title, Text } = Typography;
  
  const analysis = [
    {
      title: "Sentiment (Emotion) Analysis",
      link: "1",
      component: <Sentiment/>
    },
    {
      title: "Web Source Credibility",
      link: "2",
      component: <Websource/>
    },
    {
      title: "Image Reference Credibility",
      link: "3",
      component: <Imagesource/>
    },
    {
      title: "Exclamation Points",
      link: "4",
      component: <Exclamtion/>
    },
    {
      title: "Engaging Words Usage",
      link: "5",
      component: <Engaging/>
    },
    {
      title: "Time Analysis",
      link: "6",
      component: <TimeAnalysis/>
    },
    {
      title: "Readability Analysis",
      link: "7",
      component: <Readability/>
    },
    {
      title: "Name Entity Analysis",
      link: "8",
      component: <General/>
    },
  ];

  const timelineList = [
    {
      title: "Signing-up in the Hackaton!",
      time: "25 MAR 7:00 PM",
      color: "green",
    },
    {
      title: "Hackaton Starts! (Dataset Released)",
      time: "01 APR 12:00 AM",
      color: "green",
    },
    {
      title: "Browse the Dataset Manually and Got Insights.",
      time: "01 APR 01:00 AM",
    },
    {
      title: "Sentimental Analysis: Type #1.",
      time: "01 APR 03:30 AM",
    },
    {
      title: "Sentimental Analysis: Type #2.",
      time: "01 APR 06:00 AM",
    },
    {
      title: "Finding out about Exclamation Points.",
      time: "01 APR 11:30 AM",
    },
    {
      title: "Checking the Credibility of Web Sources.",
      time: "01 APR 12:30 PM",
    },
    {
      title: "Analyzing the Readability - No Difference!",
      time: "01 APR 02:00 PM",
    },
    {
      title: "Finding out about Image Referencing Differences.",
      time: "01 APR 05:00 PM",
    },
    {
      title: "Checking the Engaging Words (Hashtags, Mentions, etc.)",
      time: "01 APR 06:00 PM",
    },
    {
      title: "Finding out about the Timing Differences and Peaks!",
      time: "01 APR 07:30 PM",
    },
    {
      title: "Checking the Credibility of Web Sources",
      time: "01 APR 12:30 PM",
    },
  ];

  const [isPointing, setIsPointing] = useState(false)
  const handlePointingToDiv = () => {
    setIsPointing(true)
    setTimeout(() => {
      setIsPointing(false)
    }, 300);
  }

  const [whichAnalysis, setWhichAnalysis] = useState("1")

  return (
    <>
      <div className="layout-content">
        <Row gutter={[24,6]} justify={'space-between'}>
          <Col xs={24} md={12} sm={24} lg={18} xl={20} className="mb-24">
            <Row>
              <Col span={24}>
                <Card bordered={false} className="criclebox card-info-2 h-full">
                  <div className="gradent h-full col-content">
                    <div className="card-content">
                      <Title level={5}>Welcome!</Title>
                      <p>
                        In this project, first, we browsed data to understand it in a better way. Then, we cleaned it up in order to make the analysis more reliable. Third, we analyzed data in different ways and using different algorithms as you can try each of them in below. Forth, we created a logistic Regression Model which predicts if the news is a misinformation. Finally, we created this web application to present our results in an interactive way. 
                      </p>
                    </div>
                    <div className="card-footer">
                      <Button type="default" shape="round" icon={<RightSquareOutlined />} size="middle" style={{fontSize:'18px',}}>Try Our Model</Button>
                      <Button onClick={handlePointingToDiv} type="link" shape="round" icon={<DownSquareOutlined />} size="middle" style={{fontSize:'18px', marginLeft:'12px', color:'white'}}>Explore Analysis</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row gutter={[12,12]} style={{marginTop:"24px"}}>
              {analysis.map((c, index) => (
                <Col
                  onClick={()=>setWhichAnalysis(c.link)}
                  style={{cursor:'pointer'}}
                  key={index}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                  xl={6}
                >
                  <Card style={{border:(c.link===whichAnalysis)?'2px solid #A5E1F5':'2px dashed gray', transition:'all ease-out 1s', backgroundColor: (isPointing)?'gray':(c.link===whichAnalysis)?'#A5E1F5':'inherit'}}>
                    <div className="number">
                      <div>
                        <Row align="middle" gutter={[24, 0]}>
                          <Col xs={24}>
                            <Text style={{color:'black'}}><strong>{c.title}</strong></Text>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              {
                analysis.filter(item => item.link===whichAnalysis)[0].component
              }
            </Row>
          </Col>

          <Col xs={24} sm={24} md={12} lg={6} xl={3} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <div className="timeline-box">
                <Title level={5}>Project History</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  We Did <span className="bnb2">8</span> Analysis and We Learnt a lot!
                </Paragraph>

                <Timeline
                  className="timelinelist"
                >
                  {timelineList.map((t, index) => (
                    <Timeline.Item color={t.color} key={index}>
                      <Title level={5}>{t.title}</Title>
                      <Text>{t.time}</Text>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </div>
            </Card>
          </Col>
        </Row>

        {/* <ReactApexChart options={state.options} series={state.series} type="bar" height={430} /> */}
      </div>
    </>
  );
}

export default Home;
