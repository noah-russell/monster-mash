import { getAllMonsters } from '../apiFunctions'
import {Monster} from '../../models/monster-models'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

function Menagerie() {
  const {
    data: monsters,
    isLoading,
    isError,
  } = useQuery(['monsters'], getAllMonsters, {})

  if(isLoading){
    return(<p>Monsters are being rounded up.</p>)
  }
  if(isError){
    return(<p>Oops, it appears there has been a mass breakout.</p>)
  }

  return (
    <>
      <div className="menagerie">
        {monsters &&
          monsters.map((monster:Monster) => {
            return (
              <> 
                <Link to={`/monster/${monster.id}`}>
                  <div className="menagerie-item">
                 
                    <img className='monster'
                      src={monster.image_url}
                      alt="Monster gallery thumbnail"
                    />
                     <img className='frame'
                      src='/galleryFrame.png'
                      alt="Monster gallery frame"
                    />
                    <div className = 'plaque'>
                    <h4>{monster.monster_name}</h4>
                    </div>
                 </div> 
                </Link>
              </>
            )
          })}
      </div>
    </>
  )
}

export default Menagerie
