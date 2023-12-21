// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useMutation, useQuery, 
  // useQueryClient
 } from 'react-query'
import { getPosts, postData } from './api'

function Todo() {
  const [num, setNum] = useState(0);
  // const queryClient = useQueryClient()
     // Queries
  const { status, data, error } = useQuery('posts', ['posts', num], getPosts, {
    refetchOnWindowFocus: true
  })

  // Mutations
//   const mutation = useMutation(postTodo, {
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries('todos')
//     },
//   })

//Mutations
const mutation = useMutation(postData, {
  onSuccess: () => {
    // queryClient.invalidateQueries('posts')
    setNum(prev => prev +1)
  }
})


  console.log("query ++++>", status, data, error);

  const handleMutation = (e) => {
    e.preventDefault()
     mutation.mutate({
            id: parseFloat(Date.now()),
            title: 'Do Laundry',
          })
  }
  return (<>
    <div>Todo</div>
    <form onSubmit={handleMutation}>
      <input type='text' />
      <button type='submit'>Post</button>
      <button type='button' onClick={() => {
        setNum(prev => prev +1)
      }}>Count</button>
    </form>
  </>)
}

export default Todo