import { Categories } from '@/components/categories';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
    </View>
  );
};
export default HomePage;
