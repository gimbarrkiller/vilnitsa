import React, { FC } from 'react';

import {
  MainContainer, PlacePowerContainer,
  SecondMainContainer, SliderContainer, TimeOpenContainer,
} from 'containers';

export const HomePage: FC = () => (
  <>
    <MainContainer />
    <SecondMainContainer />
    <SliderContainer />
    <PlacePowerContainer />
    <TimeOpenContainer />
  </>
);
