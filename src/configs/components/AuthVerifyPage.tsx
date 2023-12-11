import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const AuthLoadingPage: React.FC = () => {
  const { navigate } = useNavigation<any>();
  const [loading, setLoading] = useState(false)

  const _bootstrapAsync = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setLoading(true)
        navigate('App');
        return
      }
      setLoading(false)
      navigate('Login');

    } catch (e) {
      await AsyncStorage.clear();
      navigate('Login');
    }
    //navigate("App")
  };

  useEffect(() => {
    _bootstrapAsync()
  }, [])

  return (
    <View>
      {/* <Spinner
          visible={loading}
          textContent={'Carregando...'}
          textStyle={{color: '#FFF'}}
        /> */}
    </View>
  );
}

export default AuthLoadingPage;