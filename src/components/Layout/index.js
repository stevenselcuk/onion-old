import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import GlobalStyle from '../../style/globalStyle';
import { Wrapper } from './style';
import Helmet from '../Head';

const PoseWrapper = posed.div({
  enter: {
    opacity: 1,
    filter: 'blur(0px)',
    y: -100,
    delay: 300,
    delayChildren: 50,
  },
  exit: {
    opacity: 0,
    filter: 'blur(20px)',
    y: 30,
  },
});

const withLayout = WrappedComponent =>
  class WithLayout extends React.Component {
    state = {
      open: false,
      theme: 'Dark',
      changeTheme: () =>
        this.setState({
          theme: this.state.theme === 'Light' ? 'Dark' : 'Light',
        }),
      showModal: () => this.setState({ open: true }),
      hideModal: () => this.setState({ open: false }),
    };

    render() {
      return (
        <ThemeProvider theme={{ mode: this.state.theme }}>
          <Helmet title={'Onion'} />
          <GlobalStyle />
          <StaticQuery
            query={graphql`
              query LayoutQuery {
                site {
                  siteMetadata {
                    siteTitle
                  }
                }
              }
            `}
            render={data => (
              <Wrapper>
                <WrappedComponent
                  siteMeta={data}
                  data={this.state}
                  location={this.props.location}
                  {...this.props}
                />
              </Wrapper>
            )}
          />
        </ThemeProvider>
      );
    }
  };

export default withLayout;
