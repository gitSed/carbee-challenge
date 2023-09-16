const baseStyle = {
  fontStyle: "normal",
  letterSpacing: "0",
  fontWeight: "400",
};

const headingStyles = {
  ...baseStyle,
  fontWeight: "600",
};

const subheadingStyles = {
  ...baseStyle,
  fontWeight: "500",
};

const textStyles = {
  h1: {
    ...headingStyles,
    fontSize: "3rem",
    lineHeight: "4.5rem",
  },
  h2: {
    ...headingStyles,
    fontSize: "2.25rem",
    lineHeight: "3.375rem",
  },
  h3: {
    ...headingStyles,
    fontSize: "1.875rem",
    lineHeight: "2.875rem",
  },
  h4: {
    ...headingStyles,
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
  },
  h5: {
    ...headingStyles,
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
  },
  h6: {
    ...headingStyles,
    fontSize: "1rem",
    lineHeight: "1.375rem",
  },
  subtitle1: {
    ...subheadingStyles,
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  subtitle2: {
    ...subheadingStyles,
    fontSize: "1rem",
    lineHeight: "1.375rem",
  },
  paragraph: {
    ...baseStyle,
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
  },
  boldParagraph: {
    ...baseStyle,
    fontSize: "0.875rem",
    lineHeight: "1.375rem",
    fontWeight: "600",
    letterSpacing: "0.01em",
  },
  label: {
    ...baseStyle,
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
  },
  button: {
    ...headingStyles,
    fontSize: "1rem",
    fontWeight: "1.5rem",
    letterSpacing: "0.01em",
  },
};

export default textStyles;
