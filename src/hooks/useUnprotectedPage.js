import {useHistory} from 'react-router-dom';
import {useLayoutEffect} from 'react';


const useUnprotectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('tokenRappi4C')
        if (token){
        history.push('/')    
        }
    }, [history])
}

export default useUnprotectedPage;