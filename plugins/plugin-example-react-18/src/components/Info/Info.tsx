import React from "react";
import { Card } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

import packageJson from "../../../package.json";

const jsonData = {
  name: packageJson.name,
  version: packageJson.version,
  reactVersion: React.version,
};

export const Info = () => {
  return (
    <Card>
      <Card.Header>Get Info</Card.Header>
      <Card.Body>
        <SyntaxHighlighter
          language="json"
          style={agate}
          customStyle={{ padding: "14px" }}
        >
          {JSON.stringify(jsonData, null, 2)}
        </SyntaxHighlighter>
      </Card.Body>
    </Card>
  );
};
