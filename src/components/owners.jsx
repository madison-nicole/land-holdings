import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchOwners } from '../actions';

function Owners({ userId }) {
  // Loads data for the owners and land holdings using ReactQuery
  const owners = useQuery({ queryKey: ['owners', userId], queryFn: fetchOwners(userId) });

  console.log('owners.data from reactquery', owners.data);

  return (
    <div>
      insert owners here
    </div>
  );
}

export default Owners;
