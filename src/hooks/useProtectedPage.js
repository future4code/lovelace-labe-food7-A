import {useHistory} from 'react-router-dom';
import {useLayoutEffect} from 'react';


const useProtectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('tokenRappi4C')
        if (!token){
        history.push('/login')   
        }
    }, [history])
}

export default useProtectedPage;