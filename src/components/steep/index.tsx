import { Text, View } from 'react-native';
import { styles } from './styles';

import { colors } from '@/styles/colors';
import type { IconProps } from '@tabler/icons-react-native';

type Props = {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
};

export const Steep = ({ title, description, icon: Icon }: Props) => {
  return (
    <View style={styles.container}>
      <Icon size={32} color={colors.red.base} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
