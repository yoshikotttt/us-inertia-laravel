import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react'

const HomePage = ({user}) => {
  return (
      <Authenticated user={user}>
          <div>HomePage</div>
      </Authenticated>
  );
}

export default HomePage