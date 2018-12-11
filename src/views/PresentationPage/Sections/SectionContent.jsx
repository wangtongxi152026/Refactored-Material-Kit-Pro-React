import React from 'react'
import PropTypes from 'prop-types'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// library used for cool animations
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

import contentStyle from '../../../jss/material-kit-pro-react/views/presentationSections/contentStyle.jsx'
// images
import presentationiPad from '../../../../static/img/assets-for-demo/presentationViewSectionComponent/presentation-ipad.jpg'
import presentationiPadComments from '../../../../static/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.jpg'
import presentationiPadTable from '../../../../static/img/assets-for-demo/presentationViewSectionComponent/ipad-table.jpg'

class SectionContent extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={4}>
              <div className={classes.sectionDescription}>
                <h3 className={classes.title}>Content Areas</h3>
                <h6 className={classes.description}>
                  For Areas that Need More Space
                </h6>
                <h5 className={classes.description}>
                  {`If you need elements such as tables, comments, description
                  areas, tabs and many others, we've got you covered. We took
                  into consideration multiple use cases and came up with some
                  specific elements that you will love to use. They're beautiful
                  and easy to use for the end user navigating your website.`}{' '}
                </h5>
              </div>
            </GridItem>
            <GridItem md={7} className={classes.mlAuto}>
              <div className={classes.imageContainer}>
                <div className={classes.animeAreaImg}>
                  <ScrollAnimation animateIn='fadeInUp'>
                    <img
                      src={presentationiPadComments}
                      alt='iPad comments'
                      className={classes.areaImg}
                    />
                  </ScrollAnimation>
                </div>
                <div className={classes.animeInfoImg}>
                  <ScrollAnimation animateIn='fadeInUp'>
                    <img
                      src={presentationiPadTable}
                      alt='iPad table'
                      className={classes.infoImg}
                    />
                  </ScrollAnimation>
                </div>
                <img
                  className={classes.ipadImg}
                  src={presentationiPad}
                  alt='iPad'
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

SectionContent.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(contentStyle)(SectionContent)
