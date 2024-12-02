"use client"

import { useEffect, useState } from "react"

function CustomerPortal() {
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
      src="https://customerservice.agentinsure.com/EzlynxCustomerService/mohame/Account/LogIn"
      name="Customer Service Portal"
      height={`${iframeHeight}px`}
      width="100%"
      className="overflow-hidden border-none bg-primary text-primary"
    >
      Your browser is unable to display frames. Please{" "}
      <a href="https://customerservice.agentinsure.com/EzlynxCustomerService/mohame/Account/LogIn">
        click here
      </a>{" "}
      to visit our secure customer service portal.
    </iframe>
  )
}

export default CustomerPortal
