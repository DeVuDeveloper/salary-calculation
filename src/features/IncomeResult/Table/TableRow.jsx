import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { formatNumber } from '../../../utils/numbers';

export const TableRow = ({ item }) => {
  const location = useLocation();
  const { state } = location;

  let classHighlightRow = ''

  if (state.frequency === item.frequency) classHighlightRow = 'text-blue-300'

  return (
    <tr className='bg-black bg-opacity-20' key={item.frequency}>
      <td className={`px-6 py-4 whitespace-nowrap ${classHighlightRow}`}>
        {item.frequency}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${classHighlightRow}`}>
        {formatNumber(item.grossIncome)}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${classHighlightRow}`}>
        {formatNumber(item.tax)}
      </td>
      <td className={`px-6 py-4 whitespace-nowrap ${classHighlightRow}`}>
        {formatNumber(item.netIncome)}
      </td>
    </tr>
  )
};

TableRow.propTypes = {
  item: PropTypes.object,
};
