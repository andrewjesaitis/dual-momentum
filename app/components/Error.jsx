import React from 'react';
import * as styles from '../styles/styles';

export default function Error(props) {
  return (
    <div className="alert alert-danger" role="alert" style={styles.error}>
      <h3>Uh oh!</h3> <p>We couldn't fetch any quotes!</p>
    </div>
  );
}
