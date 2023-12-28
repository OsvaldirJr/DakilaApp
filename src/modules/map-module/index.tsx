import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles'
import { getMapLink, ZaptMap, requestPermissions } from '@zapt-tech/react-native-zapt-sdk';
import { WebView } from 'react-native-webview';

export default function MapScreen() {
    return (

        <WebView
            style={styles.container}
            source={{ uri: 'https://app.zapt.tech/#/map?placeId=-njt255g4yspfdlqu7uz' }}
        />

    )
} 