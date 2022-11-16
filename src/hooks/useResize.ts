import {useState, useEffect} from 'react'

export default function useResponsiveBreakpoints() {
    const version = {
        desktop: { width: '20px', height: '20px' },
        mobile: { width: '10px', height: '10px' }
    }
      const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const resizeScrn = () => {
        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resizeScrn, false);
    }, [])


  return screenWidth > 1024 ? version.desktop : version.mobile
}