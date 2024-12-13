import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 120,
    maxHeight: 120,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: colors.gray[200],
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
  },
  tickets: {
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400],
  },
});
