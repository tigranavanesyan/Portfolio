import React, {useEffect, useState} from 'react';
import { Pagination } from 'react-bootstrap';
import PortfolioItem from "../PortfolioItems/PortfolioItem";
import s from './PaginationComponent.module.css'

const PaginationComponent = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {
        paginate(1)
    }, [data]);

    return (
        <div>
            <div className={(data.length < itemsPerPage) ? s.paginationHide : ""}>
                <Pagination>
                    {Array.from({length: Math.ceil(data.length / itemsPerPage)}).map((_, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage}
                                         onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
            <div className={s.grid}>
                {currentItems.map((item, ind) => (
                    <div key={item.title}>
                        <PortfolioItem work={data[ind + ((itemsPerPage * (currentPage - 1)))]}/>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default PaginationComponent;