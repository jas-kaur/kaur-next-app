"use client"
import React, { useState } from 'react';
import Post from '@/components/Post'
import { Result } from 'postcss'

const NewPost = () => {
  const[form, setForm] = useState({
    title: '',
    author: '',
    body: ''
  })

  const handleChange = (e) => {
    const id = e.target.id

    setForm({
      ...form,
      [id]: e.target.value
    })
  }

  const handleSubmit = async () => {
    const response = await fetch('/api/posts/', {
      method: 'POST',
      body: JSON.stringify(form)
    })

    const data = await response.json()

    console.log(data)
  }


  return (
    <div className='flex flex-col gap-2'>
       Create New Page
       {/* Title */}
       <label htmlFor='title'>Title</label>
       <input type='text' id= 'title' value={form.title} onChange={handleChange} />
       {/* Author */}
       <label htmlFor='author'>Author</label>
       <input type='text' id= 'author' value={form.author} onChange={handleChange} />
       {/* Body */}
       <label htmlFor='body'>Body</label>
       <input type='text' id= 'body' value={form.body} onChange={handleChange} />
       <Button onClick={handleSubmit} text="Submit"></Button>
    </div>
  )
}

export default NewPost