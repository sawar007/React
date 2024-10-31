import TabButton from '../TabButton/TabButton';
import { useState } from 'react';
import { EXAMPLES } from "../../data"
import Tabs from '../Tabs';


export default function Examples() {
    const [selectedValue, setSelectedValue] = useState()
    function clickHandler(selectedButton) {
        setSelectedValue(selectedButton);
        console.log(selectedButton);

    }
    let selectedContent = <p>Please select a button!</p>
    if (selectedValue) {
        selectedContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedValue].title}</h3>
            <p>{EXAMPLES[selectedValue].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedValue].code}
                </code>
            </pre>
        </div>
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <Tabs  ButtonContainter = "menu" button={<>
                <TabButton isSelected={selectedValue === 'components'} onClick={() => clickHandler('components')}>Components</TabButton>
                <TabButton isSelected={selectedValue === 'jsx'} onClick={() => clickHandler('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedValue === 'props'} onClick={() => clickHandler('props')}> Props</TabButton>
                <TabButton isSelected={selectedValue === 'state'} onClick={() => clickHandler('state')}>State</TabButton>
                </>}> {selectedContent}</Tabs>

        </section>
    )
}