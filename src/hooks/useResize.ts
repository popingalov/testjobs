import {useState, useRef,useEffect} from 'react'

export default function useResponsiveBreakpoints() {
    const version = {
        desktop: { width: '20px', height: '20px' },
        mobile: { width: '10px', height: '10px' }
    }
    const elRef = document.getElementById('root')
    const [breakSize, setBreakSize] = useState(version.desktop)
    const observer = useRef(
    new ResizeObserver(entries => {
        const { width } = entries[0].contentRect
       
        if (width < 767) {
            setBreakSize(version.mobile)    
            return
        }
         setBreakSize(version.desktop)  
    })
  )

  useEffect(() => {
    //щоб не ругало
    const miniFisx = observer
      if (elRef) {
       
      observer.current.observe(elRef)
  
  return () => {
      miniFisx.current.unobserve(elRef)
    }
}
  
  }, [elRef, observer])

  return breakSize
}