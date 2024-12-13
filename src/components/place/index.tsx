import { colors } from '@/styles/colors';
import type { Place as PlaceProps } from '@/types/place';
import { IconTicket } from '@tabler/icons-react-native';
import {
  Image,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export const Place = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} />

      <View style={styles.content}>
        <Text style={styles.name}>
          {data.name.length > 20 ? `${data.name.slice(0, 20)}...` : data.name}
        </Text>
        <Text style={styles.description}>
          {data.description.length > 50
            ? `${data.description.slice(0, 50)}...`
            : data.description}
        </Text>

        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
