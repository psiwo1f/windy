import React from 'react'
import DayCard from './DayCard';

const DaysRow = ({weather}) => {

   return (
    weather.forecast?.forecastday?.map((item,index)=>{
        const date = new Date(item.date);
        const options = { weekday: 'long' };
        let dayName = date.toLocaleDateString('en-US', options);
        dayName = dayName.split(',')[0];
        return (<DayCard key={index} item={item} dayName={dayName} />)
    })
   )
}

export default DaysRow