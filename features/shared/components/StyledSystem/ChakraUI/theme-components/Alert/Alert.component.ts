import textStyles from "../../theme-foundations/textStyles";

const Alert = {
  baseStyle: {
    container: {
      borderRadius: "0",
      border: "0",
    },
    description: {
      ...textStyles.paragraph,
    },
  },
  variants: {
    error: (): Record<string, unknown> => ({
      container: {
        bg: "danger.100",
      },
      icon: {
        color: "danger.700",
      },
      title: {
        color: "black",
      },
      description: {
        color: "black",
      },
    }),
    info: (): Record<string, unknown> => ({
      container: {
        bg: "informative.100",
        borderColor: "informative.300",
      },
      icon: {
        color: "informative.300",
      },
      description: {
        color: "base.900",
      },
    }),
  },
};

export default Alert;
