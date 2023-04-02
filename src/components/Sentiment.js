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
  Divider,
  Image,
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  DownSquareOutlined,
  RightSquareOutlined
} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import ReactApexChart from "react-apexcharts";

import sentiment_01 from '../assets/images/Sentiment.png'
import sentiment_01_result_01 from '../assets/images/Sentiment_01_Result_01.png'
import sentiment_01_result_02 from '../assets/images/Sentiment_01_Result_02.png'
import sentiment_02_result from '../assets/images/Sentiment_02_Result.png'

function Sentiment() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
        series: [{
          name: 'AVG Sentiment score:',
          data: [-0.0788, 0.0973]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'center', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: ["FAKE", "TRUE"],
            position: 'bottom',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val;
              }
            }
          
          },
          title: {
            text: 'Sentiment Score',
            floating: true,
            align: 'center',
            style: {
              color: 'black'
            }
          }
        },
      
      
    })
    
    return (
        <Col span={24} gutter={[24,6]}>
            <Divider orientation="center" style={{marginTop:'24px'}}/>
            <Row>
                <Col span={18}>
                    <Title level={4}>Sentiment Analysis</Title>
                    <Text>Have you ever noticed FALSE Information commonly use negative and aggressive voice?</Text>
                    <br/>
                    <Text>Do you know that Negativity in addition to being loud is one way to get attraction?</Text>
                    <br/>
                    <Text>Well! <strong>That's Right!</strong></Text>
                    <br/>
                    <Text>We did an extensive study to analyze the type of language used in the Fake and True Dataset in order to determine the Negativity/Positivity/Neturality of each article. Here is the final result:</Text>
                    <br/>
                </Col>
                <Col span={6}>
                    <Image preview={false} src={sentiment_01}/>
                </Col>
            </Row>
            <Row justify={'space-between'}>
                <Col style={{marginTop:'24px'}} span={16}>
                    <Row>
                        <Col span={1}>
                            <Text style={{fontSize:'18px', fontWeight:'bold'}}>1</Text>
                        </Col>
                        <Col span={23}>
                            <Text>As the <strong>first way</strong>, Natural Language Toolkit (nltk) library is used to download the VADER (Valence Aware Dictionary and Sentiment Reasoner) lexicon for sentiment analysis. The average sentiment score for each dataset can be seen in the right plot. As it was predictable, false news use more negative wording to target audience.</Text>
                            <br/>
                            <br/>
                            <Text>While the average score is important to see how language can spread misinformation faster, the distribution of scores should be also studied.</Text>
                            <br/>
                            <Text><strong style={{fontSize:'14px'}}>Why?</strong> Consider the worst scenario where all the news (both true and fake) have a netural sentiment except two: One Fake article has a sentiment score of -1 and just one True news has a score of +1. In this situation, the average will be -1 and +1 for Fake and True dataset, respectively.</Text>
                            <br/>
                            <Text><strong style={{fontSize:'14px'}}>So?</strong> The plot below shows the distribution of sentiment scores for Fake and True articles.</Text>
                            <Row gutter={[12,12]} style={{marginTop:'12px'}}>
                                <Col span={12}>
                                    <Image src={sentiment_01_result_01}/>
                                </Col>
                                <Col span={12}>
                                    <Image src={sentiment_01_result_02}/>
                                </Col>
                            </Row>
                            <Text>Again, it can be seen that the Fake articles tend to talk negative more than True ones. Also, in the True dataset, the peak in the number of articles which are netural, suggests that unlike misinformation which tries to magnify things both in a positive and negative way, real-world facts are not highly positive or negative, they are netural!</Text>
                        </Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Col span={1}>
                            <Text style={{fontSize:'18px', fontWeight:'bold'}}>2</Text>
                        </Col>
                        <Col style={{marginTop:'6px'}} span={23}>
                            <Text>Before perfoming an exact sentiment analysis (like what we do in the first way), "TextBlob" library and the "gaussian_kde" function from the "scipy.stats" library are used to estimate the kernel density of sentiment polarity values for each article in both datasets. </Text>
                            <br/>
                            <br/>
                            <Text><strong style={{fontSize:'14px'}}>Why?</strong>Using this quick method, we were able to find out that there is a difference between sentiment scores of True and Fake datasets. Only after our hypothesis was confirmed with this method, we started exploring other algorithms to calculate an exact score for each label.</Text>
                            <br/>
                            <Text><strong style={{fontSize:'14px'}}>What was the estimated results?</strong> The plot below shows the distribution of sentiment scores for Fake and True articles which were estimated at first.</Text>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={16}>
                                    <Image src={sentiment_02_result}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row justify={'center'} style={{margin:'12px'}}>
                        <ReactApexChart options={firstDiagram.options} series={firstDiagram.series} type="bar" height={"250px"} width={"320px"}/>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
  }
  
  export default Sentiment;