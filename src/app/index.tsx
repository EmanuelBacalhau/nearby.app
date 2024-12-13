import { Button } from '@/components/button';
import { Steeps } from '@/components/steeps';
import { Welcome } from '@/components/welcome';
import { IconHome } from '@tabler/icons-react-native';
import { View } from 'react-native';

const Page = () => {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Steeps />

      <Button>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
};
export default Page;
