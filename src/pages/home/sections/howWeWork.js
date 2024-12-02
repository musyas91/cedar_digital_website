import Heading from "../../../components/heading";
import '../css/howWeWork.css';
import BottomToTopTransition from "../../../components/transitionContainer";
import HowWeWorkItem from "../components/howWeWorkItem";
import development from '../../../assets/icons/development.svg';
import launch from '../../../assets/icons/launch.svg';
import strategy from '../../../assets/icons/strategy.svg';
import validation from '../../../assets/icons/validation.svg';
import planning from '../../../assets/icons/planning.svg';
import WorkPropositionCard from "../components/workPropositionCard";

const HowWeWork = () => {
    const values = [
        {title: "Validation of Idea", icon: validation},
        {title: "Strategy Development", icon: strategy},
        {title: "MVP Development", icon: development},
        {title: "Go-To-Market Planning", icon: planning},
        {title: "Product Launch", icon: launch},
    ];

    const descriptiveValues = [
        {heading: "Product Ideation and Market Validation", description: "We help businesses reduce investment risks by guiding them through a structured ideation process and ensuring a strong product-market fit thorough validation techniques, customer insights, and early testing."},
        {heading: "Scalable Product Management", description: "We help businesses reduce investment risks by guiding them through a structured ideation process and ensuring a strong product-market fit thorough validation techniques, customer insights, and early testing."},
        {heading: "Optimized Go-to-market strategies", description: "We develop comprehensive go-to-market plans to drive product success, aligning marketing, sales, and operational efforts to ensure efficient product launches"},
        {heading: "Data-Driven Growth", description: "We develop comprehensive go-to-market plans to drive product success, aligning marketing, sales, and operational efforts to ensure efficient product launches"},
    ];
    return(
        <div className="main" id="about">
            <BottomToTopTransition>
                <Heading text={"How We Work"} color={"black"}/>
            </BottomToTopTransition>
            <BottomToTopTransition>
                <div className="work-items-list">
                    
                        {values.map((value, index) => (
                            <HowWeWorkItem icon={value.icon} text={value.title}/>
                        ))}
                </div>
            </BottomToTopTransition>
            <br/><br/><br/>
            <div className="work-proposition-grid">
            {
                descriptiveValues.map((value)=> (
                    <WorkPropositionCard heading={value.heading} description={value.description}/>
                ))
            }
            </div>
            
        </div>
    );
}

export default HowWeWork;