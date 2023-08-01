import { useEffect, useState } from "react"

function Question({ id, faq, faqList, setFaqList, ans, isOpen }) {


    function openClose(faqId) {
        const updateFaqList = faqList.map((faq) => {
            if (faq.faq == faqId) {
                return { ...faq, isOpen: (isOpen === true ? false : true) }
            } else {
                return { ...faq }
            }
        })
        setFaqList(updateFaqList)
    }

    return (
        <>
            <li
                onClick={ () => {
                    openClose(id)
                    // console.log(faq)
                } }
            > { faq }</li>

            {
                isOpen &&
                <div>
                    <hr />
                    <p >{ ans }</p >
                </div>
            }
        </>
    )
}

export default Question