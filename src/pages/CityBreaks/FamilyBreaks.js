import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import Header from "../../components/general-components/Header";
import Reviews from "../../components/CityBreaks/Reviews";
import CityOptions from "../../components/CityBreaks/CityOptions";
import ParisOne from './images/Paris-5 (1).jpg'
import ParisTwo from './images/paris_architecture_france_835467.jpg'
import ParisThree from './images/Pont-de-la-Concorde-04-©-French-Moments.jpg'
import ParisFour from './images/TAM_2032-0c3adf634a31477494dd54358f545204.jpg'
import ParisFive from './images/EiffelTower.jpg'
import JamesThomas from './images/profileOfMan.jpg'
import EdiOne from './images/Edinburgh-Castle-Scotland.jpg'
import EdiTwo from './images/Edinburgh-Royal-Mile.jpg'
import EdiThree from './images/Edinburgh-skyline.jpg'
import EdiFour from './images/edinburgh-calton_hill.jpg'
import EdiFive from './images/old-town-in-edinburgh.jpg'
import AbigailWilliams from './images/profileOfWoman.jpg'
import Footer from "../../components/CityBreaks/Footer";
import Amsterdam from './images/amsterdam-canals-netherlands-shutterstock_245749633.jpg'
import Vienna from './images/Vienna.jpg'

function FamilyBreaks() {
	return (
		<div>
			<NSNavbar />
            <Header text="FAMILY BREAKS"/>
            <Reviews 
                src={JamesThomas}
                name="JAMES THOMAS" 
                review="My partner and I visited Paris for the first time for our Honeymoon and it couldn’t have been better! 
                After planning a wedding, we didn’t want to plan our Honeymoon too, so NS Travel Services did it all for us!"
            />
            <CityOptions 
                cityName="Reykjavik"
                cityInfo="Reykjavik is a major metropolis shrunk to small-town size 
                – perfect for a family-sized city break.
                You'll find all the important stuff for grown-ups – national museums, landmark churches, historic architecture 
                – and also the important stuff for kids, from geothermally-heated swimming pools to whale-watching tours.
                Reykjavík is a city that is well attuned to tiny travelers. For one thing, it's famously safe for children. 
                Locals are happy to let infants and toddlers sleep outside in their strollers, 
                while older kids are free to roam the suburbs and stay out late during the bright summer evenings."
                srcFirst={ParisOne} altOne="Parisian bridge at sunset"
                srcSecond={ParisTwo} altTwo="Arc de Triomphe in Paris"
                srcThird={ParisThree} altThree="Brick bridge over the Seine"
                srcFour={ParisFour} altFour="The Louvre in the square"
                srcFive={ParisFive} altFive="Couple kissing in front of the Eiffel Tower"
            />            
            <CityOptions 
                cityName="Copenhagen"
                cityInfo="In Copenhagen, we love kids! And kids usually love Copenhagen. 
                Plenty of space, 125 public playgrounds, and child-friendly attractions 
                set the scene for a good time in the city for kids of all ages.
                Parents can feel comfortable too as Copenhagen is a city designed to match the needs of kids and their parents. 
                See where you can feed your baby, rent the baby equipment that is too much of a hassle to bring, 
                and find out what you want to explore with your children."
                srcFirst={EdiOne} altOne="View of Edinburgh Castle in the cliffs from the park below"
                srcSecond={EdiTwo} altTwo="View of Edinburgh's Royal Mile looking down from the Castle"
                srcThird={EdiThree} altThree="Edinburgh skyline at dusk"
                srcFour={EdiFour} altFour="View of Edinburgh from Calton Hill"
                srcFive={EdiFive} altFive="Looking at Edinburgh old town from across the bridge over the station"
            />
            <Reviews 
                src={AbigailWilliams}
                name="ABIGAIL WILLIAMS" 
                review="Edinburgh is a truly cosmopolitan City that has something for everyone. 
                The City is relatively small, so it is easy to get around and see a lot in a few days. 
                And with NS Travel Services providing the itinerary, it's so hassle-free!" 
            />
            <Footer 
                srcOne={Amsterdam} 
                cityName="AMSTERDAM" 
                altOne="Amsterdam canal at sunset"
                srcTwo={Vienna} 
                cityNameTwo="VIENNA" 
                altTwo="Lone man in front of Belvedre Palace in Vienna"            
            />
            <NSFooter />
		</div>
	);
}

export default FamilyBreaks;
