import React from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";
import homeStyles from '../styles/Home.module.css'

const createPost = () => {
  return (
    <div className={homeStyles.rich_text}>
      <QuillNoSSRWrapper theme="snow" />
    </div>
  )
}

export default createPost

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})