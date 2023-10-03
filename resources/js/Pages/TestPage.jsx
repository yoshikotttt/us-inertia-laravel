import React from 'react'

const TestPage = ({ user}) => {
  return (
      <>
          <div>TestPage</div>
          <p>Reactだよー!!</p>
          <p>最初の登録は「{user.name}」さん!!</p>
      </>
  );
}

export default TestPage