import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native';
import { Text, View } from 'react-native';
import { Steep } from '../steep';
import { styles } from './styles';

export const Steeps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona: </Text>
      <Steep
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Steep
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Steep
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </View>
  );
};
