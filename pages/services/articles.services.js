import { db } from '../config/firebase'

import {getDocs,getDoc, doc, updateDoc, deleteDoc, addDoc, collection, } from 'firebase/firestore';


const articleCollectionRef = collection(db, 'Articles')


class ArticleServices {

    addArticle = (newArticle) => {
        return addDoc(articleCollectionRef, newArticle);
    };
    updateArticles = (id, updatedArticle) => {
        const articleDoc = doc(db, 'Articles', id);
        return updateDoc(articleDoc, updatedArticle);    
    };
    deleteArticles = (id) => {
        const articleDoc = doc(db, 'Articles', id);
        return deleteDoc(articleDoc);    
    };
    getAllArtilces = () => {
        return getDocs(articleCollectionRef)
    };
    getArticle = () => {
        const articleDoc = doc(db, 'Articles', id);
        return getDoc(articleDoc)
         
    };


};

export default new ArticleServices();