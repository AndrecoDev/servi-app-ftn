import React from "react";
import { Alert } from "keep-react";

import Link from "next/link";

const AlertComponent = () => {
  return (
    <Alert>
      <Alert.Container>
        <Alert.Icon></Alert.Icon>
        <Alert.Body>
          <Alert.Title>Default message - make it short</Alert.Title>
          <Alert.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
            <Link
              href="/alert"
              className="ml-1 inline-block text-body-4 text-primary-600 underline"
            >
              Link style
            </Link>
          </Alert.Description>
        </Alert.Body>
      </Alert.Container>
    </Alert>
  );
};

export default AlertComponent;
