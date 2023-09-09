'use client';

import Image from 'next/image';
import React from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ReactQuill from 'react-quill';
// import dynamic from 'next/dynamic';
import "react-quill/dist/quill.bubble.css";

import { ArrowDown } from '@icons/arrowDown';

import { storage } from '@config/firebase';
import styles from './writePage.module.css'
import { Add } from '@icons/add';
import { AddImage } from '@icons/image';
import { AddVideo } from '@icons/video';
import { Upload } from '@icons/upload';

const categories = [
   'style',
   'fashion',
   'food',
   'culture',
   'SEO',
   'travel',
   'coding'
]

const WritePage = () => {
   const [open, setOpen] = React.useState(false)
   const [title, setTitle] = React.useState('')
   const [file, setFile] = React.useState(null)
   const [imageUrl, setImageUrl] = React.useState('')
   const [category, setCategory] = React.useState('style')
   const [description, setDescription] = React.useState('')

   const dropdown = React.useRef(null);

   const router = useRouter()
   const { status } = useSession()
   // const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

   React.useEffect(() => {
      const upload = () => {
         const name = new Date().getTime() + file.name;

         const storageRef = ref(storage, name);
         const uploadTask = uploadBytesResumable(storageRef, file);

         uploadTask.on('state_changed',
            (snapshot) => {
               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

               console.log('Upload is ' + progress + '% done');

               switch (snapshot.state) {
                  case 'paused':
                     console.log('Upload is paused');
                     break;
                  case 'running':
                     console.log('Upload is running');
                     break;
               }
            },
            (error) => { },
            () => {
               getDownloadURL(uploadTask.snapshot.ref)
                  .then((downloadURL) => {
                     setImageUrl(downloadURL);
                  });
            }
         );
      }

      file && upload()
   }, [file])

   if (status === 'loading') {
      return <div className={styles.loading}>Loading...</div>
   }

   if (status !== 'authenticated') {
      router.push('/login')
   }

   const slugify = (str) =>
      str
         .toLowerCase()
         .trim()
         .replace(/[^\w\s-]/g, "")
         .replace(/[\s_-]+/g, "-")
         .replace(/^-+|-+$/g, "");

   const handleSubmit = async () => {
      const res = await fetch('/api/posts', {
         method: 'POST',
         body: JSON.stringify({
            title,
            description,
            img: imageUrl,
            slug: slugify(title),
            catSlug: category
         })
      })

      console.log(res);
   }

   /* const closeDropdown = () => {
      dropdown.current?.classList.remove('show')
   } */

   const toggleDropdown = (e) => {
      e.stopPropagation()
      dropdown.current?.classList.toggle('show')
   }

   const handleCategory = (e) => {
      if (categories.includes(e.target.textContent)) {
         setCategory(e.target.textContent)
      }

      dropdown.current?.classList.toggle('show')
   }

   return (
      <div className={styles.container}>
         <input
            type='text'
            placeholder='Blog title'
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />

         <div className='dropdown__container'>
            <span>Select a category</span>
            <div className='dropdown'>
               <button className='dropdown__btn' onClick={toggleDropdown}>
                  {category || 'style'} <ArrowDown />
               </button>
               <div className='dropdown__content' ref={dropdown} onClick={handleCategory}>
                  {categories.map((cat, i) => (
                     <span key={i}>{cat}</span>
                  ))}
               </div>
            </div>
         </div>

         <div className={styles.editor}>
            <div className={styles.addAsset}>
               <button className={styles.button} onClick={() => setOpen(!open)}>
                  <Add />
               </button>
               {open && (
                  <div className={styles.add}>
                     <input
                        type="file"
                        id="image"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                     />
                     <button className={styles.addButton}>
                        <label htmlFor="image">
                           <AddImage />
                        </label>
                     </button>
                     <button className={styles.addButton}>
                        <Upload />
                     </button>
                     <button className={styles.addButton}>
                        <AddVideo />
                     </button>
                  </div>
               )}
            </div>
            <ReactQuill
               className={styles.textArea}
               theme="bubble"
               value={description}
               onChange={setDescription}
               placeholder="Write blog description..."
            />
         </div>
         <button className={styles.publish} onClick={handleSubmit}>
            Publish
         </button>
      </div>
   )
}

export default WritePage