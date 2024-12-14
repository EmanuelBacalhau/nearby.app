import { Button } from '@/components/button';
import { IconArrowLeft } from '@tabler/icons-react-native';
import { router } from 'expo-router';
import { ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  uri: string;
};

export const Cover = ({ uri }: Props) => {
  const handleBack = () => {
    router.back();
  };

  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button
          onPress={handleBack}
          style={{
            width: 40,
            maxHeight: 40,
          }}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
};
