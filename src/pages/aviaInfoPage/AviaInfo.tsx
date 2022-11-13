import React from 'react'
import { useAppSelector } from '../../hook';
import SingleCard from '../../components/singleCard/SingleCard';
import DoubleCard from '../../components/doubleCard/DoubleCard';

const AviaInfo: React.FC = () => {

    const tickets = useAppSelector(state => state.tickets)

    if (tickets.becomeDate) {
        return <DoubleCard />
    } else {
        return <SingleCard />
    }
}

export default AviaInfo;