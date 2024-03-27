import React from 'react'
import './navigation.less'
import DirItem from './DirItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearStack, setCurrentDir } from '../../../reducers/fileReducer'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    const dispatch = useDispatch()
    const dirStructure = useSelector((state) => state.files.dirStructure)
    const hasChildren = dirStructure && dirStructure.length > 0


    function openHandler() {
        dispatch(clearStack())
        dispatch(setCurrentDir(null))
    }
    

  return (
    <div className='navigation'>
      
      <div className="navigation__item">
      <NavLink to="/">
        <div className="navigation__title"  onClick={() => openHandler()}>
          My Cloud
        </div>
        </NavLink>
        <div className="navigation__content">
          {hasChildren && (
            <div className="navigation__element">
              {dirStructure.map((dir) => 
                <DirItem file={dir} title={dir.name} key={dir.path}/>
              )}
            </div>
          )}
        </div>
      </div>
      

      <div className="navigation__item">
        <div className="navigation__title">
          Menu Item 2
        </div>
      </div>

      <div className="navigation__item">
        <div className="navigation__title">
          Menu Item 3
        </div>
      </div>
        
        
        
    </div>
  )
}

export default Navigation