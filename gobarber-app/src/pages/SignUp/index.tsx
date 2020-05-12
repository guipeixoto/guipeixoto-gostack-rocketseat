import React from 'react';
import { Image, Platform, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText,
  KeyboardAvoidingView,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps='handled'>
          <Container>
            <Image source={logoImg}></Image>
            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name='name' icon='user' placeholder='Nome' />
            <Input name='email' icon='mail' placeholder='E-mail' />
            <Input name='password' icon='lock' placeholder='Senha' />

            <Button onPress={() => console.log('')}>Cadastrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' size={20} color='#fff' />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
