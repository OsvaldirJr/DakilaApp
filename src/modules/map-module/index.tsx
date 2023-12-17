import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles'
import { getMapLink, ZaptMap, requestPermissions } from '@zapt-tech/react-native-zapt-sdk';

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <ZaptMap
        placeID={'-njt255g4yspfdlqu7uz'}
        options={{floorId: 1, displayButtonList: false}}
      />
        </View>
    )
}