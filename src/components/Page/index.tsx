import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles';
import UniqueOverLay from '../UniqueOverLay';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model Y',
            'Model X',
            'Model 3',
            'Model S',
            'Only $1.49/Watt for Solar on Existing Roofs',
            'Solar for New Roofs',
            'Accessories'
          ].map(modelName => (
            <ModelSection 
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Order Online for Delivery"
              />
            }
          />
          ))}
          
        </div>
        <Spacer />
        <UniqueOverLay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
