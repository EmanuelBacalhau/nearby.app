import { Categories } from '@/components/categories';
import { Places } from '@/components/places';
import { api } from '@/services/api';
import type { Category } from '@/types/category';
import type { Place } from '@/types/place';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

type PLaceProps = Place & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [places, setPlaces] = useState<PLaceProps[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  const handleSelectPlace = (id: string) => {
    router.navigate({
      pathname: '/place/[id]',
      params: { id },
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
        setSelectedCategory(data[0].id);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        Alert.alert('Categorias', 'Erro ao buscar categorias');
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPlaces = async () => {
      if (!selectedCategory) return;

      try {
        const { data } = await api.get(`/markets/category/${selectedCategory}`);
        setPlaces(data);
      } catch (error) {
        console.error('Erro ao buscar locais:', error);
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

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require('@/assets/location.png')}
        />

        {places.map(place => (
          <Marker
            key={place.id}
            identifier={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            image={require('@/assets/pin.png')}
            onPress={() => handleSelectPlace(place.id)}
          />
        ))}
      </MapView>

      <Places data={places} />
    </View>
  );
};

export default HomePage;
