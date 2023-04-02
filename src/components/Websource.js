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
import Websources_01 from '../assets/images/Websources_01.png'
import Websources_result_01 from '../assets/images/Websources_result_01.png'
import Websources_result_02 from '../assets/images/Websources_result_02.png'

function Websource() {
    const {Text, Title} = Typography

    const [firstDiagram, setFirstDiagram] = useState({
          
      series: [13705, 385],
      options: {
        chart: {
          width: 450,
          height: 400,
          type: 'pie',
        },
        labels: ['Fake', 'True',],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 320
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: 'References per 100 Articles.',
          align: 'center',
        }
      },
    
    
    })
    
    return (
        <Col span={24} gutter={[24,6]}>
            <Divider orientation="center" style={{marginTop:'24px'}}/>
            <Row>
                <Col span={18}>
                    <Title level={4}>Web Source Credibility Analysis</Title>
                    <Text>Misinformation usually comes from low credible sources. In many cases, false publishers try to reference their content to other websites to increase the believability of the article.</Text>
                    <br/>
                    <Text>The fact is those websites are not even highly popular (in terms of telling the truth) themselves!</Text>
                    <br/>
                    <Text><strong>Yes!</strong> We analyze the websites that are referenced in each article in order to find out if there is any big differences.</Text>
                    <br/>
                    <Text>We used regular expressions to extract all the URLs that end with popular domain extension such as ".com", ".net", and ".org".</Text>
                    <br/>
                </Col>
                <Col span={6}>
                    <Image preview={true} src={Websources_01}/>
                </Col>
            </Row>
            <Row>
                <Col span={16}>
                    <Row>
                        <Col span={23}>
                            <Text>Top 10 most referenced websites is shown in the plot below. As it's observable, FoxNews.com is the most frequently used website in True articles as a reference. Also, it is obvious that the authors of True articles are not trying to manipulate the reader by referencing too many websites for the news. The number of using websites is way lower than the Fake dataset which is described in the next paragraph.</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Websources_result_01}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'24px'}}>
                        <Col span={23}>
                            <Text>On the other hand, top 10 most referenced websites in Fake dataset is shown in the plot below. The most obvious difference that can be seen is the number of websites used to reference in Fake dataset. This fact suggests the authors of false information will try aggresively to refer to other websites in order to make the article look more credible. Also, note that according to Google's crawlers, using backlinks, can improve SEO of your website. So, if there are many false publsihers actively referencing to each other websites, their rank in google search engine will improve!</Text>
                            <br/>
                            <Row gutter={[12,12]} justify={'center'} style={{marginTop:'12px'}}>
                                <Col span={20}>
                                    <Image src={Websources_result_02}/>
                                </Col>
                            </Row>
                            <br/>
                            <Text>Finally, one can see the major usage of Twitter to spread misinformation. This platform is a heaven for false propaganda publishers since a tweet can get viral in minutes using smart algorithms and robots! It lets you use a virtual account and you can even create bots to automatically re-tweet or like your tweets to make it look more legit!</Text>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row justify={'end'} style={{margin:'12px'}}>
                        <ReactApexChart options={firstDiagram.options} series={firstDiagram.series} type="pie" height={"400px"} width={"320px"}/>
                        <Text>For each 100 references, Fake news contain 97.3!</Text>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
  }
  
  export default Websource;