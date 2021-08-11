import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PageLayout from "../components/pagelayout"
import * as blogStyles from './blog.module.scss'
import * as layoutStyles from '../components/layout.module.scss'

import { Link, graphql, useStaticQuery } from 'gatsby'
import { Parallax  } from 'react-scroll-parallax';

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
                title
                date
                github
                external
                tech
              }
              html
            }
          }
        }
      }
    `)

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  return (
    <PageLayout>
    <Parallax  y={[ 150, -140 ]} >
      <h1 className={layoutStyles.headers}>Projects</h1>
        <Tabs TabIndicatorProps={{style: {background:'#5F9EA0'}}} value={selectedTab} onChange={handleChange}>
            {data.allMarkdownRemark.edges.map((edge, i) => {
              return (
                <Tab label={edge.node.frontmatter.title} index={i}/>
              )
            })}
          </Tabs>

        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <TabPanel value={selectedTab} index={i}>
              <div>
                <br />
                <div>{edge.node.frontmatter.type}</div>
                <div>{edge.node.frontmatter.title}</div>
                <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
              </div>
            </TabPanel>
          )
        })}

    </Parallax>
    </PageLayout>
  )
}

export default ProjectPage
