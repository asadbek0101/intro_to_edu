import React, { useEffect, useState } from "react"

export default function Loading(){

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false)
        }, 3000);
        return () => clearTimeout(timer);
      }, [setIsLoading]);

    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center text-center">
            {isLoading && (
            <div className="spinner-border text-primary" role="status">
            </div>
            )}
            {!isLoading && (
                <span>Empty</span>
            )}
        </div>
    )
}