

import React from 'react';
import ReactDOM from 'react-dom/client';

function avilabletime() {
  return (
    <form>
      <label>10:00-11:00</label><button>Book</button>
      <label>11:00-12:00</label><button>Book</button>
    </form>
  )
}
export default avilabletime;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />)