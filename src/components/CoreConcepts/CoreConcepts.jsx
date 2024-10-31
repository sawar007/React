import { CORE_CONCEPTS } from "../../data"
import CoreConcept from './CoreConcept.jsx'

export default function CoreConcepts(props) {
    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}  ></CoreConcept>))}
            </ul>
        </section>
    )
}