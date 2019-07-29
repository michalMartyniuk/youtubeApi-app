import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  withTheme as muiWithTheme,
} from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const MaterialUiTheme = props => (
  <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
);

const appTheme = {};

const StyledComponentsTheme = props => (
  <ThemeProvider theme={{ app: appTheme, mui: props.theme }}>
    {props.children}
  </ThemeProvider>
);

const StyledComponentsThemeWithMui = muiWithTheme()(StyledComponentsTheme);

const WithThemes = props => (
  <MaterialUiTheme>
    <StyledComponentsThemeWithMui>
      {props.children}
    </StyledComponentsThemeWithMui>
  </MaterialUiTheme>
);

WithThemes.propTypes = {
  children: PropTypes.any,
};

export default WithThemes;