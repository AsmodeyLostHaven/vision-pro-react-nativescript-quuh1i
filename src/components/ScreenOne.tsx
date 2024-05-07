import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, 'One'>;
  navigation: FrameNavigationProp<MainStackParamList, 'One'>;
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <stackLayout>
      {/* Карусель из фото */}
      <carousel>
        <image src="image1.jpg" />
        <image src="image2.jpg" />
        <image src="image3.jpg" />
        {/* Добавьте сколько угодно изображений */}
      </carousel>

      {/* Всплывающая плашка */}
      <gridLayout
        rows="auto,auto"
        columns="auto"
        row="0"
        margin="20"
        borderRadius="60"
        backgroundColor="#FFFFFF"
        padding="20"
      >
        <button
          className="ronded-full text-2xl p-5"
          onTap={() => {
            /* Обработчик для кнопки Вход */
          }}
        >
          Вход
        </button>
        <button
          className="ronded-full text-2xl p-5"
          onTap={() => {
            /* Обработчик для кнопки Регистрация */
          }}
        >
          Регистрация
        </button>
      </gridLayout>
    </stackLayout>
  );
}
