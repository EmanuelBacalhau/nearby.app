import { colors } from '@/styles/colors';
import type { IconProps as TablerIconsProps } from '@tabler/icons-react-native';
import {
  ActivityIndicator,
  Text,
  type TextProps,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  loading?: boolean;
};

export const Button = ({
  children,
  style,
  loading = false,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.8}
      disabled={loading}
      {...rest}
    >
      {loading ? <ActivityIndicator color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
};

const Title = ({ children }: TextProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

type IconProps = {
  icon: React.ComponentType<TablerIconsProps>;
};

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />;
};

Button.Title = Title;
Button.Icon = Icon;
