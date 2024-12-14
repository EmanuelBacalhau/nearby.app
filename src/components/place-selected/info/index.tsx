import { colors } from '@/styles/colors';
import type { IconProps } from '@tabler/icons-react-native';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  icon: React.ComponentType<IconProps>;
  description: string;
};

export const Info = ({ description, icon: Icon }: Props) => {
  return (
    <View style={styles.container}>
      <Icon size={16} color={colors.gray[400]} />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};
