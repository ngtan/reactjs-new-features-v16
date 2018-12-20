import React from 'react';

function Logo() {
  console.log('Logo component');
  return (
    <div>This is a logo</div>
  );
}

export default React.memo(Logo);
