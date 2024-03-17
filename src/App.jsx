
import './App.css'
import Banner from './assets/component/Banner/Banner'
import Header from './assets/component/Header/Header'
import RecipieDisplay from './assets/component/RecipieDisplay/RecipieDisplay'
import RecipieList from './assets/component/RecipieList/RecipieList'
import TitleText from './assets/component/TitleText/TitleText'

function App() {

  return (
    <>
      <Header>  </Header>
      <Banner> </Banner>
      <TitleText> </TitleText>
      <div className='lg:grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <RecipieDisplay> </RecipieDisplay>
        </div>
        <div>
          <RecipieList> </RecipieList>
        </div>
      </div>
    </>
  )
}

export default App
