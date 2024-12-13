import { colors } from '@/styles/colors';
import { categoriesIcons } from '@/utils/categories-icons';
import { Pressable, type PressableProps, Text } from 'react-native';
import { styles } from './styles';

type Props = PressableProps & {
  isSelected: boolean;
  iconId: string;
  name: string;
};

export const Category = ({ iconId, isSelected, name, ...rest }: Props) => {
  const Icon = categoriesIcons[iconId];

  const styleContainerSelected = isSelected && styles.containerSelected;
  const stylesTextSelected = isSelected && styles.textSelected;
  const colorIcon = isSelected ? colors.gray[100] : colors.gray[400];

  return (
    <Pressable style={[styles.container, styleContainerSelected]} {...rest}>
      <Icon color={colorIcon} size={16} />
      <Text style={[styles.name, stylesTextSelected]}>{name}</Text>
    </Pressable>
  );
};
