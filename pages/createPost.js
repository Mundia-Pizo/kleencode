import React from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from "next/dynamic";
import homeStyles from '../styles/Home.module.css'
// import EditorToolbar from './components.js/EditorToolBar'


import { useState } from "react";
// import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

function createPost() {
    const [value, setValue] = useState('')
  return (
    <div className={homeStyles.rich_text}>
      <ReactQuill
         theme='snow'
          placeholder={"Write something awesome..."}
        />
    </div>
    
    )
}

export default createPost;


// const createPost = () => {
//   return (
//     <div className={homeStyles.rich_text}>
//       <QuillNoSSRWrapper theme="snow" />
//     </div>
//     // <div>
//     //   <QuillNoSSRWrapper
//     //     theme="snow"
//     //     value={state.value}
//     //     onChange={handleChange}
//     //     placeholder={"Write something awesome..."}
//     //     modules={modules}
//     //     formats={formats}
//     //   />
//     // </div>
//   )
// }

// export default createPost

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
	ssr: false,
	loading: () => <p>Loading ...</p>,
	})