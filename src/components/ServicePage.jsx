import React, { useState, useEffect } from 'react';

const serviceDetails = {
  'bamboo-decking': {
    title: 'Moso Bamboo Decking',
    subtitle: 'Carbon-Negative Outdoor Decking Solutions',
    heroImage: '/images/tanda_tula_walkway.jpg',
    gallery: [
      { src: '/images/bamboo_advantage_lifespan.jpg', caption: 'MOSO® Bamboo X-treme® grooved decking with long lifespan' },
      { src: '/images/bamboo_advantage_durability.jpg', caption: 'MOSO® Bamboo chevron herringbone board layout' },
      { src: '/images/bamboo_advantage_natural.jpg', caption: 'Moso Bamboo natural warm look terrace decking' },
      { src: '/images/bamboo_advantage_sustainability.jpg', caption: 'Sustainable diagonal bamboo decking installation' }
    ],
    description: 'MOSO® Bamboo X-treme® and N-durance® decking boards represent the peak of eco-friendly, carbon-negative outdoor living. Made from fast-growing Moso bamboo fibers thermo-treated at 200°C and compressed under high pressure, these boards achieve Class 1 durability (EN 350-1) and Class Bfl-s1 fire safety ratings. They are harder, more stable, and more durable than traditional hardwoods.',
    specsTitle: 'Decking Spec Comparison',
    specsHeaders: ['Features', 'MOSO® Bamboo X-treme®', 'Garapa Hardwood', 'Traditional Composite'],
    specsRows: [
      ['Sustainability', 'Carbon-negative life cycle', 'Slow growth, high footprint', 'Petroleum-based plastics'],
      ['Janka Hardness', '9.5 kg/mm² (Extremely hard)', '8.2 kg/mm²', 'Variable (typically soft)'],
      ['Durability Class', 'Class 1 (EN 350-1)', 'Class 2 (EN 350-1)', 'Class 1 - 2 (Synthetic)'],
      ['Fire Resistance', 'Class Bfl-s1 (Flame retardant)', 'Class D', 'Class E - D'],
      ['Maintenance', 'Periodic oiling to retain color', 'Sanding & oiling twice/yr', 'Cleaning only']
    ],
    sansTitle: 'SANS Timber & Bamboo Decking Compliance',
    sansRules: [
      { rule: 'Elevated Post Anchors', desc: 'SANS 10400 Part M requires all structural columns elevated above 600mm to have hot-dip galvanized brackets anchored into concrete footings.' },
      { rule: 'Subframe Load Bearing', desc: 'Structural post spacing must conform to design loads. Joists must be spaced at 350mm to 400mm centers to prevent board deflection.' },
      { rule: 'Safety Balustrades', desc: 'Decks with a fall height greater than 600mm must have safety handrails at least 1.0m high, with balusters spaced no wider than 100mm.' }
    ],
    process: [
      { step: '01', title: 'Laser Alignment & Leveling', desc: 'Taking digital measurements of the garden layout and casting solid concrete column foundations.' },
      { step: '02', title: 'Support Subframe Construction', desc: 'Assembling the structural subframe using H3 treated structural pine or galvanized steel joists.' },
      { step: '03', title: 'Hidden Cobra Clip Layout', desc: 'Securing the grooved Moso Bamboo boards using stainless steel Cobra clips, leaving an invisible screwless surface.' },
      { step: '04', title: 'Perimeter Fascia & Sealing', desc: 'Installing matching bamboo fascia boards, sanding joints, and applying a protective coat of Woca outdoor wood oil.' }
    ],
    caseStudy: {
      title: 'Tanda Tula Safari Camp Curved Walkway',
      location: 'Timbavati Nature Reserve',
      scope: 'Supply and installation of 120m² MOSO® Bamboo X-treme® elevated curved walkway and deck.',
      timeline: '14 Days',
      budget: 'R420,000',
      description: 'Constructed on raised steel columns over sandy bushveld soil. The curved design mirrors the river bed, offering guests a safe, durable, and highly sustainable walkway that blends into nature.',
      clientQuote: '"The bamboo boards are incredibly tough and look beautiful in the wilderness. SWDF SA did a phenomenal job under tight conditions."'
    },
    faqs: [
      { q: 'Does Moso Bamboo decking turn gray over time?', a: 'Yes, like any natural wood, Moso Bamboo will turn gray under UV sunlight. Applying outdoor oil once a year will maintain its deep warm brown look.' },
      { q: 'Is Moso Bamboo harder than local hardwoods?', a: 'Yes, with a Janka hardness rating of 9.5 kg/mm², Moso Bamboo is harder and more scratch-resistant than Balau, Garapa, and Teak.' },
      { q: 'How long is the warranty on Bamboo X-treme?', a: 'MOSO® provides a 25-year manufacturer warranty against rot, decay, and structural failure of the boards.' }
    ],
    pricing: 'Starting from R1,850 per m²',
    calcLabel: 'Decking Area Size (m²)',
    calcRate: 1850,
    ctaText: 'Estimate Decking Cost'
  },
  'bamboo-flooring': {
    title: 'Moso Bamboo Flooring',
    subtitle: 'Eco-Friendly High-Density Indoor Flooring',
    heroImage: '/images/moso_bamboo_colors.jpg',
    gallery: [
      { src: '/images/moso_bamboo_colors.jpg', caption: 'High-density indoor bamboo flooring range showing rich grain' },
      { src: '/images/project_modern_house.png', caption: 'Modern villa installation of sustainable bamboo flooring' },
      { src: '/images/bamboo_advantage_proscons.jpg', caption: 'Smooth-sanded Moso Bamboo floor and wall panel board close-up' }
    ],
    description: 'Bring the warmth and luxury of natural wood into your home with carbon-negative interior bamboo flooring. Our solid and engineered Moso bamboo floors are crafted from high-density strand-woven fibers. This results in floorboards with a Janka hardness higher than oak or maple, outstanding scratch resistance, and excellent dimensional stability.',
    specsTitle: 'Interior Flooring Comparison',
    specsHeaders: ['Property', 'Moso Bamboo Flooring', 'Engineered Oak', 'Laminate Flooring'],
    specsRows: [
      ['Material Composition', 'Strand-woven bamboo fibers', 'Solid oak veneer on ply core', 'HDF core with printed picture'],
      ['Scratch Resistance', 'Excellent (Strand-woven high density)', 'Good (Veneer susceptible)', 'High (Aluminium oxide coat)'],
      ['Lifespan', '25 - 30 Years (Can be sanded)', '20 - 25 Years (Can be sanded)', '10 - 15 Years (Cannot sand)'],
      ['Eco Friendliness', 'Carbon-negative, 5-yr growth cycle', 'High footprint, 50-yr harvest', 'Chemical binders, petroleum resin'],
      ['Moisture Resistance', 'High dimensional stability', 'Moderate stability', 'Low stability (swells on edges)']
    ],
    sansTitle: 'SANS Indoor Installation & Subfloor Compliance',
    sansRules: [
      { rule: 'Subfloor Moisture Test', desc: 'Concrete subfloors must be moisture-tested to ensure moisture content is below 3.0% before laying bamboo flooring.' },
      { rule: 'Expansion Gaps', desc: 'An expansion gap of 8mm to 10mm must be left around all walls, door frames, and vertical fixtures to allow expansion.' },
      { rule: 'Level Subfloor', desc: 'Concrete subfloors must be self-levelled to have a deviation of less than 3mm over a 3-meter straight edge.' }
    ],
    process: [
      { step: '01', title: 'Subfloor Prep & Levelling', desc: 'Checking subfloor moisture levels, sanding down high spots, and applying self-levelling screed.' },
      { step: '02', title: 'Moisture Barrier Underlay', desc: 'Laying a high-density 2mm underlay with an integrated moisture barrier membrane to protect the wood.' },
      { step: '03', title: 'Board Layout & Clicking', desc: 'Installing the tongue-and-groove or click-lock bamboo floorboards, sorting for natural color variations.' },
      { step: '04', title: 'Skirting Boards & Profiles', desc: 'Fitting color-matched skirting boards and expansion profiles at door thresholds for a clean, professional finish.' }
    ],
    caseStudy: {
      title: 'Modern Ridgeway Villa Renovation',
      location: 'Ridgeway, Johannesburg',
      scope: 'Installation of 85m² Solid Moso Bamboo Flooring in living areas and master bedrooms.',
      timeline: '4 Days',
      budget: 'R102,000',
      description: 'The homeowner wanted a warm, durable floor to replace old carpets. We levelled the concrete screed, laid moisture barriers, and installed high-density strand-woven bamboo boards, creating a continuous layout without thresholds.',
      clientQuote: '"The floors look spectacular and feel extremely solid. The natural grain has so much character, and it stands up perfectly to our pets." - Sipho M.'
    },
    faqs: [
      { q: 'Can bamboo flooring be sanded and refinished?', a: 'Yes. Our high-density strand-woven bamboo flooring can be sanded down and refinished 2 to 3 times over its lifespan.' },
      { q: 'Is bamboo flooring suitable for underfloor heating?', a: 'Yes. Because bamboo is highly stable, it handles underfloor heating systems exceptionally well compared to solid hardwood.' },
      { q: 'How do you clean interior bamboo floors?', a: 'Clean with a soft broom or vacuum, and mop with a slightly damp microfiber mop using a pH-neutral wood floor cleaner. Avoid standing water.' }
    ],
    pricing: 'Starting from R1,200 per m²',
    calcLabel: 'Flooring Area Size (m²)',
    calcRate: 1200,
    ctaText: 'Estimate Flooring Cost'
  },
  'hardwood-decking': {
    title: 'Hardwood Timber Decking',
    subtitle: 'Classic Natural Hardwood Outdoor Decking',
    heroImage: '/images/timber_decking.png',
    gallery: [
      { src: '/images/timber_decking.png', caption: 'Golden-brown Garapa hardwood timber deck around pool' },
      { src: '/images/project_pool_deck.png', caption: 'Balau timber pool deck surround' },
      { src: '/images/before_after_deck.png', caption: 'Restoring a gray weathered hardwood deck' }
    ],
    description: 'For clients seeking the timeless feel of natural timber, we supply and install premium, responsibly-sourced hardwood decking. Garapa and Balau are highly dense hardwoods imported from South America and South East Asia, offering natural rot-resistance and structural strength. Built on engineered subframes, our hardwood decks provide an elegant outdoor space.',
    specsTitle: 'Hardwood Spec Comparison',
    specsHeaders: ['Property', 'Garapa Hardwood', 'Balau Hardwood', 'Treated Pine'],
    specsRows: [
      ['Color Tone', 'Warm Golden-Honey', 'Reddish-Brown', 'Pale Yellow / Greenish'],
      ['Wood Density', '850 kg/m³ (High)', '980 kg/m³ (Very High)', '550 kg/m³ (Medium-Low)'],
      ['Durability Class', 'Class 2 (Highly Durable)', 'Class 2 (Highly Durable)', 'Class 4 (Subject to decay)'],
      ['Life Expectancy', '15 - 20 Years', '15 - 20 Years', '7 - 10 Years'],
      ['Screwing Spec', 'Pre-drilling required', 'Pre-drilling required', 'Direct screwing possible']
    ],
    sansTitle: 'SANS Structural Hardwood Decking Specifications',
    sansRules: [
      { rule: 'S5 Structural Graded Joists', desc: 'All structural framing members must be S5 strength-graded timber, treated to H3 specification for outdoor exposure.' },
      { rule: 'Stainless Steel Fasteners', desc: 'Hardwood tannins corrode carbon steel. SANS requires grade 304 or 316 stainless steel screws and brackets to prevent black timber staining.' },
      { rule: 'Joist Spans', desc: 'Standard 20m board thickness requires structural joist spans not exceeding 450mm centers to ensure zero bounce.' }
    ],
    process: [
      { step: '01', title: 'Setting Concrete Piers', desc: 'Digging foundation holes and pouring structural concrete piers with galvanized anchors.' },
      { step: '02', title: 'Timber Framing Build', desc: 'Constructing the treated pine or hardwood structural framing, wrapping joist tops with joist tape.' },
      { step: '03', title: 'Board Pre-Drilling', desc: 'Pre-drilling and countersinking holes in the Garapa or Balau boards to prevent split ends.' },
      { step: '04', title: 'Sanding & UV Oil Finish', desc: 'Sanding the deck flat and applying two coats of premium penetrating UV protection oil to preserve color.' }
    ],
    caseStudy: {
      title: 'Steyn City Garapa Pool Surround',
      location: 'Steyn City Estate, Johannesburg',
      scope: '65m² Garapa hardwood deck built around a raised infinity pool.',
      timeline: '7 Days',
      budget: 'R125,000',
      description: 'We built a golden Garapa hardwood timber surround around a geometric pool. The subframe was built from H3 structural pine, with double joists at board ends. The boards were secured with countersunk stainless steel decking screws and sealed with Rubio Monocoat.',
      clientQuote: '"The craftsmanship is outstanding. The golden garapa deck looks so luxurious, and the hidden joint screws make it barefoot-friendly." - Chloe L.'
    },
    faqs: [
      { q: 'How often does a hardwood deck need maintenance?', a: 'Hardwood decking should be oiled twice a year (before summer and winter) to protect it from drying and splitting in the harsh South African sun.' },
      { q: 'Do you pre-drill hardwood boards?', a: 'Yes. Every hardwood deck requires pre-drilling and countersinking to avoid wood splitting.' },
      { q: 'Can you leave hardwood to weather naturally?', a: 'Yes. If left unoiled, hardwoods will slowly weather into a silvery-gray color, while maintaining their structural integrity.' }
    ],
    pricing: 'Starting from R1,800 per m²',
    calcLabel: 'Decking Area Size (m²)',
    calcRate: 1800,
    ctaText: 'Estimate Hardwood Cost'
  },
  'engineered-flooring': {
    title: 'Engineered Wood Flooring',
    subtitle: 'Luxury Hardwood Flooring for Interiors',
    heroImage: '/images/project_modern_house.png',
    gallery: [
      { src: '/images/project_modern_house.png', caption: 'Luxury engineered French Oak floor in modern open-plan home' },
      { src: '/images/moso_bamboo_colors.jpg', caption: 'Showroom samples of textured wood flooring options' },
      { src: '/images/hero_sofa_deck.jpg', caption: 'Seamless integration of indoor wood flooring and outdoor decking' }
    ],
    description: 'Engineered wood flooring offers the aesthetic beauty of solid timber with superior structural stability. Each floorboard consists of a genuine hardwood top veneer (e.g. French Oak, Walnut) laminated over a multi-layer cross-grain plywood core. This design minimizes natural timber movement, making it highly resistant to warping, cupping, or gap formation.',
    specsTitle: 'Wood Flooring Comparison',
    specsHeaders: ['Features', 'Engineered Oak Flooring', 'Solid Wood Flooring', 'Vinyl Plank Flooring'],
    specsRows: [
      ['Top Wear Layer', '3mm - 6mm Genuine Oak Wood', '18mm Solid Hardwood wood', '0.55mm Printed Vinyl/PVC'],
      ['Structural Stability', 'High (Cross-laminated ply core)', 'Low-Medium (Expands with weather)', 'High (SPC stone core)'],
      ['Lifespan / Refinishing', '20+ Years (Sanded 2-3 times)', '50+ Years (Sanded 6+ times)', '15 - 20 Years (Cannot sand)'],
      ['Underfloor Heating', 'Excellent (Thin, stable boards)', 'Poor (Susceptible to shrinkage)', 'Good (Check temp limits)'],
      ['Acoustics / Feel', 'Warm, soft natural wood sound', 'Loud wood bounce unless glued', 'Plastic / click sound']
    ],
    sansTitle: 'SANS Guidelines for Interior Engineered Wood Flooring',
    sansRules: [
      { rule: 'Concrete Levelling', desc: 'Concrete subfloors must be smooth. Deviations exceeding 3mm over a 3m straight edge must be corrected with self-levelling screed.' },
      { rule: 'Acclimatisation', desc: 'Wood floorboards must be stored inside the installation room for at least 48 hours to adapt to local humidity and temperature levels.' },
      { rule: 'Glue-Down vs Floating', desc: 'SANS recommends full elastic glue-down methods for areas with wide humidity changes or large open layouts to reduce board noise.' }
    ],
    process: [
      { step: '01', title: 'Subfloor Moisture Seal', desc: 'Applying a polyurethane damp-proof primer to seal any moisture coming from the concrete.' },
      { step: '02', title: 'Adhesive Application', desc: 'Spreading high-quality elastic polymer floor adhesive using a notched trowel.' },
      { step: '03', title: 'Board Installation', desc: 'Laying the engineered Oak planks, tapping them tightly together, and securing the joints.' },
      { step: '04', title: 'Trim & Skirting Details', desc: 'Installing wood skirting boards and solid wood transition profiles to cover expansion gaps.' }
    ],
    caseStudy: {
      title: 'Sandton Penthouse Oak Flooring',
      location: 'Morningside, Sandton',
      scope: 'Installation of 110m² Engineered French Oak plank flooring using full glue-down method.',
      timeline: '5 Days',
      budget: 'R155,000',
      description: 'The client requested premium wood floors compatible with an hydronic underfloor heating system. We applied a concrete moisture barrier, spread elastic glue, and installed 190mm wide brushed Oak planks with a matte lacquer seal.',
      clientQuote: '"The floors are warm, silent, and incredibly beautiful. The team was extremely tidy and finished right on time." - Andrew V.'
    },
    faqs: [
      { q: 'What is the advantage of engineered wood over solid wood?', a: 'Engineered flooring is significantly more stable. It expands and contracts 70% less than solid wood, making it less likely to warp in changing weather.' },
      { q: 'Can you install engineered oak in kitchens?', a: 'Yes, if installed using the glue-down method and sealed, but spills must be wiped up immediately to avoid water damage.' },
      { q: 'How thick is the top wear layer?', a: 'Our engineered flooring boards feature a 4mm genuine French Oak wear layer, allowing them to be sanded and refinished multiple times.' }
    ],
    pricing: 'Starting from R1,350 per m²',
    calcLabel: 'Flooring Area Size (m²)',
    calcRate: 1350,
    ctaText: 'Estimate Oak Cost'
  },
  'pergolas-cladding': {
    title: 'Pergolas & Cladding',
    subtitle: 'Architectural Timber Shading & Exterior Wall Cladding',
    heroImage: '/images/project_patio_gazebo.png',
    gallery: [
      { src: '/images/project_patio_gazebo.png', caption: 'Custom timber pergola shade structure over outdoor patio' },
      { src: '/images/project_modern_house.png', caption: 'Modern villa wall cladding detail' },
      { src: '/images/tanda_tula_walkway.jpg', caption: 'Bamboo column cladding at safari camp' }
    ],
    description: 'Create architectural highlights and shaded spaces with custom wooden pergolas and sustainable bamboo wall cladding. Pergolas provide structural shade while maintaining an open-air feel. Exterior cladding (using MOSO® Bamboo cladding boards) adds a beautiful natural facade to concrete walls, insulating the building and enhancing modern aesthetics.',
    specsTitle: 'Structure Materials Spec',
    specsHeaders: ['Features', 'Moso Bamboo Cladding', 'Treated Pine Framing', 'Garapa Timber Structure'],
    specsRows: [
      ['Ideal For', 'Exterior wall facades', 'Cost-effective structural posts', 'Premium pergola beams & screens'],
      ['Durability', 'Class 1 (Thermo-treated)', 'Class 4 (Pressure treated)', 'Class 2 (Natural Hardwood)'],
      ['Maintenance', 'Unoiled weathers to grey', 'Sealant required yearly', 'Rubio outdoor oil annually'],
      ['Thermal Insulation', 'R-Value insulating barrier', 'None', 'None'],
      ['Aesthetics', 'Modern slatted vertical design', 'Traditional timber structure', 'Golden-honey premium finish']
    ],
    sansTitle: 'SANS Regulations for Pergolas & Cladding Structures',
    sansRules: [
      { rule: 'Wind Load Engineering', desc: 'Pergolas must be structurally engineered to resist high wind forces. Timber posts must be anchored using heavy steel post brackets.' },
      { rule: 'Wall Ventilation', desc: 'Exterior cladding must be installed over batten strips to leave a 20mm air gap behind the boards, preventing damp buildup on brickwork.' },
      { rule: 'Height Limitations', desc: 'SANS regulations specify max structural heights for boundary walls and pergolas without certified architectural plan submittals.' }
    ],
    process: [
      { step: '01', title: 'Post Foundation Setting', desc: 'Digging foundation holes to 600mm deep and casting galvanized post shoes in concrete.' },
      { step: '02', title: 'Main Frame Erection', desc: 'Erecting upright timber columns and bolting main support beams with structural bolts.' },
      { step: '03', title: 'Slatted Roofing / Batten Grid', desc: 'Installing overhead shading slats or wall cladding battens spaced at 400mm centers.' },
      { step: '04', title: 'Board Mounting & Trim', desc: 'Clamping grooved bamboo cladding boards onto hidden clips, then sanding and sealing beams.' }
    ],
    caseStudy: {
      title: 'Steyn City Patio Pergola & Screen',
      location: 'Steyn City, Johannesburg',
      scope: 'Construction of 5x3m Garapa timber pergola with integrated slatted privacy screens.',
      timeline: '8 Days',
      budget: 'R195,000',
      description: 'We built a modern pergola over a composite deck. The main posts are 150x150mm Garapa columns. Overhead slatted battens provide 50% solar shading, and matching slatted privacy screens block out neighboring houses.',
      clientQuote: '"The pergola transformed our patio. We now have the perfect balance of shade and sun, and the structure is extremely sturdy." - Thabo N.'
    },
    faqs: [
      { q: 'Do I need council plans for a timber pergola?', a: 'Pergolas with open slatted roofs are classified as minor building work and often do not require plans, but it is best to check estate guidelines.' },
      { q: 'How long does bamboo wall cladding last?', a: 'MOSO® Bamboo cladding has a 25-year warranty. It is highly stable and does not warp, twist, or rot under sun and rain.' },
      { q: 'Can you install cladding over brick walls?', a: 'Yes. We mount treated timber battens onto the brickwork using masonry anchors, leaving a ventilation gap, and then clip the cladding boards on.' }
    ],
    pricing: 'Custom Quotes based on size',
    calcLabel: 'Structure Footprint (m²)',
    calcRate: 1950,
    ctaText: 'Estimate Structure Cost'
  },
  'restoration-maintenance': {
    title: 'Restoration & Maintenance',
    subtitle: 'Deep Cleaning, Sanding & Re-Oiling Services',
    heroImage: '/images/before_after_deck.png',
    gallery: [
      { src: '/images/before_after_deck.png', caption: 'Before and After side-by-side comparison of timber restoration' },
      { src: '/images/timber_decking.png', caption: 'Newly oiled timber deck with warm glowing finish' },
      { src: '/images/hero_sofa_deck.jpg', caption: 'Perfectly maintained rooftop deck after UV sealing' }
    ],
    description: 'Protect your wood and bamboo investments with our professional maintenance and restoration services. Weather and UV rays degrade timber over time, turning it gray, drying it out, and causing splits. We provide deep cleaning using specialized eco-friendly detergents, dust-free sanding, floor board repairs, and application of premium penetrating oils.',
    specsTitle: 'Maintenance Options Comparison',
    specsHeaders: ['Service Level', 'Deep Clean & Oil', 'Full Sand & Seal', 'Structural Restoration'],
    specsRows: [
      ['Suitable For', 'Decks in good condition but faded', 'Scratched, grayed, or peeling decks', 'Decks with rotting joists or broken boards'],
      ['Sanding Required', 'None (Chemical wash & brush clean)', '100% Sanding down to raw timber', 'Replacing broken members before sanding'],
      ['Time Required', '1 - 2 Days', '2 - 3 Days', '3 - 5 Days'],
      ['Typical Lifespan', '6 - 12 Months', '12 - 24 Months', 'Multiple years before next sanding'],
      ['Cost Level', 'Low (Preventative maintenance)', 'Medium (Restoration)', 'High (Structural repair)']
    ],
    sansTitle: 'SANS Guidelines for Structural Deck Maintenance',
    sansRules: [
      { rule: 'Structural Inspection', desc: 'Before restoration, all framing joists are checked for moisture rot or structural sag. Rotting joists must be replaced.' },
      { rule: 'Screw Torque Check', desc: 'Loose timber decking screws must be retightened or replaced with stainless steel screws to prevent tripping hazards.' },
      { rule: 'Slip Resistance', desc: 'Restored timber decks around pools should be finished with textured wood oil or anti-slip additives to ensure SANS safety compliance.' }
    ],
    process: [
      { step: '01', title: 'Inspection & Repair', desc: 'Checking subframe stability, replacing any rotting boards, and tightening loose screws.' },
      { step: '02', title: 'Eco-Friendly Jet Wash', desc: 'Applying a specialized wood restorer detergent and pressure washing at low pressure to clear gray dirt.' },
      { step: '03', title: 'Dust-Free Sanding', desc: 'Using professional orbital sanders to sand down the deck, exposing fresh, raw timber grain.' },
      { step: '04', title: 'Penetrating Oil Sealing', desc: 'Applying two coats of premium UV oil (Woca, Rubio, or Woodoc) to feed and protect the wood.' }
    ],
    caseStudy: {
      title: 'Kyalami Estate Deck Restoration',
      location: 'Kyalami, Midrand',
      scope: 'Deep cleaning, sanding, and oiling of a weathered 45m² Balau pool deck.',
      timeline: '3 Days',
      budget: 'R15,000',
      description: 'The deck had been neglected for 3 years, turning gray with peeling varnish. We sanded down to raw wood, replaced 4 broken timber boards, tightened loose screws, and applied two coats of honey-tinted penetrating wood oil.',
      clientQuote: '"The deck looks brand new! All the grey weathered wood is gone, and the color is gorgeous. Excellent professional service." - Peter W.'
    },
    faqs: [
      { q: 'How often should I oil my wooden deck?', a: 'In Johannesburg, we recommend oiling decks at least once a year. Decks with full sun and pool exposure may require re-oiling every 6 to 9 months.' },
      { q: 'Can you sand composite decking?', a: 'No, composite decking cannot be sanded. However, we can deep-clean composite decks using professional high-pressure detergents to remove dirt and mold.' },
      { q: 'What is the difference between varnishing and oiling?', a: 'Varnish forms a hard plastic layer on top of the wood that eventually cracks and peels. Penetrating oils soak into the wood fibers, feeding the wood and letting it breathe.' }
    ],
    pricing: 'Starting from R220 per m²',
    calcLabel: 'Deck / Floor Size (m²)',
    calcRate: 220,
    ctaText: 'Estimate Restoration Cost'
  }
};

export default function ServicePage({ serviceId, setView }) {
  const detail = serviceDetails[serviceId] || serviceDetails['bamboo-decking'];
  const [openFaq, setOpenFaq] = useState(null);
  
  // Interactive mini-calculator states
  const [calcInput, setCalcInput] = useState(25);
  const [calcSubframe, setCalcSubframe] = useState('standard');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
    setCalcInput(25); // reset calculator
    setCalcSubframe('standard');
    setActiveImageIdx(0);
  }, [serviceId]);

  // Pricing math for mini-calculator
  const baseCost = calcInput * detail.calcRate;
  const subframeUpgradeCost = calcSubframe === 'premium' ? calcInput * 350 : 0;
  const totalCalcEstimate = baseCost + subframeUpgradeCost;

  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* 1. Service Hero Banner (Full Screen Cinematic Background) */}
      <section style={{ position: 'relative', height: '70vh', minHeight: '550px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img src={detail.heroImage} alt={detail.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-deep) 0%, transparent 100%), linear-gradient(to right, rgba(5,5,5,0.8) 0%, transparent 100%)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'left', width: '100%' }}>
          <span className="badge fade-in-up active" style={{ backgroundColor: 'rgba(60, 168, 70, 0.1)', color: 'var(--accent-eco)', border: '1px solid rgba(60, 168, 70, 0.2)' }}>{detail.subtitle}</span>
          <h1 className="hero-title fade-in-up active" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', textAlign: 'left', margin: '10px 0 30px', background: 'linear-gradient(to bottom, #fff, #999)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.04em' }}>{detail.title}</h1>
          <button 
            onClick={() => setView('landing')} 
            style={{ color: '#fff', fontSize: '0.95rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--bg-glass)', padding: '12px 24px', borderRadius: '100px', border: '1px solid var(--border-glass)' }}
            className="fade-in-up active"
          >
            ← Back to All Services
          </button>
        </div>
      </section>

      {/* 2. Main Description Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', marginBottom: '24px' }}>Overview & Scope</h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
                {detail.description}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                All of our decking and flooring installations are completely custom-made. By managing everything from site surveys to engineering compliance, our building crews ensure SANS regulations are followed to the letter, adding long-lasting value to your residential or commercial property.
              </p>
            </div>
            
            {/* Quick Summary Card */}
            <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '32px', backdropFilter: 'var(--glass-blur)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-eco)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Investment Guide</span>
              <h3 style={{ fontSize: '2rem', color: '#fff', margin: '8px 0 16px', fontWeight: 800 }}>{detail.pricing}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>*Approximate installation pricing for South African standard residential specifications. Excludes custom structural engineers report if needed.</p>
              <button onClick={() => setView('quote')} className="btn btn-primary" style={{ width: '100%' }}>Book Site Survey</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Multi-Image Gallery Showcase */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Project Visual Gallery</h2>
          <p className="section-desc text-center" style={{ marginBottom: '50px' }}>Explore some of our recently completed builds for this service across Gauteng.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '30px' }}>
            
            {/* Large Active Image View */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '480px', border: '1px solid var(--border-glass)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img src={detail.gallery[activeImageIdx]?.src} alt="Active Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '24px', color: '#fff' }}>
                <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{detail.gallery[activeImageIdx]?.caption}</p>
              </div>
            </div>
            
            {/* Thumbnail Selectors */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {detail.gallery.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  style={{
                    height: '148px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: idx === activeImageIdx ? '3px solid var(--accent-eco)' : '1px solid var(--border-glass)',
                    transition: 'var(--transition)',
                    opacity: idx === activeImageIdx ? 1 : 0.6
                  }}
                  onMouseEnter={(e) => { if(idx !== activeImageIdx) e.currentTarget.style.opacity = '0.9' }}
                  onMouseLeave={(e) => { if(idx !== activeImageIdx) e.currentTarget.style.opacity = '0.6' }}
                >
                  <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Specifications Comparison Table */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{detail.specsTitle}</h2>
          <p className="section-desc text-center" style={{ marginBottom: '50px' }}>Make informed decisions by comparing different building and material grades.</p>
          
          <div style={{ overflowX: 'auto', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '24px', backdropFilter: 'var(--glass-blur)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-glass)' }}>
                  {detail.specsHeaders.map((header, idx) => (
                    <th key={idx} style={{ padding: '16px', fontWeight: 700, color: idx === 0 ? 'var(--text-primary)' : 'var(--accent-secondary)' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {detail.specsRows.map((row, rowIdx) => (
                  <tr key={rowIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseLeave={(e) => e.currentTarget.style.background = 'none'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} style={{ padding: '18px 16px', color: cellIdx === 0 ? '#fff' : 'var(--text-secondary)', fontSize: '0.95rem' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Live Material Cost Estimator Slider (Interactive) */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge" style={{ backgroundColor: 'rgba(60, 168, 70, 0.1)', color: 'var(--accent-eco)', border: '1px solid rgba(60, 168, 70, 0.2)' }}>Live Estimate Widget</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Quick Estimator</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>Drag the sliders below to get a rough cost assessment based on size specs.</p>
          </div>

          <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', backdropFilter: 'var(--glass-blur)' }}>
            
            {/* Input Slider */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <label style={{ fontSize: '1rem', fontWeight: 600 }}>{detail.calcLabel}</label>
                <span style={{ fontSize: '1.2rem', color: 'var(--accent-eco)', fontWeight: 700 }}>{calcInput} m²</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="250" 
                step="5"
                value={calcInput} 
                onChange={(e) => setCalcInput(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-eco)', cursor: 'pointer' }}
              />
            </div>

            {/* Selector Options */}
            <div style={{ marginBottom: '40px' }}>
              <label style={{ fontSize: '1rem', fontWeight: 600, display: 'block', marginBottom: '12px' }}>Subframe / Installation Spec</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <button 
                  onClick={() => setCalcSubframe('standard')}
                  style={{
                    padding: '16px',
                    background: calcSubframe === 'standard' ? 'rgba(60, 168, 70, 0.1)' : 'rgba(0,0,0,0.3)',
                    border: calcSubframe === 'standard' ? '2px solid var(--accent-eco)' : '1px solid var(--border-glass)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    color: '#fff',
                    textAlign: 'left',
                    transition: 'var(--transition)'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '4px' }}>Standard Base</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>H3 Treated structural framework or floor barrier</span>
                </button>
                <button 
                  onClick={() => setCalcSubframe('premium')}
                  style={{
                    padding: '16px',
                    background: calcSubframe === 'premium' ? 'rgba(229, 169, 59, 0.1)' : 'rgba(0,0,0,0.3)',
                    border: calcSubframe === 'premium' ? '2px solid var(--accent-secondary)' : '1px solid var(--border-glass)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    color: '#fff',
                    textAlign: 'left',
                    transition: 'var(--transition)'
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '4px', color: 'var(--accent-secondary)' }}>Premium Support (+R350/m²)</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Galvanised steel joists or full sound dampening</span>
                </button>
              </div>
            </div>

            {/* Result Panel */}
            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Budgetary Cost Projection:</span>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--accent-eco)', fontWeight: 800, marginTop: '4px' }}>R {totalCalcEstimate.toLocaleString()}*</h3>
              </div>
              <button 
                onClick={() => {
                  localStorage.setItem('top3k_hero_prompt', `Build a ${calcInput} size ${detail.title} with a ${calcSubframe} structural base`);
                  setView('calculator');
                }} 
                className="btn btn-primary"
              >
                Refine Estimate →
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '16px', textAlign: 'right' }}>*Estimate excludes VAT & site earthmoving variables. Valid for South Africa.</p>

          </div>
        </div>
      </section>

      {/* 6. SANS Building Compliance Section */}
      <section className="section-padding" style={{ background: 'rgba(60, 168, 70, 0.02)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '50px', alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(60, 168, 70, 0.1)', color: 'var(--accent-eco)', border: '1px solid rgba(60, 168, 70, 0.2)' }}>National Building Regulations</span>
              <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>SANS Compliance</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                All decking and flooring structures in South Africa must strictly adhere to the National Building Regulations. Constructing non-compliant outdoor structures can result in council fines, estate removal notices, and severe safety liabilities.
              </p>
              <div style={{ padding: '16px', background: 'rgba(60, 168, 70, 0.05)', borderLeft: '4px solid var(--accent-eco)', borderRadius: '0 8px 8px 0', fontSize: '0.9rem', color: '#fff' }}>
                🌿 <strong>Eco-Friendly & Safe:</strong> Our team guarantees all structural columns, load spacing, and slip ratings satisfy SANS requirements.
              </div>
            </div>
            
            {/* Rules Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {detail.sansRules.map((rule, idx) => (
                <div key={idx} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: '16px', padding: '24px', backdropFilter: 'var(--glass-blur)' }}>
                  <h4 style={{ color: 'var(--accent-eco)', fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600 }}>{rule.rule}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Case Study Section */}
      <section className="section-padding" style={{ background: 'rgba(5, 5, 5, 0.8)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Case Study Feature</h2>
          <p className="section-desc text-center" style={{ marginBottom: '50px' }}>Real projects constructed and signed off in South Africa.</p>
          
          <div style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-lg)', padding: '40px', backdropFilter: 'var(--glass-blur)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', fontWeight: 700 }}>Featured Project</span>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginTop: '4px' }}>{detail.caseStudy.title}</h3>
              </div>
              <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <div>📍 <strong>Location:</strong> {detail.caseStudy.location}</div>
                <div>⏱️ <strong>Duration:</strong> {detail.caseStudy.timeline}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginBottom: '32px' }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '12px' }}>Project Scope:</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>{detail.caseStudy.scope}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{detail.caseStudy.description}</p>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {detail.caseStudy.clientQuote}
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-eco)', fontWeight: 700 }}>Verified Customer Review</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', background: 'rgba(255, 255, 255, 0.02)', padding: '16px 24px', borderRadius: '12px', border: '1px solid var(--border-glass)', fontSize: '0.9rem' }}>
              <div>💰 <strong>Project Budget:</strong> {detail.caseStudy.budget}</div>
              <div>🏗️ <strong>Contractor:</strong> SWDF SA (Turnkey)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Construction Process Timeline */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Installation Process</h2>
          <p className="section-desc text-center" style={{ marginBottom: '60px' }}>Step-by-step layout of how we execute from material delivery to hand over.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px' }}>
            {detail.process.map((p, i) => (
              <div key={i} style={{ position: 'relative', padding: '32px 24px', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-md)', backdropFilter: 'var(--glass-blur)' }}>
                <span style={{ position: 'absolute', top: '-20px', left: '24px', fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-eco)', opacity: 0.7 }}>{p.step}</span>
                <h4 style={{ fontSize: '1.2rem', marginTop: '16px', marginBottom: '12px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px', color: '#fff' }}>{p.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs Accordion */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Service Specifications FAQs</h2>
          <p className="section-desc text-center" style={{ marginBottom: '50px' }}>Get immediate answers regarding building regulations, costs, and durability.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {detail.faqs.map((faq, i) => (
              <div key={i} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', backdropFilter: 'var(--glass-blur)' }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', fontWeight: 600, fontSize: '1.1rem', color: '#fff' }}
                >
                  {faq.q}
                  <span style={{ color: 'var(--accent-eco)', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'var(--transition)', fontSize: '1.5rem', fontWeight: 300 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 24px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action Section */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--border-glass)' }}>
        <div className="container text-center">
          <div style={{ background: 'linear-gradient(135deg, var(--bg-glass), rgba(60,168,70,0.1))', border: '1px solid var(--accent-eco)', padding: '80px 20px', borderRadius: 'var(--radius-lg)', boxShadow: '0 30px 60px rgba(60,168,70,0.15)', backdropFilter: 'var(--glass-blur)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Ready to Build Your Sustainable Deck or Floor?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: 1.7 }}>Contact our Johannesburg wood specialists today. We will set up a site inspection and provide a fully engineered custom layout proposal.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => {
                  setView('calculator');
                }} 
                className="btn btn-primary"
                style={{ padding: '18px 40px', fontSize: '1.1rem', backgroundColor: 'var(--accent-eco)', borderColor: 'var(--accent-eco)' }}
              >
                {detail.ctaText}
              </button>
              <button onClick={() => setView('contact')} className="btn btn-secondary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>Contact Sales Team</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
