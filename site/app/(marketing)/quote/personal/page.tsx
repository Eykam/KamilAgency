"use client"

// async function QuoteEmbed() {
//   const res = await fetch(
//     "https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx"
//   )
//   const data = await res.text()
//   console.log(data)

//   return <div dangerouslySetInnerHTML={{ __html: data }}></div>
// }

import { useEffect, useState } from "react"

function QuoteEmbed() {
  const [isClient, setIsClient] = useState(false)
  const [iframeHeight, setIframeHeight] = useState(0)

  useEffect(() => {
    const calculateHeight = () => {
      const viewportHeight = window.innerHeight
      // Subtract estimated footer height
      setIframeHeight(Math.floor(viewportHeight))
    }

    setIsClient(true)
    calculateHeight()
    window.addEventListener("resize", calculateHeight)

    return () => window.removeEventListener("resize", calculateHeight)
  }, [])

  if (!isClient) return null

  return (
    <iframe
      src="https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx"
      name="Secure Live Insurance Quoting"
      height={`${iframeHeight}px`}
      width="100%"
      className="overflow-hidden border-none bg-primary text-primary"
    >
      Your browser is unable to display frames. Please{" "}
      <a href="https://www.agentinsure.com/compare/auto-insurance-home-insurance/mohame/quote.aspx">
        click here
      </a>{" "}
      to visit the secure live insurance quoting page.
    </iframe>
  )
}

export default QuoteEmbed
