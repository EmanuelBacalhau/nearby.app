import type { Place as PlaceProps } from '@/types/place';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Text, View } from 'react-native';
import { Place } from '../place';
import { styles } from './styles';

type Props = {
  data: PlaceProps[];
};

export const Places = ({ data }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['25%', '50%', '80%'];

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
    >
      <BottomSheetFlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Place data={item} />}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
      />
    </BottomSheet>
  );
};
