import { Button } from '@/components/button';
import { Steeps } from '@/components/steeps';
import { Welcome } from '@/components/welcome';
import { router } from 'expo-router';
import { View } from 'react-native';

const Page = () => {
  const handleStart = () => {
    router.push('/home');
  };

  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steeps />

      <Button onPress={handleStart}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
};
export default Page;
