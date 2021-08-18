import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import PageLayout from "../components/pagelayout"
import * as layoutStyles from '../components/layout.module.scss'
import Github from '../images/github.png'
import External from '../images/external.png'

import { graphql, useStaticQuery } from 'gatsby'
import { Parallax  } from 'react-scroll-parallax';

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark (
          filter: { fileAbsolutePath: { regex: "/projects/"}, frontmatter : { order : { in : ["1", "2", "3", "4" ] }}}
          sort: { fields: [ frontmatter___order ], order: ASC }
        )
        {
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
    <Parallax  y={[ 0, -140 ]} >
      <h1 className={layoutStyles.headers}>Projects</h1>
        <Tabs TabIndicatorProps={{style: {background:'#5F9EA0'}}} value={selectedTab} onChange={handleChange}>
            {data.allMarkdownRemark.edges.map((edge, i) => {
              return (
                <Tab label={edge.node.frontmatter.title} index={i}/>
              )
            })}
          </Tabs>

        {data.allMarkdownRemark.edges.map((edge, i) => {
          const frontm = edge.node.frontmatter
          const hasGit = (frontm.github.length !== 0)
          const hasExt = (frontm.external.length !== 0)

          let gitLink;
          if (hasGit) {
            gitLink = <a className={layoutStyles.link} href={frontm.github} target="_blank" rel="noopener noreferrer"><img src={Github} alt="github"/></a>
          } else {
            gitLink = ""
          }

          let externalLink;
          if (hasExt) {
            externalLink = <a className={layoutStyles.link} href={frontm.external} target="_blank" rel="noopener noreferrer"><img src={External} alt="external"/></a>
          } else {
            externalLink = ""
          }

          return (
            <TabPanel value={selectedTab} index={i}>
              <div>
                <br />
                <div>{frontm.type}</div>
                <div><h1>{frontm.title}</h1></div>
                <div className={layoutStyles.projects} dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
                <div className={layoutStyles.link}>
                  {gitLink}
                  {externalLink}
                </div>
                <div>
                  {frontm.tech.map((tech) => {
                    return (
                      <h6 className={layoutStyles.skills}>+{tech}</h6>);
                      })}
                </div>
              </div>
            </TabPanel>
          )
        })}

    </Parallax>
    </PageLayout>
  )
}

export default ProjectPage
