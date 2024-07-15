import React, {useEffect, useState} from 'react';
import s from './TabsByCategories.module.css'
import TabBtn from "../ui/TabBtn/TabBtn";
import works from '../../data/works'
import PaginationComponent from "../PaginationComponent/PaginationComponent";

function TabsByCategories(props) {
    const [selectedCategory,SetSelectedCategory] = useState("All")
    const [categoriesArray, setCategoriesArray] = useState([])
    const [filteredArray, setFilteredArray] = useState([])
    const [id,setId] = useState(0)


    const tabChange = (cat,idbtn)=>{
        SetSelectedCategory(cat)
        if(cat === 'All'){
            setFilteredArray(works)
        } else {
            setFilteredArray(works.filter(work => work.technologies.includes(cat)))
        }
        setId(idbtn)
    }

    useEffect(() => {
        let arr = Array.from(new Set(works.flatMap(work => work.technologies)))
        arr.unshift('All')
        setCategoriesArray(arr)
        tabChange(selectedCategory,0)
    }, []);

    return (
        <div className={s.wrapper}>
            <div className={s.tabs}>
                {categoriesArray.map((item, index) => {
                    return <div key={index}>
                        <TabBtn tabChange={tabChange} id={index} text={item} active={id === index}/>
                    </div>
                })}
            </div>
            <h4>Here are {filteredArray.length} projects in which I used {selectedCategory}</h4>
            <PaginationComponent data={filteredArray} itemsPerPage={6}/>
        </div>
    );
}

export default TabsByCategories;