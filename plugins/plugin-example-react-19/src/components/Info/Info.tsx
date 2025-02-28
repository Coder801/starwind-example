import React from 'react';
import { Card } from 'primereact/card';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import packageJson from '../../../package.json';

const jsonData = {
  name: packageJson.name,
  version: packageJson.version,
  reactVersion: React.version
};

export const Info = () => {
  return (
    <Card title="Get Info">
      <SyntaxHighlighter language="json" style={agate} customStyle={{ padding: '14px' }}>
        {JSON.stringify(jsonData, null, 2)}
      </SyntaxHighlighter>
    </Card>
  );
};
