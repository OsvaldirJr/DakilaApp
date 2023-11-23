import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
    return (
        <View className='flex-1 justify-center items-center'>
            <MapView
                style={{ width: '100%', height: '100%' }}
                region={{
                    latitude: -19.92465402898937,
                    longitude: -55.17191908062471,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                mapType='satellite'
                zoomEnabled={false}
                zoomControlEnabled={false}
                zoomTapEnabled={false}
                rotateEnabled={false}
                scrollEnabled={false}
                pitchEnabled={false}
                loadingEnabled={true}
                loadingBackgroundColor='#000000'
                loadingIndicatorColor='#E2C535'
            >
                <Marker
                    coordinate={{ latitude: -19.92465402898937, longitude: -55.17191908062471 }}
                    title='Cidade Zigurats - Dakila Pesquisas'
                    pinColor='#E2C535'
                />
            </MapView>
        </View>
    )
}