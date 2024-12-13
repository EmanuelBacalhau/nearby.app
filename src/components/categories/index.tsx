import type { Category as CategoryType } from '@/types/category';
import { FlatList, View } from 'react-native';
import { Category } from '../category';
import { styles } from './style';

type Props = {
  data: CategoryType[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
};

export const Categories = ({
  data,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      contentContainerStyle={{
        paddingHorizontal: 8,
      }}
      style={styles.container}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item: category }) => {
        return (
          <Category
            iconId={category.id}
            isSelected={selectedCategory === category.id}
            name={category.name}
            onPress={() => onSelectCategory(category.id)}
          />
        );
      }}
    />
  );
};
