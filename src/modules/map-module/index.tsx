import React, { useEffect } from 'react';
import { View } from 'react-native';
import { getMapLink, initialize, ZaptMap, requestPermissions } from '@zapt-tech/react-native-zapt-sdk';

export default function MapScreen() {
    const _bootstrap = async () => {
        await initialize("-njt255g4yspfdlqu7uz")
        await requestPermissions()
    };

    useEffect(() => {
        _bootstrap()
    }, [])

    return (
        <View className='flex-1 justify-center items-center bg-blue-200'>

            <ZaptMap
                placeID={"-njt255g4yspfdlqu7uz"}
                options={{ floorId: 1 }}
            />
        </View>
    )
}