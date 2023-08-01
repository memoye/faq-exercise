import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question'

function App() {
  const faqs = [
    { faq: 'What is the FIDELITY Green Rewards Program?', ans: "The Fidelity Green Rewards Programme is a customer rewards programme from Fidelity Bank PLC designed to express our gratitude to our loyal customers. Customers can earn loyalty points by simply carrying out transactions (bill payments, airtime purchase, funds transfer, etc.) on any of our alternative banking channels such as the Fidelity Mobile App, Fidelity ATMs, Fidelity POSs, Fidelity *770# (Instant Banking), etc. Points earned can be redeemed for exciting items in our catalogues on the Green Rewards Mart.", isOpen: false },
    { faq: 'Is there any cost for participating in Fidelity Green Rewards Programme?', ans: "No. The programme is offered at no cost to customers.", isOpen: false },
    { faq: 'If a customer holds more than one applicable Fidelity Bank product/service, would he/she be automatically linked to the same Fidelity Green Rewards account?', ans: "NYes, as long as these accounts/products/services are all linked to one unique customer.", isOpen: false },
    { faq: 'Do I have to be resident in Nigeria to benefit from this programme?', ans: "Yes. This programme is only for Fidelity Bank customers resident in Nigeria.", isOpen: false }
  ]

  const [faqList, setFaqList] = useState(faqs)





  return (
    <>
      <h1>Some Frequently Asked Questions</h1>
      <p>Green Rewards is not just earning points and redeeming loyalty points. Green Rewards is about so much more.</p>
      <ol className='list-container'>
        {
          faqList.map((question, index) => {
            return (
              <Question
                key={ index }
                { ...question }
                faqList={ faqList }
                setFaqList={ setFaqList }
                id={ question.faq }

              />
            )
          })
        }

      </ol>
    </>
  )
}

export default App
