import React, { useEffect, useState } from 'react';
import { PublicNote } from '../../components';

import './styles.css'

const Forum = () => {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState('')

  const handleCategoryClick = (id) => {
    setCategoryId(id)
  }

  const clearCategory = () => {
    setCategoryId('')
  }

  useEffect(() => {
    async function loadCategory() {
      const response = await fetch('http://localhost:3000/forum');
      const data = await response.json();
      setCategory(data);
    }
    loadCategory()
  }, [])



  function showCategory() {
    return category.map(c => <div className='category-choice' onClick={() => {
      clearCategory();
      handleCategoryClick(c.note_category);
    }} key={c.note_category}>{c.note_category}</div>)
  }



  return (
    <>
      <div aria-label='note'>
        <div>
          {showCategory()}
        </div>
        {categoryId && <PublicNote id={categoryId} />}
      </div>
      <div>
        <Comment>asdas</Comment>
      </div>
    </>

  )
}

export default Forum
