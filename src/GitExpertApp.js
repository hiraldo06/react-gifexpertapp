import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = () => {
    //const categories=['One Punch', 'Samurai x', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd=()=>{
    //     setCategoies([...categories,'HOla'])
    // }

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((category,i)=>(
                        < GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}



export default GitExpertApp
