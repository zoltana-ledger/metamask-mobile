import { StyleSheet, ViewStyle } from 'react-native';
import { CheckboxStyleSheet, CheckboxStyleSheetVars } from './Checkbox.types';

/**
 * Style sheet function for Checkbox component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  vars: CheckboxStyleSheetVars;
}): CheckboxStyleSheet => {
  const { vars } = params;
  const { style } = vars;
  return StyleSheet.create({
    base: Object.assign(
      { alignSelf: 'flex-start' } as ViewStyle,
      style,
    ) as ViewStyle,
  });
};

export default styleSheet;
