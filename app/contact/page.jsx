'use client'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../components/config'

const Contact = () => {
  const [postImage , setPostImage]  = useState("")
  const [description , setDescription]  = useState("")
  const [title , setTitle]  = useState("")
  const [data , setData]  = useState([])
  const [updatedItemId , setUpdatedItemId] = useState("")
  const [isUpdated, setIsUpdated] = useState(false)
const getAllData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "post"));
    console.log("querySnapchot", querySnapshot);
    
    const documents = [];
    querySnapshot.forEach((userPost) => {
      documents.push({ id: userPost.id,
         ...userPost.data()
         });
    });
    setData(documents);
    console.log(documents);
    
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
}

  
const createData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      ...data,
      createdAt: new Date().toISOString()
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}
const deleteData = async (documentId) => {
  try {
    await deleteDoc(doc(db, "post", documentId));
    console.log("Document successfully deleted!");
    return documentId;
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
}
  const handleSubmit = async () => {
    const data = {
      postImage,
      description,
      title
    }
    if(isUpdated){
      // called the update one or if it is false then call the new document function 
      console.log("updated logic add");
      const updatedData= {
         postImage,
      description,
      title

      }
      updateData(updatedItemId,updatedData )
      
    }else{

    
    console.log("data", data)
    try {
      const docId = await createData(data);
      console.log("Document created with ID: ", docId);
    } catch (error) {
      console.error("Error creating document: ", error);
    }
    }
  }
  const updateData = async (documentId, updatedData) => {
  try {
    const docRef = doc(db, "post", documentId);
    await updateDoc(docRef, {
      ...updatedData,
      updatedAt: new Date().toISOString()
    });
    console.log("Document successfully updated!");
    return documentId;
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
}
  const deletePost = (id)=>{
    console.log("deleted item id",id);
    const deletedId = deleteData(id)
    console.log(deletedId);
    

    
  }
  const updatePost = (item)=>{
    console.log("item you want to updated ", item);
    setPostImage(item.postImage)
    setTitle(item.title)
    setDescription(item.description)
    setUpdatedItemId(item.id)
    setIsUpdated(true)
    
  }
  return (
    <div className='flex flex-col gap-4 align-center justify-center w-full bg-gray-200 mt-20'>
    
    <div className='flex flex-col gap-4 w-[70%]  '>
      
      <input  type="text"   value={postImage} onChange={(e)=>setPostImage(e.target.value)} placeholder='PostImage'/>
      <input type="text" value={description}onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
      <button className='bg-green-500 ms-2 p-2' onClick={handleSubmit}>Add Post </button> <br />
      
    

    <div>
      <div>
        <button className='bg-blue-500' onClick={getAllData}>Get All Post </button>
      </div>
      {data.map((item)=>{
        return(
          <div>
            
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img src={item.postImage} alt="" />

          
          <button className='bg-green-500 p-3' onClick={()=>updatePost(item)} >Update post  </button>
          
          <button className='bg-red-500 p-3' onClick={()=>deletePost(item.id)} >Delete A Post</button>
          </div>
        )

      })}
      
      </div>

    </div>
    </div>
    
  )

}
export default Contact
