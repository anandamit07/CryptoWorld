import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { server } from '../index';
import { Container, Heading, HStack, VStack, Image, Text, Button } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';
const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [currency, setCurrency] = useState('inr');

    const btns = new Array(100).fill(1);
    const changePage = (page) => {
        setPage(page);
        setLoading(true);
    }
    useEffect(() => {
    const fetchCoins = async()=>{
        try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
        } catch(error){
            setError(true)
            setLoading(false)
        }
    }

    fetchCoins();
    }, [currency, page]);

    if(error) {
        return <ErrorComponent message="Error while fetching coins"/>;
    }
    
  return (
    <Container maxW={'container.xl'}>
        {
            loading ? <Loader/> : <>
                <HStack wrap={'wrap'}>
                    {coins.map((i) => (
                        <CoinCard key={i.id}
                        id={i.id}
                        name={i.name}
                        price={i.current_price}
                        img={i.image}
                        symbol={i.symbol}
                        //currencySymbol = {currencySymbol="₹"}
                         />
                    ))}
                </HStack>
                <HStack w={'full'} overflow={'auto'} margin={'auto'}>
                    {btns.map((item, index) =>
                        <Button colorScheme='blue' onClick={()=>changePage(index+1)}>{index+1}</Button>)

                    }
                </HStack>
            </>
        }
    </Container>
  )
}

export default Coins