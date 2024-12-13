import { Categories } from '@/components/categories';
import { Places } from '@/components/places';
import { api } from '@/services/api';
import type { Category } from '@/types/category';
import type { Place } from '@/types/place';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
        setSelectedCategory(data[0].id);
      } catch (error) {
        console.log(error);
        Alert.alert('Categorias', 'Erro ao buscar categorias');
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPlaces = async () => {
      if (!selectedCategory) {
        return;
      }

      try {
        const { data } = await api.get(`/markets/category/${selectedCategory}`);
        setPlaces(data);
      } catch (error) {
        console.log(error);
        Alert.alert('Locais', 'Erro ao buscar locais');
      }
    };

    fetchPlaces();
  }, [selectedCategory]);

  return (
    <View style={{ flex: 1, backgroundColor: '#ccc' }}>
      <Categories
        data={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <Places data={places} />
    </View>
  );
};
export default HomePage;
