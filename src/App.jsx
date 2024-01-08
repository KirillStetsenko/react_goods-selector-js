import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  function isSelected(good) {
    return selectedGood === good;
  }

  return (
    <main className="section container">
      {selectedGood !== null ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood(null);
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={isSelected(good)
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                <button
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${isSelected(good) ? 'is-info' : ''}`}
                  onClick={() => {
                    setSelectedGood(isSelected(good) ? null : good);
                  }}
                >
                  {isSelected(good) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
