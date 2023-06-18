import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import TextForm from './pages/TextForm';
import NewNoteBtnText from './pages/NewNoteBtnText';
import ImageForm from './pages/ImageForm';
import ListForm from './pages/list-form/ListForm';
import AddListElement from './pages/list-form/AddListElement';
import ChangeTextPage from './pages/ChangeTextPage';
import ChangeImgPage from './pages/ChangeImgPage';
import ChangeListPage from './pages/ChangeListPage';

function App() {
  return (
    <div> 
      <Routes> 
        <Route path='/' element={<Main />} />  
        <Route path='/createNew-form' element={<NewNoteBtnText />} />
        <Route path='/text-form' element={<TextForm />} />
        <Route path='/image-form' element={<ImageForm />} />
        <Route path='/list-form' element={<ListForm />} />
        <Route path='/add-list-element' element={<AddListElement />} />
        <Route path='changeText/:id' element={<ChangeTextPage />} />
        <Route path='changeImg/:id' element={<ChangeImgPage />} />
        <Route path='changeList/:id' element={<ChangeListPage />} />
      </Routes>
    </div>
  );
}
 
export default App;