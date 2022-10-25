import React from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";

const posts = () => {
  return (
    <QuillNoSSRWrapper  theme="snow" />
  )
}

export default posts

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})