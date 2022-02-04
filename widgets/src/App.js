import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items =[
    {
        title: 'What is React',
        content: 'react is....',
    },
    {
        title: 'What is React2',
        content: 'react is2....',
    },
    {
        title: 'What is React3',
        content: 'react is3....',
    },
];

const options = [
    {
        label: 'select red',
        value: 'red',
    },
    {
        label: 'select green',
        value: 'green',
    },
    {
        label: 'select blue',
        value: 'blue',
    },
];

const App = () =>{
    const [selected, setSelected] = useState(0); 

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route> 
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}  
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;