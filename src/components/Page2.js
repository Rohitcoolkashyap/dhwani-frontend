import React from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import './page2.css';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Page2() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 6000);
    return () => {
      clearTimeout(timer1);
    };
  });
  return (
    <div className="page2">
      <Link to="/">
        <button>Go to Page 1</button>
      </Link>
      {isVisible && (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            // Just add this option
            is3D: true,
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      )}
    </div>
  );
}
