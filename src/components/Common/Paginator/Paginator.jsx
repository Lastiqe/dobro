import React, { useState } from "react";
import s from "./Paginator.module.css";
import { useEffect } from "react";

export const Paginator = React.memo((props) => {
    const [currentPage, setPage] = useState(0);
    const [localBeginPage, setLocalBeginPage] = useState(1);
    const [localEndPage, setlocalEndPage] = useState(5);
    const [pagesTotalCount, setPagesTotalCount] = useState(null);


    useEffect(() => {
        setPagesTotalCount(props.pages)

    }, [props])

    const changePage = page => {
        let start = page - 2;
        let end = page + 2;
        setPage(page);
        if (page <= 2) {
            setLocalBeginPage(1);
            setlocalEndPage(5);
        } else if (page < pagesTotalCount - 2) {
            setLocalBeginPage(start);
            setlocalEndPage(end);
        }

        if (page >= pagesTotalCount - 2) {
            setlocalEndPage(pagesTotalCount);
            setLocalBeginPage(pagesTotalCount - 4);
        }
        console.log(page);
        props.onPageChanged(page)

    };

    const pagintaionElements = [];
    const displayedElements = [];

    for (let i = 1; i <= pagesTotalCount; i++) {
        pagintaionElements.push(
            <span
                className={i === currentPage ? s.active : s.simple}
                onClick={() => changePage(i)}
                key={i}
            >
                <span className={s.btnChild}> {i}</span>
            </span>
        );
    }
    for (let i = localBeginPage - 1; i < localEndPage; i++) {
        displayedElements.push(pagintaionElements[i]);


    }

    return (
        <div>
            <div>
                <div>
                    {currentPage > 3 && pagintaionElements[0]}

                    {displayedElements}

                    {currentPage < pagesTotalCount - 2 && pagintaionElements[pagesTotalCount - 1]}
                </div>
                <div />
            </div>
        </div>
    );
});
