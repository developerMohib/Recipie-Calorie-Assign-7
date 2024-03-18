
import './App.css'
import Banner from './assets/component/Banner/Banner'
import Header from './assets/component/Header/Header'
import RecipieDisplay from './assets/component/RecipieDisplay/RecipieDisplay'
import RecipieList from './assets/component/RecipieList/RecipieList'
import TitleText from './assets/component/TitleText/TitleText'
import { useState } from "react";

function App() {

  const [cook, setCook] = useState( [] );
  const [newCook, setNewCook] = useState( [] );

  const handleCook = (recipie) => {
    const isExist = cook.find( recip => recip.recipe_id == recipie.recipe_id );
    console.log(isExist);
    if(!isExist){
      setCook( [...cook, recipie] );
    }
    else{
      alert('Vat khan mia');
    }
  }
  const handleDelete = (id) => {
    console.log('alhamdulliah',id);
    const isExist = cook.filter( items => items.id !== id );
    if(isExist){
      setNewCook([...newCook, id]);
    }
  }

console.log(cook);
console.log(newCook);
  return (
    <>
      <Header>  </Header>
      <Banner> </Banner>
      <TitleText> </TitleText>
      <div className='lg:grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <RecipieDisplay handleCook = {handleCook} > </RecipieDisplay>
        </div>
        <div>
          <RecipieList cook = {cook} handleDelete = {handleDelete} > </RecipieList>
        </div>
      </div>
    </>
  )
}

export default App
