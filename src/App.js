import React from 'react';
import { Box } from '@twilio-paste/core/box';
import { Theme } from '@twilio-paste/core/theme';
import { Heading } from '@twilio-paste/core/heading';
import { Paragraph } from '@twilio-paste/core/paragraph';

export default function App() {
  return (
    <Theme.Provider theme="twilio">
      <Box>
        <Heading as="h1" variant="heading10">
          Hello StackBlitz!
        </Heading>
        <Paragraph>Start editing to see some magic happen :)</Paragraph>
      </Box>
    </Theme.Provider>
  );
}
