import textStyles from '../../theme-foundations/textStyles';

const Button = {
  baseStyle: {
    ...textStyles.paragraph,
    borderRadius: '4px',
    _focus: {
      boxShadow: 'none',
    },
    _focusVisible: {
      outlineWidth: '3px',
      outlineStyle: 'solid',
      outlineColor: 'primary.500',
      outlineOffset: '2px',
    },
  },
};

export default Button;
