import { Button } from '@/components/button';
import { Loading } from '@/components/loading';
import { Cover } from '@/components/place-selected/cover';
import { Cupom } from '@/components/place-selected/cupom';
import { Details } from '@/components/place-selected/details';
import { api } from '@/services/api';
import type { PlaceDetails } from '@/types/place-details';
import { IconQrcode } from '@tabler/icons-react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Alert, Modal, View } from 'react-native';

type PlaceProps = PlaceDetails & {
  cover: string;
};

const Place = () => {
  const [_, requestPermission] = useCameraPermissions();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [place, setPlace] = useState<PlaceProps | null>(null);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [couponIsFetch, setCouponIsFetch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const qrLock = useRef(false);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const { data } = await api.get(`/markets/${id}`);
        setPlace(data);
      } catch (error) {
        console.error('Erro ao buscar local:', error);
        Alert.alert('Local', 'Erro ao buscar local');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlace();
  }, [id, coupon]);

  const handleReadQrCode = async () => {
    try {
      const { granted } = await requestPermission();
      if (!granted) {
        return Alert.alert(
          'Permissão',
          'Você precisa permitir o acesso à câmera'
        );
      }

      setIsModalVisible(true);
    } catch (error) {
      console.error('Erro ao solicitar permissão:', error);
      Alert.alert('Permissão', 'Erro ao solicitar permissão');
    }
  };

  async function handleBarCodeScanned(id: string) {
    try {
      setCouponIsFetch(true);

      const { data } = await api.patch(`/coupons/${id}`);

      Alert.alert('Cupom', data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.error('Erro ao ler QR Code:', error);
      Alert.alert('QR Code', 'Erro ao ler QR Code');
    } finally {
      setCouponIsFetch(false);
      setIsModalVisible(false);
      qrLock.current = false;
    }
  }

  const handleUseCoupon = (id: string) => {
    setIsModalVisible(false);
    setCouponIsFetch(false);
    Alert.alert(
      'Cupom',
      'Não é possível utilizar o cupom resgatado. Deseja realmente resgatar?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Resgatar',
          onPress: () => handleBarCodeScanned(id),
        },
      ]
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!place) {
    return <Redirect href={'/home'} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={place.cover} />
      <Details data={place} />
      {coupon && <Cupom code={coupon} />}

      <View style={{ padding: 32, flex: 1, justifyContent: 'flex-end' }}>
        <Button onPress={handleReadQrCode} loading={couponIsFetch}>
          <Button.Icon icon={IconQrcode} />
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isModalVisible} animationType="fade">
        <CameraView
          style={{ flex: 1 }}
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              handleUseCoupon(data);
            }
          }}
          barcodeScannerSettings={{
            barcodeTypes: ['qr'],
          }}
        />
        <Button
          onPress={() => setIsModalVisible(false)}
          style={{ position: 'absolute', bottom: 32, left: 32, right: 32 }}
        >
          <Button.Title>Voltar</Button.Title>
        </Button>
      </Modal>
    </View>
  );
};
export default Place;
