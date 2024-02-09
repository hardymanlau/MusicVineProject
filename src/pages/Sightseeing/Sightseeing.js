import React from 'react';
import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import "./Sightseeing.css";
import Header from "../../components/general-components/Header";
import MapParis from "./MapParis";
import MapEdinburgh from "./MapEdinburgh";


function Sightseeing() {

  return (
    <div>
      <NSNavbar />
      <Header text="SIGHTSEEING" />
      <div />
      <h2>Paris</h2>
      <br></br>
      <h5>Sites to see: </h5>
      <p className="sightseeing-description">
        <br></br>
        1. Eiffel Tower - Completed in 1889, this colossal landmark, although initially hated by many Parisians, is now a famous symbol of French civic pride. <br></br><br></br>
        2. Louvre Museum - As one of the largest, oldest, and grandest museums in the world, the Louvre hosts a treasure trove of artworks spanning <br></br> diverse cultures and periods of history.<br></br><br></br>
        3. Seine River - Hop on a river cruise or stroll alongside this famous waterway—it flows through the heart of Paris and separates the city's left and <br></br>right banks.<br></br><br></br>
        4. Basilique du Sacre-Coeur de Montmarte - This Montmartre landmark, a 19th-century basilica built by the French government following the <br></br>Franco-Prussian War, features a large medieval dome.<br></br><br></br>
        5. Arc du Triomphe - The Arc de triomphe was begun in 1806, on the orders of Napoleon I to honour the victories of his Grande Armée.<br></br><br></br>
      </p>

      <MapParis />

      <br></br>
      <br></br>
      <h2>Edinburgh</h2>
      <br></br>
      <h5>Sites to see: </h5>
      <p className="sightseeing-description">
        <br></br>
        1. Arthur’s Seat - is one of four hill forts, dating from around 2,000 years ago. Situated within Holyrood Park, as well as it's rich cultural heritage, <br></br> the park offers walks, solace, wildlife, volcanic geology and unparalleled vistas of the city. <br></br> <br></br>
        2. Edinburgh Castle - Edinburgh Castle is a world famous icon of Scotland and part of the Old and New Towns of Edinburgh’s World Heritage Site. <br></br> It was recently voted top UK Heritage Attraction in the British Travel Awards and is Scotland’s number one paid-for tourist attraction.<br></br><br></br>
        3. National Museum of Scotland - Explore the diversity of the natural world, world cultures, science and technology, art, design and fashion, <br></br>and Scottish history, all under one roof.<br></br><br></br>
        4. Royal Yacht Britannia - Step aboard Queen Elizabeth II’s former floating palace and experience this iconic attraction for yourself. Rated Tripadvisor’s <br></br> No.1 UK Attraction (AGAIN), Britannia is one of the most famous ships in the world…Royal Deck Tearoom.<br></br><br></br>
        5. Camera Obscura and World of Illusions - Winner of VisitScotland's Best Visitor Attraction Experience 2022/23! <br></br> We are Scotland’s oldest purpose-built attraction, established in 1835. Interact with over 100 illusions and get a breath of fresh air on our magnificent <br></br> Rooftop Terrace. <br></br><br></br>
      </p>

      <MapEdinburgh />
      
      <br></br>
      <br></br>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <NSFooter />
      </div>
    </div>

  );
}

export default Sightseeing;
