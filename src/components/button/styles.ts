import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    maxHeight: 56,
    height: 56,
    flex: 1,
    backgroundColor: colors.green.base,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
});
