import React, { useEffect, useState } from 'react';
import { PublicNote } from '../../components';

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
    return category.map(c => <div onClick={() => {
      clearCategory();
      handleCategoryClick(c.note_category);
    }} key={c.note_category}>{c.note_category}</div>)
    // notes.map(n => <Note key={n.note_id} id={n.note_id} title={n.note_title} content={n.note_content} category={n.note_category}/>)
  }



  return (
    <div aria-label='note'>
      <div>
        {showCategory()}
      </div>
      {categoryId && <PublicNote id={categoryId} />}
    </div>
  )
}

export default Forum
