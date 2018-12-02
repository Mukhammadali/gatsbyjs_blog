import Typography from 'typography';
import fairyGatesTheme from 'typography-theme-fairy-gates';

fairyGatesTheme.overrideStyles = () => ({
  a: {
    textDecoration: 'none'
  }
});

const typography = new Typography(fairyGatesTheme);

export default typography;
