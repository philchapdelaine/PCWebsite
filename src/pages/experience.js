import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import PageLayout from "../components/pagelayout"
import * as layoutStyles from '../components/layout.module.scss'
import Github from '../images/github.png'
import External from '../images/external.png'

import { graphql, useStaticQuery } from 'gatsby'
import { Parallax  } from 'react-scroll-parallax';

const ExperiencePage = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark (
          filter: { fileAbsolutePath: { regex: "/experience/" }}
          sort: { fields: [ frontmatter___to ], order: ASC }
        )
        {
          edges {
            node {
              frontmatter {
                company
                position
                from
                to
              }
              html
            }
          }
        }
      }
    `)

    const useStyles = makeStyles((theme) => ({
        tabs: {
          width: 300,
          margin: '0.5rem'
        },
        tabpanel: {
          margin: '0.5rem',
          width: 600
        },
      }));

    const classes = useStyles();

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
        className={classes.tabs}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  return (
    <PageLayout>
      <h1 className={layoutStyles.headers}>Experience</h1>
      <div className={layoutStyles.experience}>
        <Tabs TabIndicatorProps={{style: {background:'#5F9EA0'}}} orientation="vertical" value={selectedTab} onChange={handleChange}>
            {data.allMarkdownRemark.edges.map((edge, i) => {
              return (
                <Tab label={edge.node.frontmatter.company} index={i}/>
              )
            })}
          </Tabs>

        {data.allMarkdownRemark.edges.map((edge, i) => {
          const frontm = edge.node.frontmatter

          return (
            <TabPanel className={classes.tabpanel} value={selectedTab} TabIndicatorProps={{style: {background:'#5F9EA0'}}}  index={i}>
              <div>
                <br />
                <div>{frontm.position}</div>
                <div><h1>{frontm.company}</h1></div>
                <h6>{frontm.from.toUpperCase()} to {frontm.to.toUpperCase()}</h6>
                <div className={layoutStyles.projects} dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
              </div>
            </TabPanel>
          )
        })}
        </div>

    </PageLayout>
  )
}

export default ExperiencePage
