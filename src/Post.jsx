// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useQueryClient } from 'react-query';

function Post() {
  const queryClient = useQueryClient();

  // Access the cached data from the query using the query key
  const cachedData = queryClient.getQueryData(['posts', 1]);
  console.log("cachedData ++++>", cachedData)
  return (
    <div>Post</div>
  )
}

export default Post