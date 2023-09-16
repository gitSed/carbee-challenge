import colors from "../../theme-foundations/colors";
import textStyles from "../../theme-foundations/textStyles";

const Button = {
  baseStyle: {
    borderRadius: "4px",
    _focus: {
      boxShadow: "none",
    },
    _focusVisible: {
      outlineWidth: "3px",
      outlineStyle: "solid",
      outlineColor: "primary.500",
      outlineOffset: "2px",
    },
  },
  variants: {
    solid: (): Record<string, unknown> => ({
      bg: "primary.500",
      color: colors.buttonColor ? "buttonColor" : "white",
      border: "none",
      _hover: {
        color: "white",
        textDecoration: "none",
        bg: "primary.700",
      },
      _active: {
        bg: "primary.800",
      },
      _disabled: {
        bg: "base.100",
        color: "base.300",
        opacity: 1,
        pointerEvents: "none",
        _hover: {
          color: "base.300",
        },
      },
    }),
    solidWithContrast: (): Record<string, unknown> => ({
      bg: "primary.500",
      color: "white",
      border: "none",
      _hover: {
        color: "white",
        textDecoration: "none",
        bg: "primary.700",
      },
      _active: {
        bg: "primary.800",
      },
      _disabled: {
        bg: "primary.500",
        color: "white",
        opacity: 0.3,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    }),
    outline: (): Record<string, unknown> => ({
      color: "primary.500",
      borderColor: "primary.500",
      _hover: {
        borderColor: "primary.700",
        bg: "primary.100",
        color: "primary.700",
      },
      _active: {
        borderColor: "primary.800",
        bg: "primary.200",
        color: "primary.800",
      },
      _disabled: {
        borderColor: "base.300",
        color: "base.300",
        opacity: 1,
        _hover: {
          borderColor: "base.300",
          color: "base.300",
        },
      },
    }),
    link: (): Record<string, unknown> => ({
      fontSize: "0.875rem",
      fontWeight: "600",
      color: "primary.500",
      _hover: {
        color: "primary.700",
      },
      _active: {
        color: "primary.800",
      },
      _disabled: {
        color: "base.300",
        opacity: 1,
        _hover: {
          color: "base.300",
        },
      },
    }),
    text: (): Record<string, unknown> => ({
      ...textStyles.paragraph,
      border: "none",
      bg: "transparent",
      padding: "0",
      justifyContent: "start",
      height: "auto",
      borderRadius: "none",
      _hover: {
        textDecoration: "none",
        color: "primary.500",
        fontWeight: "600",
      },
      _focus: {
        boxShadow: "none",
      },
      _active: {
        ...textStyles.boldParagraph,
        color: "primary.500",
        borderLeft: "4px solid",
        borderColor: "primary.500",
        paddingLeft: "0.5rem",
      },
    }),
    ghost: (): Record<string, unknown> => ({
      color: "base.300",
      border: "none",
      bg: "transparent",
      height: "auto",
      minWidth: "2rem",
      minHeight: "2rem",
      _hover: {
        bg: "transparent",
        textDecoration: "none",
      },
      _focus: {
        boxShadow: "none",
      },
      _active: {
        bg: "transparent",
      },
    }),
    plain: (): Record<string, unknown> => ({
      ...textStyles.button,
      bg: "base.100",
      py: "0.75rem",
      minHeight: "1rem",
      height: "auto",
    }),
    menu: (): Record<string, unknown> => ({
      ...textStyles.paragraph,
      fontWeight: "500",
      bg: "transparent",
      minHeight: "2.5rem",
      height: "auto",

      _active: {
        ...textStyles.h6,
        fontWeight: "600",
      },
    }),
  },
};

export default Button;
