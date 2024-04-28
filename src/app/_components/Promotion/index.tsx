"use client"

import React, { useEffect, useState } from 'react'
import classes from './index.module.scss';

const Promotion = () => {

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();
            if (difference <= 0) {
                clearInterval(intervalId);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTime({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={classes.promotion}>
            <div className={classes.textBox}>
                <h3 className={classes.title}>Deals of the Month</h3>
                <p>This month, treat yourself to a tech upgrade without breaking the bank!
                    Our Deals of the Month offer incredible savings on your favorite gadgets and gear.
                    But wait, there's more! Every purchase comes with exclusive perks and offers,
                    making it the perfect time to snag that must-have item you've been eyeing.
                    Browse our curated selection of discounted tech and discover amazing deals
                    you won't find anywhere else. Don't miss out – these offers won't last forever!</p>
                <ul className={classes.stats}>
                    <StatBox label="Days" value={time.days} />
                    <StatBox label="Hours" value={time.hours} />
                    <StatBox label="Minutes" value={time.minutes} />
                    <StatBox label="Seconds" value={time.seconds} />
                </ul>
            </div>
        </section>
    )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
    <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
    </li>
)

export default Promotion
